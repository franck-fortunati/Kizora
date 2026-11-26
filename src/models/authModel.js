import db from "../config/db.js";

export const findUserByPseudo = async (pseudo) => {
    const [result] = await db.query('SELECT * FROM users WHERE pseudo = ?', [pseudo]);
    return result[0];
};

export const findUserByEmail = async (email) => {
    const [result] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return result[0];
};

export const insertUser = async (userData) => {
    const { pseudo, email, password, role } = userData;
    const [result] = await db.query('INSERT INTO users (pseudo, email, password, role) VALUES (?, ?, ?, ?)', [pseudo, email, password, role]);
    return result;
};