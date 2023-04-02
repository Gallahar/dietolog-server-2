import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface RecordModel extends Base {
}
export declare class RecordModel extends TimeStamps {
    name: string;
    phone: string;
    email: string;
    isConfirmed: boolean;
}
