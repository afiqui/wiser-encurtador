module.exports = {
    "type": "postgres",
    "url" : process.env.DATABASE_URL,    
    "migrations":[ "./dist/src/database/migrations/**.ts"],
    "entities": ["./dist/src/models/**.ts"],
    "logging" : false,
    "cli" :{
        "migrationsDir": "./src/database/migrations"
    }   

}