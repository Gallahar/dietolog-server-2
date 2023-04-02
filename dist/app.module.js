"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/config/dist");
const typegoose_module_1 = require("nestjs-typegoose/dist/typegoose.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongo_config_1 = require("./config/mongo.config");
const admin_auth_module_1 = require("./admin-auth/admin-auth.module");
const record_module_1 = require("./record/record.module");
const certificate_module_1 = require("./certificate/certificate.module");
const file_module_1 = require("./file/file.module");
const review_module_1 = require("./review/review.module");
const program_module_1 = require("./program/program.module");
const order_module_1 = require("./order/order.module");
const consult_help_module_1 = require("./consult-help/consult-help.module");
const consultation_module_1 = require("./consultation/consultation.module");
const package_module_1 = require("./package/package.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dist_1.ConfigModule.forRoot(),
            typegoose_module_1.TypegooseModule.forRootAsync({
                imports: [dist_1.ConfigModule],
                inject: [dist_1.ConfigService],
                useFactory: mongo_config_1.getMongoDbConfig,
            }),
            admin_auth_module_1.AdminAuthModule,
            record_module_1.RecordsModule,
            certificate_module_1.CertificateModule,
            file_module_1.FileModule,
            review_module_1.ReviewModule,
            program_module_1.ProgramModule,
            order_module_1.OrderModule,
            consult_help_module_1.ConsultHelpModule,
            consultation_module_1.ConsultationModule,
            package_module_1.PackageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map