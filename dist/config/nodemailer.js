"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const constants_1 = require("./constants");
const nodemailer = require('nodemailer');
exports.transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: constants_1.MailAddress,
        pass: constants_1.MailPassword,
    },
});
//# sourceMappingURL=nodemailer.js.map