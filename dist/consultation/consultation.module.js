"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const consultation_controller_1 = require("./consultation.controller");
const consultation_model_1 = require("./consultation.model");
const consultation_service_1 = require("./consultation.service");
let ConsultationModule = class ConsultationModule {
};
ConsultationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: consultation_model_1.ConsultationModel,
                    schemaOptions: {
                        collection: 'consultations',
                    },
                },
            ]),
        ],
        controllers: [consultation_controller_1.ConsultationController],
        providers: [consultation_service_1.ConsultationService],
    })
], ConsultationModule);
exports.ConsultationModule = ConsultationModule;
//# sourceMappingURL=consultation.module.js.map