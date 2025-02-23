# ONLINE SHOPPING APP (LLD)

## FOLDER STRUCTURE

```plaintext
📂 online-shopping
├── 📂 src
│ ├── 📂 models (Entity classes like Product, Cart, Order, User, etc.)
│ │ ├── Product.ts
│ │ ├── ShoppingCart.ts
│ │ ├── Inventory.ts
│ │ ├── Order.ts
│ │ ├── User.ts
│ ├── 📂 services (Business logic like order processing, inventory handling, logging, etc.)
│ │ ├── OrderService.ts
│ │ ├── InventoryService.ts
│ │ ├── ShoppingCartService.ts
│ │ ├── LoggerService.ts
│ ├── 📂 payment (Implements Strategy Pattern for payments)
│ │ ├── PaymentStrategy.ts (Interface for payment methods)
│ │ ├── CreditCardPayment.ts (Concrete implementation)
│ │ ├── DebitCardPayment.ts (Concrete implementation)
│ │ ├── PaymentFactory.ts (Implements Factory Pattern to create payment methods)
│ ├── 📂 utils (Helper functions, constants, error messages, etc.)
│ │ ├── Errors.ts (Defines error messages)
│ │ ├── Constants.ts (Stores constant values like tax rates, discount rules, etc.)
│ ├── index.ts (Main entry point to run the application)
├── 📂 tests (Unit tests for core functionalities)
│ ├── Product.test.ts
│ ├── OrderService.test.ts
│ ├── Payment.test.ts
├── package.json
├── tsconfig.json
```