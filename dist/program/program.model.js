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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class ProgramModel {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], ProgramModel.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", String)
], ProgramModel.prototype, "slug", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], ProgramModel.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ProgramModel.prototype, "photo", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ProgramModel.prototype, "photo_small", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], ProgramModel.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], ProgramModel.prototype, "description_short", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], ProgramModel.prototype, "included", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], ProgramModel.prototype, "radios", void 0);
exports.ProgramModel = ProgramModel;
//# sourceMappingURL=program.model.js.map