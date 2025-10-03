import dotenv from "dotenv";
import path from "path";

// load the .env file from the root of the project
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
};

export default config;
