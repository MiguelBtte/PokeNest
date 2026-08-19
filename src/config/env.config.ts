
export const EnvConfiguration  = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    mongoport: process.env.MONGOPORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7
} )