# FACTURA_BACK

Sistema backend para la gestión de facturación electrónica en Ecuador, diseñado para empresas que requieren automatizar la emisión, almacenamiento y validación de comprobantes tributarios electrónicos conforme a la normativa del SRI.

## 📦 Funcionalidades principales

- 🔐 Autenticación de usuarios con JWT
- 👥 Gestión de clientes y usuarios
- 📦 Registro de productos y servicios
- 🧾 Emisión de facturas electrónicas
- 📤 Comunicación con servicios del SRI (simulado/integrable)
- 📊 Generación de reportes contables y de ventas

## 🛠️ Tecnologías utilizadas

- **Node.js** – Entorno de ejecución
- **Express.js** – Framework para APIs REST
- **Sequelize** – ORM para conexión con base de datos relacional
- **MySQL** – Motor de base de datos
- **JWT (jsonwebtoken)** – Autenticación segura
- **dotenv** – Gestión de variables de entorno

## 🗂️ Estructura del proyecto

```
FACTURA_BACK/
├── config/           # Configuración de base de datos y entorno
├── controllers/      # Lógica de negocio por entidad
├── middlewares/      # Validaciones y seguridad
├── models/           # Definición de entidades Sequelize
├── routes/           # Definición de endpoints REST
├── utils/            # Funciones auxiliares
├── .env              # Variables de entorno (no subir)
├── app.js            # Punto de entrada principal
└── package.json
```

## 🚀 Instalación y ejecución local

1. Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/FACTURA_BACK.git
cd FACTURA_BACK
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

Crea un archivo `.env` con el siguiente contenido:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=facturacion_db
DB_USER=root
DB_PASSWORD=tu_clave
JWT_SECRET=secreto_seguro
```

4. Ejecuta el servidor en desarrollo:

```bash
npm run dev
```

## 🔒 Seguridad

- Tokens JWT con expiración.
- Encriptación de contraseñas con `bcrypt`.
- Validaciones básicas con middleware.

## 🧪 Pruebas

Próximamente se integrarán pruebas unitarias con `Jest`
