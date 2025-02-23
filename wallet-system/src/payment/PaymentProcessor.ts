import { InsufficientBalanceError } from "src/error/InsufficientBalanceError";
import { NegativeBalanceAmount } from "src/error/NegativeBalanceAmount";
import { Payment } from "src/interface/Payment";
import { Logger } from "src/service/Logger";

export class PaymentProcessor{
    async processPayment(amount:number,paymentMethod: Payment):Promise<void>{
        if(amount<=0) 
            throw new NegativeBalanceAmount("Amount Should Be >=1");
        const success=await paymentMethod.processPayment(amount);
        if(success) Logger.info(`Payment of ${amount} is Successful!`);
        else Logger.info(`Payment of ${amount} Failed`);
    }
}