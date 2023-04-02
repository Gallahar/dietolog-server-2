"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderConfirmationText = void 0;
const getOrderConfirmationText = (language, programTitle) => {
    return language === 'ru'
        ? {
            theme: `Заказ программы ${programTitle}`,
            text: `Это письмо подтверждает, что заказ программы ${programTitle} произошел успешно. Я свяжусь с Вами в ближайшее время.`,
        }
        : language === 'ua'
            ? {
                theme: `Заказ програми ${programTitle}`,
                text: `Цей лист підтверджує, що заказ програми ${programTitle} пройшов успішно. Я зв'яжусь з Вами найближчим часом.`,
            }
            : {
                theme: `Program order ${programTitle}`,
                text: `This letter confirms that the program ${programTitle} order went successful. I will contact you ASAP.`,
            };
};
exports.getOrderConfirmationText = getOrderConfirmationText;
//# sourceMappingURL=order.data.js.map