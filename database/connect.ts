import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

const createDBURI = (): string => {
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_URI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@gopratle-db.n8gobyd.mongodb.net/`;
    return DB_URI;
}

export async function connectDB() {
    const client = new MongoClient(createDBURI());
    const DB_NAME = process.env.DB_NAME;
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db(DB_NAME);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}