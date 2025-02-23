export class InsufficientBalanceError extends Error{
    constructor(message: string){
        super(message);
        this.name="Insufficient Balance, Refill Now";
    }
}