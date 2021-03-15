module.exports = {
    "type": "postgres",
    "url" : process.env.DATABASE_URL,    
    "migrations":[ "./src/database/migrations/**.ts"],
    "entities": ["./src/models/**.ts"],
    "logging" : false,
    "cli" :{
        "migrationsDir": "./src/database/migrations"
    }   

}