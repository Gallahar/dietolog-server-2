import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface ConsultHelpModel extends Base {
}
export declare class ConsultHelpModel extends TimeStamps {
    name: string;
    phone: string;
    email: string;
    description: string;
    isConfirmed: boolean;
}
