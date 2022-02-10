const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    // response message for production
    res.json({
        message: err.message,
        stack: process.env.NODE_ENVIRONMENT === 'production' ? null : err.stack
    })
};

module.exports = {errorHandler};