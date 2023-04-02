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
exports.RecordController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const admin_guard_1 = require("../admin-auth/guards/admin.guard");
const id_validation_pipe_1 = require("../pipes/id-validation.pipe");
const create_record_dto_1 = require("./dto/create-record.dto");
const record_service_1 = require("./record.service");
let RecordController = class RecordController {
    constructor(RecordService) {
        this.RecordService = RecordService;
    }
    async create(language, dto) {
        return this.RecordService.create(dto, language);
    }
    async getAllConfirmed() {
        return this.RecordService.getAllConfirmed();
    }
    async getAllNotConfirmed() {
        return this.RecordService.getAllNotConfirmed();
    }
    async getById(_id) {
        return this.RecordService.getById(_id);
    }
    async updateCountOpened(_id) {
        return this.RecordService.toggleConfirmation(_id);
    }
    async delete(_id) {
        return this.RecordService.delete(_id);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Headers)('language')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('confirmed'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "getAllConfirmed", null);
__decorate([
    (0, common_1.Get)('not-confirmed'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "getAllNotConfirmed", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('toggle-confirmation/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "updateCountOpened", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "delete", null);
RecordController = __decorate([
    (0, common_1.Controller)('records'),
    __metadata("design:paramtypes", [record_service_1.RecordService])
], RecordController);
exports.RecordController = RecordController;
//# sourceMappingURL=record.controller.js.map