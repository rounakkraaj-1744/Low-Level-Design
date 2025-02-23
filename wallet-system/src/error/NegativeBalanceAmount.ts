export class NegativeBalanceAmount extends Error{
    constructor(message: string)
    {
        super(message);
        this.name="Amount Should be Positive";
    }
}