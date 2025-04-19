const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

class AuthController {
  async login(req, res) {
    try {
      const { nombre_usuario, contrasena } = req.body;
      
      if (!nombre_usuario || !contrasena) {
        return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
      }

      // Verificar que req.db está definido
      if (!req.db) {
        throw new Error('Conexión a la base de datos no disponible');
      }

      // 1. Validar usuario
      const [users] = await req.db.query(
        'SELECT * FROM usuarios WHERE nombre_usuario = ? AND activo = TRUE', 
        [nombre_usuario]
      );
      
      if (users.length === 0) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
      
      const user = users[0];
      
      // 2. Verificar contraseña
      //const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena_hash);
      const isPasswordValid = (contrasena == user.contrasena_hash)
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
      
      // 3. Obtener información de la persona
      const [personas] = await req.db.query(
        'SELECT * FROM personas WHERE id = ?', 
        [user.persona_id]
      );
      
      if (personas.length === 0) {
        return res.status(404).json({ error: 'Información de usuario incompleta' });
      }
      
      const persona = personas[0];
      
      // 4. Generar tokens
      const token = jwt.sign(
        {
          id: user.id,
          username: user.nombre_usuario,
          role: user.rol_id || 'user' // Valor por defecto si no hay rol
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      
      const refreshToken = jwt.sign(
        { id: user.id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
      );
      
      // 5. Responder
      res.json({
        token,
        refreshToken,
        user: {
          id: user.id,
          nombre_usuario: user.nombre_usuario,
          email: user.correo,
          persona: {
            id: persona.id,
            nombres: persona.nombres,
            apellidos: persona.apellidos,
            identificacion: persona.numero_identificacion
          }
        }
      });
      
    } catch (error) {
      console.error('Error en login:', error.message);
      res.status(500).json({ 
        error: 'Error en el servidor durante autenticación',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      
      if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token es requerido' });
      }
      
      // Verificar el refresh token
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      
      // Buscar usuario
      const [users] = await req.db.query(
        'SELECT * FROM usuarios WHERE id = ? AND activo = TRUE', 
        [decoded.id]
      );
      
      if (users.length === 0) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }
      
      const user = users[0];
      
      // Generar nuevo token
      const newToken = jwt.sign(
        {
          id: user.id,
          username: user.nombre_usuario,
          role: user.rol_id || 'user'
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      
      res.json({ token: newToken });
      
    } catch (error) {
      console.error('Error refrescando token:', error.message);
      
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Token inválido' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expirado' });
      }
      
      res.status(500).json({ 
        error: 'Error al refrescar el token',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  async me(req, res) {
    try {
      const userId = req.userData.id;
      
      // Obtener información del usuario
      const [users] = await req.db.query(
        `SELECT u.*, p.nombres, p.apellidos, p.numero_identificacion 
         FROM usuarios u
         JOIN personas p ON u.persona_id = p.id
         WHERE u.id = ? AND u.activo = TRUE`, 
        [userId]
      );
      
      if (users.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      
      const user = users[0];
      
      // Eliminar información sensible
      const userData = {
        id: user.id,
        nombre_usuario: user.nombre_usuario,
        correo: user.correo,
        activo: user.activo,
        nombres: user.nombres,
        apellidos: user.apellidos,
        numero_identificacion: user.numero_identificacion,
        rol_id: user.rol_id
      };
      
      res.json(userData);
      
    } catch (error) {
      console.error('Error obteniendo información de usuario:', error.message);
      res.status(500).json({ 
        error: 'Error al obtener información del usuario',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}

module.exports = new AuthController();