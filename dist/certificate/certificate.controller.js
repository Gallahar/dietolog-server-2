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
exports.CertificateController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const admin_guard_1 = require("../admin-auth/guards/admin.guard");
const id_validation_pipe_1 = require("../pipes/id-validation.pipe");
const certificate_service_1 = require("./certificate.service");
const update_certificate_dto_1 = require("./dto/update-certificate.dto");
let CertificateController = class CertificateController {
    constructor(CertificateService) {
        this.CertificateService = CertificateService;
    }
    async getAll() {
        return await this.CertificateService.getAll();
    }
    async getById(_id) {
        return await this.CertificateService.getById(_id);
    }
    async create() {
        return await this.CertificateService.create();
    }
    async update(_id, dto) {
        return await this.CertificateService.update(_id, dto);
    }
    async delete(_id) {
        return await this.CertificateService.delete(_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, update_certificate_dto_1.updateCertificateDto]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "delete", null);
CertificateController = __decorate([
    (0, common_1.Controller)('certificates'),
    __metadata("design:paramtypes", [certificate_service_1.CertificateService])
], CertificateController);
exports.CertificateController = CertificateController;
//# sourceMappingURL=certificate.controller.js.map