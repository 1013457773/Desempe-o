# 🎮 Aplicación de Gestión de Videojuegos

Sistema web para gestionar videojuegos con autenticación, registro y funcionalidades completas de CRUD. Desarrollado como parte de una prueba técnica con React, json-server y Vite.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React + Vite
- 🛣 React Router DOM
- 💾 json-server (API simulada)
- 🎨 Tailwind CSS o estilos personalizados
- 📦 SweetAlert2

---

## ✨ Funcionalidades

- **Iniciar sesión**
- **Registro de nuevos usuarios**
- **CRUD completo de videojuegos**
  - Crear
  - Listar
  - Editar
  - Eliminar (con confirmación)
- **Protección de rutas (acceso sólo con sesión activa)**
- **Validaciones visuales y alertas con SweetAlert2**
- **Base de datos local que se actualiza automáticamente**

---

## 📁 Estructura del proyecto

/mi-proyecto
├── public/
│ └── index.html
├── src/
│ ├── Pages/
│ │ ├── Inicio.jsx
│ │ ├── Registro.jsx
│ │ └── PanelPrincipal.jsx
│ ├── Componentes/
│ │ ├── FormularioJuego.jsx
│ │ ├── TarjetaJuego.jsx
│ │ └── RutasProtegida.jsx
│ ├── Contexto/
│ │ └── Autenticacion.jsx
│ ├── servicios/
│ │ └── api.js
│ ├── estilos/
│ │ └── index.css
│ ├── App.jsx
│ └── main.jsx
├── datos.json
├── package.json
└── vite.config.js

1. Clona el proyecto:

```bash
git https://github.com/1013457773/Desempe-o.git
cd mi-proyecto
```

2. el url de Vercel

https://desempe-ozxh1lqzi-jose-luis-s-projects-cfa02120.vercel.app
