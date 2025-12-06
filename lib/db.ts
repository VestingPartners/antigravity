import sql from 'mssql';

const config: sql.config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER!,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '1433'),
    options: {
        encrypt: false, // Set to true if using Azure
        trustServerCertificate: true, // Set to true for self-signed certificates
    },
};

let appPool: sql.ConnectionPool;

export const getPool = async () => {
    try {
        if (appPool) {
            if (appPool.connected) return appPool;
            // If pool exists but not connected, try to close and reconnect
            try {
                await appPool.close();
            } catch (e) {
                console.error("Error closing pool", e);
            }
        }
        appPool = await new sql.ConnectionPool(config).connect();
        return appPool;
    } catch (err) {
        console.error('Failed to connect to database:', err);
        throw err;
    }
};
