"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;
function usermiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        res.status(401).json({
            message: "No token provided"
        });
        return;
    }
    try {
        const decode = jwt.verify(token, jwt_secret);
        if (decode) {
            req.userId = decode.id;
            next();
            res.status(401).json({
                message: "Unauthorized"
            });
            return;
        }
    }
    catch (err) {
        res.status(403).json({
            message: "invalid token"
        });
    }
}
module.exports = {
    usermiddleware,
    jwt_secret
};
