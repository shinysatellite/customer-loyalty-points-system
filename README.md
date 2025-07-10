# Customer Loyalty Points System (CLI)

A simple command-line based customer loyalty points management application built with **TypeScript**.

## 🚀 Features
- Customers can **earn** and **redeem** points via command line.
- Customer point balances are persisted between commands in a JSON file.
- A warning message is shown if customer balance drops below **10 points**.

## ⚙️ Technologies Used
- TypeScript
- Node.js
- JSON file persistence for storing points balances

## 📂 Project Structure

```plaintext
customer-loyalty-points-system/
├── package.json
├── tsconfig.json
├── data.json                  # Storage file for persistent balance
└── src/
   ├── LoyaltyPointsSystem.ts # Core functionality
   └── index.ts               # CLI entry-point
```

## ⬇️ Install & Setup

**Step 1: Clone this repository**

```bash
git clone <your_repo_link_here>
cd customer-loyalty-points-system
```

**Step 1: Clone this repository**
```bash
npm install
```

## How to Run

Use the following commands format:

```bash
npm run start <operation> <customerId> <points>
```

### operation is one of:

- earn: Add points to the customer’s balance.
- redeem: Redeem points from the customer's balance.

### Examples:

- Earn points:
```bash
npm run start earn user123 100
```

- Redeem points:
```bash
npm run start redeem user123 50
```

# 📝Data Persistence
The balances are persisted between command executions in the data.json file. (No points are lost between runs.)

# 🛠️ Future Enhancement Ideas:

- Connect to a database for scalable persistence solutions (MongoDB, PostgreSQL, etc)
- Develop a web-based interface or REST API.