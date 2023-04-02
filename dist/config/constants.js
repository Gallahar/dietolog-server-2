"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailAdmin = exports.MailAddress = exports.MailPassword = exports.AdminHash = void 0;
require('dotenv').config();
exports.AdminHash = process.env.ADMIN_HASH;
exports.MailPassword = process.env.MAIL_PASSWORD;
exports.MailAddress = process.env.MAIL_ADDRESS;
exports.MailAdmin = process.env.MAIL_ADMIN;
//# sourceMappingURL=constants.js.map