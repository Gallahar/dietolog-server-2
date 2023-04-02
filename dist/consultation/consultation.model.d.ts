import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { LanguagedString } from 'src/config/interfaces';
export interface ConsultationModel extends Base {
}
export declare class ConsultationModel {
    title: LanguagedString;
    type: LanguagedString;
    options: LanguagedString[];
    price: string;
}
