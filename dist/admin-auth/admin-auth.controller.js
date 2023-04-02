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
exports.AdminAuthController = void 0;
const common_1 = require("@nestjs/common");
const admin_auth_service_1 = require("./admin-auth.service");
const login_dto_1 = require("./dto/login.dto");
const admin_guard_1 = require("./guards/admin.guard");
let AdminAuthController = class AdminAuthController {
    constructor(AdminAuthService) {
        this.AdminAuthService = AdminAuthService;
    }
    async login(dto) {
        return this.AdminAuthService.login(dto);
    }
    async check() {
        return;
    }
};
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AdminAuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(new admin_guard_1.AdminGuard()),
    (0, common_1.Get)('/check'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminAuthController.prototype, "check", null);
AdminAuthController = __decorate([
    (0, common_1.Controller)('admin-auth'),
    __metadata("design:paramtypes", [admin_auth_service_1.AdminAuthService])
], AdminAuthController);
exports.AdminAuthController = AdminAuthController;
//# sourceMappingURL=admin-auth.controller.js.map