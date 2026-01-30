<<<<<<< HEAD
# Hackathon 17 - Tesla Shop Backend

**Tema:** E-commerce de productos Tesla (Model Y, Cybertruck accesorios, merch Elon Musk/Optimus).

**Tecnologías:**
- NodeJS + Express
- Sequelize (ORM OOP-like) + MySQL
- JWT autenticación/autorización
- Stripe pagos
- CRUD completo, middleware, roles (user/admin)

**Instalación:**
1. Clona repo
2. cp .env.sample .env (completa DB y Stripe/JWT)
3. npm install
4. npm run dev

**Endpoints clave (Postman):**
- POST /api/auth/register {email, password}
- POST /api/auth/login → obtén token
- GET /api/products → lista productos
- POST /api/products → crear (admin)
- POST /api/orders/checkout → Stripe session (con token)

**Presentación:**
- Código fuente: server.js, models, controllers, etc.
- OOP: Models como clases Sequelize
- JWT: Middleware auth/admin
- Pruebas: Registro/login, CRUD productos, pago Stripe
- Escalabilidad: Estructura MVC-like

🚀🔥
=======
# tesla-shop-backend
Backend e-commerce Tesla Shop
>>>>>>> aecf7f6934966b050cb02f675244ff4ff4a55f28
