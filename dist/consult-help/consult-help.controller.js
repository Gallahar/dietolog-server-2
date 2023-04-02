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
exports.ConsultHelpController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const admin_guard_1 = require("../admin-auth/guards/admin.guard");
const id_validation_pipe_1 = require("../pipes/id-validation.pipe");
const consult_help_service_1 = require("./consult-help.service");
const create_consult_help_dto_1 = require("./dto/create-consult-help.dto");
let ConsultHelpController = class ConsultHelpController {
    constructor(ConsultHelpService) {
        this.ConsultHelpService = ConsultHelpService;
    }
    async create(language, dto) {
        return this.ConsultHelpService.create(dto, language);
    }
    async getAllConfirmed() {
        return this.ConsultHelpService.getAllConfirmed();
    }
    async getAllNotConfirmed() {
        return this.ConsultHelpService.getAllNotConfirmed();
    }
    async getById(_id) {
        return this.ConsultHelpService.getById(_id);
    }
    async updateCountOpened(_id) {
        return this.ConsultHelpService.toggleConfirmation(_id);
    }
    async delete(_id) {
        return this.ConsultHelpService.delete(_id);
    }
};
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Headers)('language')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_consult_help_dto_1.CreateConsultHelpDto]),
    __metadata("design:returntype", Promise)
], ConsultHelpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('confirmed'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultHelpController.prototype, "getAllConfirmed", null);
__decorate([
    (0, common_1.Get)('not-confirmed'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultHelpController.prototype, "getAllNotConfirmed", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ConsultHelpController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('toggle-confirmation/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ConsultHelpController.prototype, "updateCountOpened", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsultHelpController.prototype, "delete", null);
ConsultHelpController = __decorate([
    (0, common_1.Controller)('consult-help'),
    __metadata("design:paramtypes", [consult_help_service_1.ConsultHelpService])
], ConsultHelpController);
exports.ConsultHelpController = ConsultHelpController;
//# sourceMappingURL=consult-help.controller.js.map