const args = process.argv.slice(2);

if (args.length !== 3) {
    console.error("Invalid arguments.\n\nUsage:\n" +
        "  npm run start earn <customerId> <points>\n" +
        "  npm run start redeem <customerId> <points>\n");
        
    process.exit(1);
}

const [operation, customerId, pointsStr] = args;

console.log(operation, customerId, pointsStr);