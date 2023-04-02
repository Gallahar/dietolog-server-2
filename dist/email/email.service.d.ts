declare class EmailService {
    confirmation(to: string, theme: string, text: string): Promise<void>;
    adminAlert(subject: string): Promise<void>;
}
declare const _default: EmailService;
export default _default;
