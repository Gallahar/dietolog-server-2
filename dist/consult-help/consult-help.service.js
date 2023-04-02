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
exports.ConsultHelpService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const email_service_1 = require("../email/email.service");
const consult_help_data_1 = require("./consult-help.data");
const consult_help_model_1 = require("./consult-help.model");
let ConsultHelpService = class ConsultHelpService {
    constructor(ConsultHelpModel) {
        this.ConsultHelpModel = ConsultHelpModel;
    }
    async create(dto, language) {
        const newConsultHelp = new this.ConsultHelpModel(dto);
        await newConsultHelp.save();
        const { theme, text } = (0, consult_help_data_1.getConsultHelpConfirmationText)(language);
        email_service_1.default.confirmation(dto.email, theme, text);
        email_service_1.default.adminAlert('Заказ на помощь в выборе консультации');
    }
    async getById(_id) {
        let consultHelp = await this.ConsultHelpModel.findById(_id).exec();
        if (!consultHelp)
            throw new common_1.NotFoundException('Help consult consultHelp not found');
        return consultHelp;
    }
    async getAllConfirmed() {
        return this.ConsultHelpModel.find({ isConfirmed: true })
            .sort({ date: -1 })
            .exec();
    }
    async getAllNotConfirmed() {
        return this.ConsultHelpModel.find({ isConfirmed: false })
            .sort({ date: -1 })
            .exec();
    }
    async toggleConfirmation(_id) {
        const consultHelp = await this.ConsultHelpModel.findById(_id);
        if (!consultHelp)
            throw new common_1.NotFoundException('Record not found');
        consultHelp.isConfirmed = !consultHelp.isConfirmed;
        await consultHelp.save();
    }
    async delete(_id) {
        const consultHelp = await this.ConsultHelpModel.findById(_id);
        if (!consultHelp)
            throw new common_1.NotFoundException('Record not found');
        await consultHelp.deleteOne();
    }
};
ConsultHelpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(consult_help_model_1.ConsultHelpModel)),
    __metadata("design:paramtypes", [Object])
], ConsultHelpService);
exports.ConsultHelpService = ConsultHelpService;
//# sourceMappingURL=consult-help.service.js.map