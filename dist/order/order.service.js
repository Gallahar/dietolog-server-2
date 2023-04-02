"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const email_service_1 = require("../email/email.service");
const order_data_1 = require("./order.data");
const order_model_1 = require("./order.model");
let OrderService = class OrderService {
    constructor(OrderModel) {
        this.OrderModel = OrderModel;
    }
    async create(dto, language) {
        let newOrder = new this.OrderModel(dto);
        await newOrder.save();
        const { theme, text } = (0, order_data_1.getOrderConfirmationText)(language, dto.name);
        email_service_1.default.confirmation(dto.email, theme, text);
        email_service_1.default.adminAlert('Заказ программы');
    }
    async getAllConfirmed() {
        return this.OrderModel.find({ isConfirmed: true }).exec();
    }
    async getAllNotConfirmed() {
        return this.OrderModel.find({ isConfirmed: false }).exec();
    }
    async getById(_id) {
        return this.OrderModel.findById(_id).exec();
    }
    async confirm(_id) {
        await this.OrderModel.findByIdAndUpdate(_id, {
            isConfirmed: true,
        }).exec();
    }
    async delete(_id) {
        await this.OrderModel.findByIdAndDelete(_id);
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(order_model_1.OrderModel)),
    __metadata("design:paramtypes", [Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map