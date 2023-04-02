/// <reference types="multer" />
import { FileService } from './file.service';
export declare class FileController {
    private readonly FileService;
    constructor(FileService: FileService);
    uploadFile(file: Express.Multer.File, folder: string): Promise<import("./file.interface").FileResponse>;
    deleteFile(path: string): Promise<void>;
}
