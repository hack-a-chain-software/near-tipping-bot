const fs = require("fs");

const environment_file_web = `
    VITE_CONTRACT=dev-1652055476064-95220052886384
    VITE_NEAR_NETWORK=testnet
`;

fs.writeFileSync("./packages/web/.env", environment_file_web);
