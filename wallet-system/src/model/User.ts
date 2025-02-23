import { TransactionModel } from "./Transaction";
import { TransactionManager } from "./TransactionManager";
import { WalletModel } from "./Wallet";

export class UserModel{
    private id: string;
    private name: string;
    private email: string; 
    private wallet: WalletModel;
    private transactionManager: TransactionManager;
    constructor(id: string, name: string, email: string, wallet: WalletModel, transactionManager: TransactionManager)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.wallet=wallet;
        this.transactionManager=transactionManager;
    }

    getId(): string{
        return this.id;
    }

    getName(): string{
        return this.name;
    }

    getEmail(): string{
        return this.email;
    }

    getWallet(): WalletModel{
        return this.wallet;
    }

    getTransactionHistory(): TransactionModel[]{
        return this.transactionManager.getTransactionHistory();
    }
}