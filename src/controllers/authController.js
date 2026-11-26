import {
    createUser,
    verificationLogin
} from '../services/authService.js'

export const registerForm = (req, res, next) => {
    try {
        res.render('layout', {
            title: 'Inscription',
            description: 'La page inscription pour le site web Kizora',
            page: 'pages/register',
            error: null
        });
    } catch (err) {
        return next(err);
    };
};

export const loginForm = (req, res, next) => {
    try {
        res.render('layout', {
            title: 'Connexion',
            description: 'La page connexion pour le site web Kizora',
            page: 'pages/login',
            error: null
        });
    } catch (err) {
        return next(err);
    };
};

export const register = async (req, res, next) => {
    try {
        const data = req.body;
        await createUser(data);
        return res.redirect('/login')
    } catch (err) {
        return next(err);
    };
};

export const login = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await verificationLogin(data);

        req.session.regenerate((err) => {
            if (err) {
                return next(err);
            };

            req.session.user = {
                id: user.id,
                pseudo: user.pseudo,
                email: user.email,
                role: user.role
            };

            req.session.save((err) => {
                if (err) {
                    return next(err);
                };

                return res.redirect('/');
            });
        });
    } catch (err) {
        return next(err);
    };
};

export const logout = (req, res, next) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            };

            res.clearCookie('kizora.sid', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/'
            });

            return res.redirect('/');
        });
    } catch (err) {
        return next(err);
    };
};