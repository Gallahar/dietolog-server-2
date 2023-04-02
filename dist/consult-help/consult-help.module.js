"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultHelpModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const consult_help_controller_1 = require("./consult-help.controller");
const consult_help_model_1 = require("./consult-help.model");
const consult_help_service_1 = require("./consult-help.service");
let ConsultHelpModule = class ConsultHelpModule {
};
ConsultHelpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: consult_help_model_1.ConsultHelpModel,
                    schemaOptions: {
                        collection: 'consult-help-records',
                    },
                },
            ]),
        ],
        controllers: [consult_help_controller_1.ConsultHelpController],
        providers: [consult_help_service_1.ConsultHelpService],
    })
], ConsultHelpModule);
exports.ConsultHelpModule = ConsultHelpModule;
//# sourceMappingURL=consult-help.module.js.map