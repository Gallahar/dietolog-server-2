"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../config/constants");
const nodemailer_1 = require("../config/nodemailer");
class EmailService {
    async confirmation(to, theme, text) {
        await nodemailer_1.transporter.sendMail({
            from: constants_1.MailAddress,
            to,
            subject: theme,
            html: text,
        });
    }
    async adminAlert(subject) {
        await nodemailer_1.transporter.sendMail({
            from: constants_1.MailAddress,
            to: constants_1.MailAdmin,
            subject,
            html: `<b>Новый заказ</b>`,
        });
    }
}
exports.default = new EmailService();
//# sourceMappingURL=email.service.js.map