"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordConfirmationText = void 0;
const getRecordConfirmationText = (language) => {
    return language === 'ru'
        ? {
            theme: 'Запись на консультацию',
            text: 'Это письмо подтверждает, что запись на консультацию была успешна. Я свяжусь с Вами в ближайшее время.',
        }
        : language === 'ua'
            ? {
                theme: 'Запис на консультацiю',
                text: "Цей лист підтверджує, що запис на консультацію був успішним. Я зв'яжусь з Вами найближчим часом.",
            }
            : {
                theme: 'Sign for a consultation',
                text: 'This letter confirms that the consultation appointment was successful. I will contact you ASAP.',
            };
};
exports.getRecordConfirmationText = getRecordConfirmationText;
//# sourceMappingURL=record.data.js.map