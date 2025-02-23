import { Payment } from "src/interface/Payment";
import { Logger } from "src/service/Logger";

export class CreditCard implements Payment{
    constructor(private cardNumber: string,private cardHolder: string, expiryDate: string, private cvv: string){}
    async processPayment(amount: number): Promise<boolean> {
        Logger.info(`Processing Credit Card Payment of ${amount} for ${this.cardHolder} with card ${this.cardNumber}`);
        await new Promise((resolve)=>setTimeout(resolve,2000));
        const isSuccess=true;
        if(isSuccess)
        {
            Logger.info(`Credit Card Payment of ${amount} Successfully done!`);
            return true;
        }
            
        else
        {
            Logger.info(`Credit Card Declined!`);
            return false;
        }           
    }    
}