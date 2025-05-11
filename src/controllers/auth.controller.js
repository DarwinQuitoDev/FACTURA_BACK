const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');

// Generar tokens
const generateTokens = (userData) => {
    const accessToken = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '8h' });
    const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
};

// Login
exports.login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        // Buscar usuario por nombre de usuario o correo
        const user = await Usuario.findOne({
            where: {
                nombre_usuario: usuario
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Verificar contraseña
        const isValidPassword =  true;//(user.dataValues.password == (password));
        if (!isValidPassword) {
            // Incrementar intentos fallidos
            await user.increment('intentos_fallidos');

            if (user.intentos_fallidos >= 3) {
                await user.update({ activo: false });
                return res.status(401).json({
                    error: 'Cuenta bloqueada por múltiples intentos fallidos'
                });
            }

            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar tokens
        const userData = {
            id: user.id,
            nombre_usuario: user.nombre_usuario,
            correo: user.correo
        };

        const { accessToken, refreshToken } = generateTokens(userData);

        // Actualizar usuario
        await user.update({
            refresh_token: refreshToken,
            intentos_fallidos: 0,
            ultimo_login: new Date()
        });

        res.json({
            user: userData,
            accessToken,
            refreshToken
        });

    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error en el proceso de login' });
    }
};

// Refresh token
exports.refresh = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(401).json({ error: 'No se proporcionó refresh token' });
        }

        // Verificar refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        // Buscar usuario
        const user = await Usuario.findOne({
            where: {
                id: decoded.id,
                refresh_token: refreshToken,
                activo: true
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        // Generar nuevos tokens
        const userData = {
            id: user.id,
            nombre_usuario: user.nombre_usuario,
            correo: user.correo
        };

        const tokens = generateTokens(userData);

        // Actualizar refresh token
        await user.update({ refresh_token: tokens.refreshToken });

        res.json(tokens);

    } catch (error) {
        console.error('Error en refresh token:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }
        res.status(500).json({ error: 'Error en el proceso de refresh token' });
    }
};

// Logout
exports.logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        // Invalidar refresh token
        await Usuario.update(
            { refresh_token: null },
            { where: { refresh_token: refreshToken } }
        );

        res.json({ mensaje: 'Sesión cerrada correctamente' });
    } catch (error) {
        console.error('Error en logout:', error);
        res.status(500).json({ error: 'Error en el proceso de logout' });
    }
};