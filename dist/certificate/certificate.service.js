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
exports.CertificateService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const certificate_default_1 = require("./certificate.default");
const certificate_model_1 = require("./certificate.model");
let CertificateService = class CertificateService {
    constructor(CertificateModel) {
        this.CertificateModel = CertificateModel;
    }
    async getAll() {
        return this.CertificateModel.find().exec();
    }
    async getById(_id) {
        let certificate = await this.CertificateModel.findById(_id).exec();
        if (!certificate)
            throw new common_1.NotFoundException('Certificate not found');
        return certificate;
    }
    async create() {
        let emptyCertificate = await this.CertificateModel.findOne({ link: '' });
        if (emptyCertificate)
            throw new common_1.BadRequestException('Empty program already exists');
        let newCertificate = new this.CertificateModel(certificate_default_1.defaultCertificate);
        await newCertificate.save();
    }
    async update(_id, dto) {
        return this.CertificateModel.findByIdAndUpdate(_id, dto, {
            new: true,
        }).exec();
    }
    async delete(_id) {
        await this.CertificateModel.findByIdAndDelete(_id).exec();
    }
};
CertificateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(certificate_model_1.CertificateModel)),
    __metadata("design:paramtypes", [Object])
], CertificateService);
exports.CertificateService = CertificateService;
//# sourceMappingURL=certificate.service.js.map