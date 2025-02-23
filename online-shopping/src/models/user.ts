export class UserModel{
    private name: string;
    private address: string;
    private phnum: number;
    private email: string;

    constructor (name: string, address: string, phnum: number, email: string){
        this.name = name;
        this.address = address;
        this.phnum = phnum;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getAddress(): string{
        return this.address;
    }

    getPhoneNumber(): number{
        return this.phnum;
    }

    getEmail(): string{
        return this.email;
    }
}