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
exports.ConsultationService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const consultation_default_1 = require("./consultation.default");
const consultation_model_1 = require("./consultation.model");
let ConsultationService = class ConsultationService {
    constructor(ConsultationModel) {
        this.ConsultationModel = ConsultationModel;
    }
    async getAll() {
        return this.ConsultationModel.find().exec();
    }
    async getById(_id) {
        let consultation = await this.ConsultationModel.findById(_id);
        if (!consultation)
            throw new common_1.NotFoundException('Consultation not found');
        return consultation;
    }
    async create() {
        let consultation = new this.ConsultationModel(consultation_default_1.defaultConsultation);
        await consultation.save();
    }
    async update(_id, dto) {
        await this.ConsultationModel.findByIdAndUpdate(_id, dto).exec();
    }
    async delete(_id) {
        await this.ConsultationModel.findByIdAndDelete(_id);
    }
};
ConsultationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(consultation_model_1.ConsultationModel)),
    __metadata("design:paramtypes", [Object])
], ConsultationService);
exports.ConsultationService = ConsultationService;
//# sourceMappingURL=consultation.service.js.map