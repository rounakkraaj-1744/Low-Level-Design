import { Payment } from "src/interface/Payment";
import { Logger } from "src/service/Logger";

export class DebitCard implements Payment{
    constructor(private cardNumber: string,private cardHolder: string, expiryDate: string, private cvv: string){}
    async processPayment(amount: number): Promise<boolean> {
        Logger.info(`Processing Debit Card Payment of ${amount} for ${this.cardHolder} with card ${this.cardNumber}`);
        await new Promise((resolve)=>setTimeout(resolve,2000));
        const isSuccess=true;
        if(isSuccess)
        {
            Logger.info(`Debit Card Payment of ${amount} Successfully done!`);
            return true;
        }
            
        else
        {
            Logger.info(`Debit Card Declined!`);
            return false;
        }           
    }    
}