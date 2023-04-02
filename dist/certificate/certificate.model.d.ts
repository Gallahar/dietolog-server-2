import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { LanguagedString } from 'src/config/interfaces';
export interface CertificateModel extends Base {
}
export declare class CertificateModel {
    title: LanguagedString;
    link: string;
    preview: string;
}
