import { LoginDto } from './dto/login.dto';
export declare class AdminAuthService {
    login(dto: LoginDto): Promise<string>;
}
