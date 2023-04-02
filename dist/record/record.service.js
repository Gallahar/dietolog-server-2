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
exports.RecordService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const email_service_1 = require("../email/email.service");
const record_data_1 = require("./record.data");
const record_model_1 = require("./record.model");
let RecordService = class RecordService {
    constructor(RecordModel) {
        this.RecordModel = RecordModel;
    }
    async create(dto, language) {
        const newRecord = new this.RecordModel(dto);
        await newRecord.save();
        const { theme, text } = (0, record_data_1.getRecordConfirmationText)(language);
        email_service_1.default.confirmation(dto.email, theme, text);
        email_service_1.default.adminAlert('Записать на консультацию');
    }
    async getById(_id) {
        let record = await this.RecordModel.findById(_id).exec();
        if (!record)
            throw new common_1.NotFoundException('Record not found');
        return record;
    }
    async getAllConfirmed() {
        return this.RecordModel.find({ isConfirmed: true })
            .sort({ date: -1 })
            .exec();
    }
    async getAllNotConfirmed() {
        return this.RecordModel.find({ isConfirmed: false })
            .sort({ date: -1 })
            .exec();
    }
    async toggleConfirmation(_id) {
        const record = await this.RecordModel.findById(_id);
        if (!record)
            throw new common_1.NotFoundException('Record not found');
        record.isConfirmed = !record.isConfirmed;
        await record.save();
    }
    async delete(_id) {
        const record = await this.RecordModel.findById(_id);
        if (!record)
            throw new common_1.NotFoundException('Record not found');
        await record.deleteOne();
    }
};
RecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(record_model_1.RecordModel)),
    __metadata("design:paramtypes", [Object])
], RecordService);
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map