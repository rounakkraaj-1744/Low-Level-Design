import { TransactionStatus } from "src/enum/TransactionStatus";
import { TransactionType } from "src/enum/TransactionType";

export interface TransactionData{
    type: TransactionType;
    amount: number;
    status: TransactionStatus;
    sender: string;
    reciever: string;
    method: string
}