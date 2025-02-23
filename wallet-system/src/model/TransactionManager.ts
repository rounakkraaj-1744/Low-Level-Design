import { TransactionData } from "src/interface/TransactionData";
import { TransactionModel } from "./Transaction";
import { Logger } from "src/service/Logger";

export class TransactionManager{
    private transactionHistory: TransactionModel[]=[];

    addTransaction(transactionData: TransactionData){
        const transaction=new TransactionModel(
            transactionData.type,
            transactionData.amount,
        transactionData.status,
        transactionData.sender,
        transactionData.reciever,
        transactionData.method        
        )
        this.transactionHistory.push(transaction);
        Logger.info(transaction.toString());
    }
    
    getTransactionHistory(): TransactionModel[]{
        return this.transactionHistory;
    }
}