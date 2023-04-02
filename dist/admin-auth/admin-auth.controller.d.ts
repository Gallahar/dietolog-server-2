import { AdminAuthService } from './admin-auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AdminAuthController {
    private readonly AdminAuthService;
    constructor(AdminAuthService: AdminAuthService);
    login(dto: LoginDto): Promise<string>;
    check(): Promise<void>;
}
