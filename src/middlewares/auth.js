const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  try {
    // 1. Verificar header de autorización
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: 'No se proporcionó token de autenticación' });
    }
    
    // 2. Extraer el token
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Formato de token inválido. Use: Bearer <token>' });
    }
    
    // 3. Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 4. Adjuntar datos del usuario al request
    req.userData = decoded;
    
    next();
    
  } catch (error) {
    console.error('Error en middleware de autenticación:', error.message);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Token inválido' });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }
    
    res.status(500).json({ 
      error: 'Error en autenticación',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = authMiddleware;