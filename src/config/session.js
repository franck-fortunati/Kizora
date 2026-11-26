import session from 'express-session';
import MySQLStoreFactory from 'express-mysql-session';
import db from './db.js';

const MySQLStore = MySQLStoreFactory(session);
const sessionStore = new MySQLStore({
    createDatabaseTable: false,
    clearExpired: true,
    expiration: 86400000
}, db);

export default session({
    name:'kizora.sid',
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
    }
});