# WALLET SYSTEM

## FOLDER STRUCTURE

```plaintext
│── node_modules/
│── src/
│   │
│   ├── enums/                            # Enums for transaction-related data
│   │   ├── TransactionMethod.ts
│   │   ├── TransactionStatus.ts
│   │   ├── TransactionType.ts
│   │   ├── CurrencyType.ts               # Support for multiple currencies
│   │   ├── RecurringInterval.ts          # Enum for subscription intervals
│   │
│   ├── errors/                           # Custom error handling
│   │   ├── InsufficientBalanceError.ts
│   │   ├── NegativeBalanceAmount.ts
│   │   ├── FraudDetectionError.ts        # For fraud detection system
│   │   ├── OTPValidationError.ts         # If OTP is invalid
│   │
│   ├── interfaces/                       # Interfaces for strict typing
│   │   ├── Payment.ts
│   │   ├── TransactionData.ts
│   │   ├── WalletUser.ts                 # User interface
│   │   ├── FraudDetection.ts             # Fraud detection logic
│   │   ├── Subscription.ts               # Subscription-related interface
│   │
│   ├── models/                           # Data models (if using a database)
│   │   ├── Transaction.ts
│   │   ├── TransactionManager.ts
│   │   ├── User.ts
│   │   ├── Wallet.ts
│   │   ├── RecurringPayment.ts           # Subscription payments model
│   │
│   ├── payments/                         # Payment processing logic
│   │   ├── strategies/                   # Strategy Pattern Implementation
│   │   │   ├── CreditCardPayment.ts
│   │   │   ├── DebitCardPayment.ts
│   │   │   ├── UpiPayment.ts
│   │   │   ├── BankTransferPayment.ts    # Bank integration
│   │   │   ├── RewardPointsPayment.ts    # Using reward points
│   │   ├── PaymentProcessor.ts
│   │   ├── PaymentStrategy.ts
│   │
│   ├── services/                         # Services for different functionalities
│   │   ├── Logger.ts
│   │   ├── NotificationService.ts
│   │   ├── OTPService.ts
│   │   ├── FraudDetectionService.ts      # Fraud detection
│   │   ├── RewardService.ts              # Cashback & Rewards
│   │   ├── TransactionAuditLog.ts        # Keeping track of logs
│   │   ├── CurrencyConversionService.ts  # NEW - Currency conversion
│   │
│   ├── utils/                            # Utility functions
│   │   ├── Helpers.ts
│   │   ├── DateUtils.ts
│   │   ├── Validator.ts
│   │
│   ├── tests/                            # Unit tests & Integration tests
│   │   ├── wallet.test.ts
│   │   ├── transaction.test.ts
│   │   ├── fraudDetection.test.ts
│   │
│   ├── main.ts                           # Entry point of the application
│
├── package.json
├── tsconfig.json
├── README.md
```

## THEME OF THIS REPO

Above is the folder structure of a LLD Problem of **Wallet System** where the user can send, receive, refill amount in his or her wallet by **credit card**, **debit card**, **upi** and **crypto**

## Language used?

Used TypeScript to solve this LLD Problem. I will add the Java solution for the LLD soon.