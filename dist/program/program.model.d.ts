import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { LanguagedString } from 'src/config/interfaces';
import { IProgramRadio } from './program.interface';
export interface ProgramModel extends Base {
}
export declare class ProgramModel {
    title: LanguagedString;
    slug: string;
    price: number;
    photo: string;
    photo_small: string;
    description: LanguagedString;
    description_short: LanguagedString;
    included: LanguagedString[];
    radios: IProgramRadio[];
}
