export function notFound (req, res) {
    return res.status(404).send('Erreur 404 Page introuvable.');
};

export function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    };

    console.error(err);
    let statusError = err.status || err.statusCode || 500;

    if (!Number.isInteger(statusError) || statusError < 400 || statusError > 599) {
        statusError = 500
    };

    return res.status(statusError).send('Une erreur est survenue.')
};