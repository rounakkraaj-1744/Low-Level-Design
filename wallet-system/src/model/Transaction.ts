import { TransactionStatus } from "src/enum/TransactionStatus";
import { TransactionType } from "src/enum/TransactionType";

export class TransactionModel{
    private tid: string;
    private type: TransactionType;
    private amount: number;
    private timeStamp: Date;
    private status: TransactionStatus;
    private sender: string;
    private reciever: string;    
    private method: string

    constructor(type: TransactionType, amount: number, status: TransactionStatus, sender: string, reciever: string, method: string){
        this.tid=`TRA-${new Date().toISOString().replace(/\D/g,"")}-${Math.random().toString(36).slice(2)}`;
        this.type=type;
        this.amount=amount;
        this.timeStamp=new Date();
        this.status=status;
        this.sender=sender;
        this.reciever=reciever;
        this.method=method
    }

    
}