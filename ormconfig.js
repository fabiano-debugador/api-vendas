
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ["./src/modules/**/typeorm/entities/*.ts"],
  "migrations": [
    "./src/shared/typeorm/migrations/*ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations"
  }
}
