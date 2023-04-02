import { LanguagedString } from "src/config/interfaces";
import { IPackageService } from "../package.interface";
export declare class UpdatePackageDto {
    title: LanguagedString;
    description: LanguagedString;
    heading_1: LanguagedString;
    heading_2: LanguagedString;
    sub_heading_1: LanguagedString;
    sub_heading_2: LanguagedString;
    services: IPackageService[];
}
