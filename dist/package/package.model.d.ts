import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { LanguagedString } from 'src/config/interfaces';
import { IPackageService } from './package.interface';
export interface PackageModel extends Base {
}
export declare class PackageModel {
    title: LanguagedString;
    description: LanguagedString;
    heading_1: LanguagedString;
    heading_2: LanguagedString;
    sub_heading_1: LanguagedString;
    sub_heading_2: LanguagedString;
    services: IPackageService[];
}
