export interface Payment{
    processPayment(amount: number): Promise<boolean>;
}