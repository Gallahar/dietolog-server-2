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
exports.ConsultationController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const admin_guard_1 = require("../admin-auth/guards/admin.guard");
const consultation_service_1 = require("./consultation.service");
const update_consultation_dto_1 = require("./dto/update-consultation.dto");
let ConsultationController = class ConsultationController {
    constructor(ConsultationService) {
        this.ConsultationService = ConsultationService;
    }
    async getAll() {
        return this.ConsultationService.getAll();
    }
    async getById(_id) {
        return this.ConsultationService.getById(_id);
    }
    async create() {
        return this.ConsultationService.create();
    }
    async update(_id, dto) {
        return this.ConsultationService.update(_id, dto);
    }
    async delete(_id) {
        return this.ConsultationService.delete(_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, update_consultation_dto_1.UpdateConsultationDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "delete", null);
ConsultationController = __decorate([
    (0, common_1.Controller)('consultations'),
    __metadata("design:paramtypes", [consultation_service_1.ConsultationService])
], ConsultationController);
exports.ConsultationController = ConsultationController;
//# sourceMappingURL=consultation.controller.js.map