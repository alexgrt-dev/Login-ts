# Proyecto de Login

## Descripción

Este proyecto implementa un sistema de autenticación básico con un frontend en React y un backend en Express. Permite a los usuarios iniciar sesión con credenciales predefinidas y recibir un token JWT como respuesta.

## Tecnologías Utilizadas

### Frontend

- React 19
- TypeScript
- Vite (bundler y servidor de desarrollo)

### Backend

- Node.js
- Express
- TypeScript
- JSON Web Token (JWT) para autenticación

## Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- npm o yarn

## Instalación

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

## Ejecución

### Backend

```bash
cd backend
npm run dev
```

El servidor se iniciará en http://localhost:3001

### Frontend

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en http://localhost:5173 (o el puerto que asigne Vite)

## Uso

Para iniciar sesión, utiliza las siguientes credenciales predefinidas:

- Usuario: admin
- Contraseña: 1234

Al iniciar sesión correctamente, se mostrará un token JWT que puede ser utilizado para autenticar solicitudes a APIs protegidas.

## Características

- Formulario de inicio de sesión con validación
- Autenticación mediante JWT
- Indicador de carga durante el proceso de inicio de sesión
- Manejo de errores para credenciales incorrectas

## Desarrollo

### Scripts Disponibles

#### Backend

- `npm run dev`: Inicia el servidor en modo desarrollo con recarga automática
- `npm run build`: Compila el código TypeScript
- `npm start`: Inicia el servidor desde el código compilado

#### Frontend

- `npm run dev`: Inicia el servidor de desarrollo de Vite
- `npm run build`: Compila la aplicación para producción
- `npm run preview`: Previsualiza la versión compilada

## Seguridad

Nota: Este proyecto es para fines educativos. En un entorno de producción, se recomienda:

- Utilizar HTTPS
- Almacenar contraseñas con hash y salt
- Cambiar la clave secreta del JWT
- Implementar mecanismos de protección contra ataques comunes

## Licencia

Todos los derechos reservados © alexgrt
