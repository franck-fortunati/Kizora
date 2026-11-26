import AppError from '../utils/AppError.js';

export function isAuthenticated (req, res, next) {
    const userSession = req.session?.user;

    if (!userSession) {
        return res.redirect('/login')
    };

    return next()
};

export function isAdmin (req, res, next) {
    const userSession = req.session?.user;

    if (!userSession) {
        return res.redirect('/login')
    };

    if (userSession.role !== 'admin') {
        return next(new AppError('Accès interdit.', 403));
    };

    return next();
};

export function isEditorOrAdmin (req, res, next) {
    const userSession = req.session?.user;

    if (!userSession) {
        return res.redirect('/login')
    };

    if (userSession.role !== 'admin' && userSession.role !== 'editor') {
        return next(new AppError('Accès interdit.', 403));
    };

    return next();
};