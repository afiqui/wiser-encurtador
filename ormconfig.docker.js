console.log(1,process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "synchronize": true,
  "logging": false,
  "entities": ["./dist/src/models/**/*"],
  "migrations": ["./dist/src/database/migrations/**/*"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}