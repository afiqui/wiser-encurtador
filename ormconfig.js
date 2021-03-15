module.exports = {
    "type": "postgres",
    "url" : process.env.DATABASE_URL,    
    "migrations":[ "dist/src/database/migrations/**/*"],
    "entities": ["dist/src/models/**/*"],
    "logging" : false,
    "cli":{
        "migrationsDir": ["src/database/migrations/"],
        "entitiesDir": "src/models"
    }  

}