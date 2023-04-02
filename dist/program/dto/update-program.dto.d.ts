import { LanguagedString } from 'src/config/interfaces';
import { IProgramRadio } from '../program.interface';
export declare class UpdateProgramDto {
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
