import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface OrderModel extends Base {
}
export declare class OrderModel extends TimeStamps {
    program_title: string;
    params: {
        title: string;
        value: string;
    }[];
    name: string;
    phone: string;
    email: string;
    isConfirmed: boolean;
}
