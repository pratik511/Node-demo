const { HTTP_CODES } = require("../json/enums.json");

module.exports = {
    BAD_REQUEST: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.BAD_REQUEST).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    DUPLICATE_VALUE: ({ res, message, data = {} } = {}) => {
        res.status(HTTP_CODES.DUPLICATE_VALUE).send({
            success: false,
            message: message || "Duplicate value.",
            payload: data,
        });
    },

    FORBIDDEN: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.FORBIDDEN).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    CATCH_ERROR: ({ res, message = "-", data = {} } = {}) => {
        let responseCode = HTTP_CODES.INTERNAL_SERVER_ERROR;
        if ((message && message.includes("validation failed")) || message.includes("duplicate key error collection")) responseCode = HTTP_CODES.BAD_REQUEST;
        res.status(responseCode).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    METHOD_NOT_ALLOWED: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.METHOD_NOT_ALLOWED).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    MOVED_PERMANENTLY: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.MOVED_PERMANENTLY).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    NOT_ACCEPTABLE: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.NOT_ACCEPTABLE).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    NOT_FOUND: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.NOT_FOUND).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    NO_CONTENT_FOUND: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.NO_CONTENT_FOUND).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    OK: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.OK).send({
            success: true,
            messages: message,
            payload: data,
        });
    },

    PERMANENT_REDIRECT: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.PERMANENT_REDIRECT).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    UNAUTHORIZED: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.UNAUTHORIZED).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    UPGRADE_REQUIRED: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.UPGRADE_REQUIRED).send({
            success: false,
            message: message,
            payload: data,
        });
    },

    VALIDATION_ERROR: ({ res, message = "-", data = {} } = {}) => {
        res.status(HTTP_CODES.VALIDATION_ERROR).send({
            success: false,
            message: message,
            payload: data,
        });
    },
};
