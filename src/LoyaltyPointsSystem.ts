import * as fs from "fs";
import * as path from "path";

export class LoyaltyPointsSystem {
    private customerPoints: Map<string, number>;
    private readonly dataFilePath: string;

    constructor() {
        this.dataFilePath = path.join(__dirname, "..", "data.json");
        this.customerPoints = this.loadData();
    }

    private loadData(): Map<string, number> {
        try {
            const fileContent = fs.readFileSync(this.dataFilePath, "utf-8");
            const data = JSON.parse(fileContent);
            return new Map(Object.entries(data));
        } catch (error) {
            console.error("Could NOT read from data.json, starting with empty data");
            return new Map();
        }
    }

    private saveData(): void {
        const dataObject = Object.fromEntries(this.customerPoints);
        fs.writeFileSync(this.dataFilePath, JSON.stringify(dataObject, null, 2), "utf-8");
    }

    earnPoints(customerId: string, points: number): void {
        const currentPoints = this.customerPoints.get(customerId) || 0;
        const newBalance = currentPoints + points;
        this.customerPoints.set(customerId, newBalance);
        this.saveData();
        console.log(`Customer ${customerId} earned ${points} points. Total balance: ${newBalance} points.`);
    }

    redeemPoints(customerId: string, points: number): void {
        const currentPoints = this.customerPoints.get(customerId) || 0;

        if (points > currentPoints) {
            console.error(`Error: Customer ${customerId} does NOT have enough points to redeem.`);
            return;
        }

        const newBalance = currentPoints - points;
        this.customerPoints.set(customerId, newBalance);
        this.saveData(); 
        console.log(`Customer ${customerId} redeemed ${points} points. New balance: ${newBalance} points.`);

        if (newBalance < 10) {
            console.warn(`Warning: Customer ${customerId} has a low balance: ${newBalance} points.`);
        }
    }

    getPoints(customerId: string): number {
        return this.customerPoints.get(customerId) || 0;
    }
}