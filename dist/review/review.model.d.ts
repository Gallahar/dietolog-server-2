import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface ReviewModel extends Base {
}
export declare class ReviewModel extends TimeStamps {
    name: string;
    text: string;
    isApplied: boolean;
}
