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
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
export declare class ReviewService {
    private readonly ReviewModel;
    constructor(ReviewModel: ModelType<ReviewModel>);
    create(dto: CreateReviewDto): Promise<void>;
    getAllApplied(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ReviewModel> & ReviewModel & Required<{
        _id: Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    getAllNotApplied(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ReviewModel> & ReviewModel & Required<{
        _id: Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    apply(_id: Types.ObjectId): Promise<void>;
    delete(_id: Types.ObjectId): Promise<void>;
}
