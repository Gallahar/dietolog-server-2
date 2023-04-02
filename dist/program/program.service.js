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
exports.ProgramService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const program_default_1 = require("./program.default");
const program_model_1 = require("./program.model");
let ProgramService = class ProgramService {
    constructor(ProgramModel) {
        this.ProgramModel = ProgramModel;
    }
    async getBySlug(slug) {
        let program = await this.ProgramModel.findOne({ slug });
        if (!program)
            throw new common_1.NotFoundException('Program not found');
        return program;
    }
    async getAll() {
        return this.ProgramModel.find().exec();
    }
    async create() {
        let emptyProgram = await this.ProgramModel.findOne({ slug: '' });
        if (emptyProgram)
            throw new common_1.NotFoundException('Empty program already exists');
        let newProgram = new this.ProgramModel(program_default_1.defaultProgram);
        await newProgram.save();
    }
    async getById(_id) {
        let program = await this.ProgramModel.findById(_id).exec();
        if (!program)
            throw new common_1.NotFoundException('Program not found');
        return program;
    }
    async update(_id, dto) {
        await this.ProgramModel.findByIdAndUpdate(_id, dto).exec();
    }
    async delete(_id) {
        await this.ProgramModel.findByIdAndDelete(_id).exec();
    }
};
ProgramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(program_model_1.ProgramModel)),
    __metadata("design:paramtypes", [Object])
], ProgramService);
exports.ProgramService = ProgramService;
//# sourceMappingURL=program.service.js.map