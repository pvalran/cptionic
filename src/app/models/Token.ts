export class Token {
    public authorities: any[];
    public bearer: string;
    public token: string;
    public userName: string;

    constructor(obj: any) {
        this.authorities = obj.authorities as any[];
        this.bearer = obj.bearer as string;
        this.token = obj.token as string;
        this.userName = obj.userName as string;
    }
}