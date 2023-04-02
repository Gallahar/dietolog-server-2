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
exports.ProgramController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const admin_guard_1 = require("../admin-auth/guards/admin.guard");
const update_program_dto_1 = require("./dto/update-program.dto");
const program_service_1 = require("./program.service");
let ProgramController = class ProgramController {
    constructor(ProgramService) {
        this.ProgramService = ProgramService;
    }
    async getAll() {
        return this.ProgramService.getAll();
    }
    async getBySlug(slug) {
        return this.ProgramService.getBySlug(slug);
    }
    async getById(_id) {
        return this.ProgramService.getById(_id);
    }
    async create() {
        return this.ProgramService.create();
    }
    async update(_id, dto) {
        return this.ProgramService.update(_id, dto);
    }
    async delete(_id) {
        return this.ProgramService.delete(_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, update_program_dto_1.UpdateProgramDto]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "delete", null);
ProgramController = __decorate([
    (0, common_1.Controller)('programs'),
    __metadata("design:paramtypes", [program_service_1.ProgramService])
], ProgramController);
exports.ProgramController = ProgramController;
//# sourceMappingURL=program.controller.js.map