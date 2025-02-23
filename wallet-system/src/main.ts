import { log } from "node:console";
import { UserModel } from "./model/User";
import { WalletModel } from "./model/Wallet";
import { TransactionManager } from "./model/TransactionManager";
import { PaymentStrategy } from "./payment/PaymentStrategy";
import { PaymentProcessor } from "./payment/PaymentProcessor";
import { TransactionType } from "./enum/TransactionType";
import { TransactionStatus } from "./enum/TransactionStatus";
import { Logger } from "./service/Logger";
import { TransactionMethod } from "./enum/TransactionMethod";

const main=async()=>{

    const walletA=new WalletModel(1000);
    const walletB=new WalletModel(500);

    const tm1=new TransactionManager();
    const tm2=new TransactionManager();

    const userA=new UserModel("U001","Mahapatra","ncc.mahapatro@nist.edu",walletA,tm1);
    const userB=new UserModel("U002","Sabat","coder.sabat@nist.edu",walletB,tm2);

    console.log("Sabat's Balance: "+userB.getWallet().getBalance());
    console.log("Mahapatra's Balance: "+userA.getWallet().getBalance());
    
    const upiTransaction=PaymentStrategy.getPaymentStrategy("UPI");
    const amt=700;
    if(upiTransaction){
        const paymentProcessor=new PaymentProcessor();
        await paymentProcessor.processPayment(amt,upiTransaction);        
        walletB.refillWallet(amt);
        tm2.addTransaction({
            type: TransactionType.RECIEVE,
            amount: amt,
            status: TransactionStatus.SUCCESS,
            sender: userB.getName(),
            reciever: userB.getName(),
            method: TransactionMethod.UPI
        })
    }
    console.log("Sabat's Balance: "+userB.getWallet().getBalance());
    console.log("Mahapatra's Balance: "+userA.getWallet().getBalance());
    
    walletA.deductFromWallet(786);    
    walletB.addToWallet(786);
    tm2.addTransaction({
        type: TransactionType.SEND,
        amount: 786,
        status: TransactionStatus.SUCCESS,
        sender: userB.getName(),
        reciever: userA.getName(),
        method: TransactionMethod.WALLET      
    })

    tm1.addTransaction({
        type: TransactionType.RECIEVE,
        amount: 786,
        status: TransactionStatus.SUCCESS,
        sender: userB.getName(),
        reciever: userA.getName(),
        method: TransactionMethod.WALLET
    })

    console.log("Sabat's Balance: "+userB.getWallet().getBalance());
    console.log("Mahapatra's Balance: "+userA.getWallet().getBalance());
    
    console.log("Transaction History");
    console.log(tm2.getTransactionHistory());
    
    
}

main();