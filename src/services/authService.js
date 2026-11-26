import bcrypt from 'bcrypt';
import AppError from '../utils/AppError.js';

import {
    findUserByPseudo,
    findUserByEmail,
    insertUser
} from '../models/authModel.js';

export const createUser = async (data) => {
    if (!data || !data.pseudo || !data.email ||!data.password || !data.confirmPassword) {
        throw new AppError('Tous les champs sont requis.', 400)
    };

    if (data.password !== data.confirmPassword) {
        throw new AppError('Les mots de passes ne correspondent pas.', 400)
    };

    if (data.password.length < 6) {
        throw new AppError('Votre mot de passe doit comporter aux moins 6 caractères.', 400);
    };

    const existingPseudo = await findUserByPseudo(data.pseudo)
    const existingUser = await findUserByEmail(data.email);

    if (existingPseudo) {
        throw new AppError('Pseudo déjà utilisé.', 409);
    };

    if (existingUser) {
        throw new AppError('Utilisateur déjà enregistré.', 409);
    };

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const userData = await insertUser({
        pseudo: data.pseudo,
        email: data.email,
        password: hashedPassword,
        role: 'user'
    });

    return userData;
};

export const verificationLogin = async (data) => {
    if (!data || !data.email ||!data.password) {
        throw new AppError('Tous les champs sont requis.', 400)
    };

    const password = data.password;
    const existingUser = await findUserByEmail(data.email);

    if (!existingUser) {
        throw new AppError('Adresse e-mail ou mot de passe incorrect.', 401);
    };

    const comparePassword = await bcrypt.compare(password, existingUser.password);

    if (!comparePassword) {
        throw new AppError('Adresse e-mail ou mot de passe incorrect.', 401)
    };

    return existingUser;
};