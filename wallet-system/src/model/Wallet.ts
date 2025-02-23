import { InsufficientBalanceError } from "src/error/InsufficientBalanceError";
import { NegativeBalanceAmount } from "src/error/NegativeBalanceAmount";

export class WalletModel{
    private balance:number=0;
    constructor(balance: number){
        this.balance=balance;
    }
    getBalance(): number{
        return this.balance;
    }

    refillWallet(amount: number):void{
        if(amount<=0)
            throw new NegativeBalanceAmount("Invalid Amount");
        this.balance+=amount;
    }

    addToWallet(amount: number):void{
        this.balance+=amount;
    }

    deductFromWallet(amount: number):void{
        if(amount<this.balance)
            this.balance-=amount;
        else
        throw new InsufficientBalanceError("Low Balance");
    }
}