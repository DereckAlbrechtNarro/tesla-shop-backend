## Despliegue en Render

**URL del Backend (Render)**: https://tesla-shop-backend.onrender.com

**Base de datos**: PostgreSQL gratuito de Render

**Notas importantes**:
- Plan Free → primera petición puede tardar 20-60 segundos (cold start normal).
- Usa Postman para pruebas completas.

## Pruebas validadas (Postman)

1. Registro: POST /api/auth/register
2. Login: POST /api/auth/login → token JWT
3. CRUD Productos: GET /api/products, POST /api/products (con token admin)
4. Checkout Stripe: POST /api/orders/checkout (con token)

## Cumplimiento de consignas (Trabajo Final / Hackathon Final)

- Backend NodeJS + Express + Sequelize (programación orientada a objetos en models)
- Autenticación y autorización con JWT
- Operaciones CRUD completas
- Gestión eficiente de datos en base de datos PostgreSQL
- Integración de pagos con Stripe
- Código escalable, estructura clara (MVC-like)
- Desplegado en Render con base de datos en la nube
- Pruebas y validación en ambiente real

Enlace GitHub: https://github.com/DereckAlbrectNarro/tesla-shop-backend

¡Listo 🚀🔥!