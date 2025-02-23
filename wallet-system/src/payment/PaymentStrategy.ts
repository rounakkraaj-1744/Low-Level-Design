import { TransactionMethod } from "src/enum/TransactionMethod";
import { Payment } from "src/interface/Payment";
import { CreditCard } from "./stratergy/CreditCardPayment";
import { DebitCard } from "./stratergy/DebitCardPayment";
import { UPIPayment } from "./stratergy/UPIPayment";
import { Logger } from "src/service/Logger";

export class PaymentStrategy{
    static getPaymentStrategy(paymentMethod: string) : Payment | null{
        switch(paymentMethod.toLowerCase()){
            case TransactionMethod.CREDIT: return new CreditCard("1234-5678-0123-3456","ABC","2/28","456");
            case TransactionMethod.DEBIT: return new DebitCard("0123-3456-9876-4567","ABC","6/29","942");
            case TransactionMethod.UPI: return new UPIPayment("abc@upi");
            default: { Logger.info("Invalid Payment Method"); return null }
        }
    }
}