import { LoyaltyPointsSystem } from "./LoyaltyPointsSystem";

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.error("Invalid arguments.\n\nUsage:\n" +
        "  npm run start earn <customerId> <points>\n" +
        "  npm run start redeem <customerId> <points>\n");
        
    process.exit(1);
}

const [operation, customerId, pointsStr] = args;
const points = parseInt(pointsStr, 10);
const system = new LoyaltyPointsSystem();

if (isNaN(points) || points <= 0) {
    console.error("Points should be a positive integer value.");
    process.exit(1);
}

switch (operation.toLowerCase()) {
    case "earn":
        system.earnPoints(customerId, points);
        break;
    default:
        console.error("Invalid operation. Supported operations: earn, redeem");
        break;
}