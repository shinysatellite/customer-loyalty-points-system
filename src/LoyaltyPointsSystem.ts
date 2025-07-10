export class LoyaltyPointsSystem {
    private customerPoints: Map<string, number>;

    constructor() {
        this.customerPoints = new Map();
    }

    earnPoints(customerId: string, points: number): void {
        const currentPoints = this.customerPoints.get(customerId) || 0;
        console.log("currentPoints", currentPoints);

    }
}