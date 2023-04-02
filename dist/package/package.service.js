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
exports.PackageService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const package_default_1 = require("./package.default");
const package_model_1 = require("./package.model");
let PackageService = class PackageService {
    constructor(PackageModel) {
        this.PackageModel = PackageModel;
    }
    async getAll() {
        return this.PackageModel.find().exec();
    }
    async getById(_id) {
        let _package = await this.PackageModel.findById(_id);
        if (!_package)
            throw new common_1.NotFoundException('Package not found');
        return _package;
    }
    async create() {
        let empty_package = await this.PackageModel.findOne({
            title: {
                ru: '',
                ua: '',
                en: '',
            },
        });
        if (empty_package)
            throw new common_1.BadRequestException('Empty package already exists');
        let _package = new this.PackageModel(package_default_1.defaultPackage);
        await _package.save();
    }
    async update(_id, dto) {
        await this.PackageModel.findByIdAndUpdate(_id, dto).exec();
    }
    async delete(_id) {
        await this.PackageModel.findByIdAndDelete(_id);
    }
};
PackageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(package_model_1.PackageModel)),
    __metadata("design:paramtypes", [Object])
], PackageService);
exports.PackageService = PackageService;
//# sourceMappingURL=package.service.js.map