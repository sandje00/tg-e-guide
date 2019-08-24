module.exports = {
    PORT: process.env.PORT || 5000,
    db: {
        database: process.env.DB_NAME || 'tg-e-guide',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '11235TumPeccet81321',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost'
        }
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
};