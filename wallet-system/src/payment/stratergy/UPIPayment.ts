import { Payment } from "src/interface/Payment";
import { Logger } from "src/service/Logger";

export class UPIPayment implements Payment{
    constructor(private UPIID: string){}
    async processPayment(amount: number): Promise<boolean> {
            Logger.info(`Processing UPI Payment of ${amount} for ${this.UPIID}`);
            await new Promise((resolve)=>setTimeout(resolve,2000));
            const isSuccess=true;
            if(isSuccess)
            {
                Logger.info(`UPI Payment of ${amount} Successfully done!`);
                return true;
            }
                
            else
            {
                Logger.info(`Server is Slow, Try After Sometime!`);
                return false;
            }           
        }  
}