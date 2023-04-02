/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { LanguageType } from 'src/config/interfaces';
import { ConsultHelpModel } from './consult-help.model';
import { CreateConsultHelpDto } from './dto/create-consult-help.dto';
export declare class ConsultHelpService {
    private readonly ConsultHelpModel;
    constructor(ConsultHelpModel: ModelType<ConsultHelpModel>);
    create(dto: CreateConsultHelpDto, language: LanguageType): Promise<void>;
    getById(_id: Types.ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ConsultHelpModel> & ConsultHelpModel & Required<{
        _id: Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getAllConfirmed(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ConsultHelpModel> & ConsultHelpModel & Required<{
        _id: Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    getAllNotConfirmed(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ConsultHelpModel> & ConsultHelpModel & Required<{
        _id: Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    toggleConfirmation(_id: Types.ObjectId): Promise<void>;
    delete(_id: string): Promise<void>;
}