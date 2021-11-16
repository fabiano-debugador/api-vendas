console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)
  module.exports = {
    "type": "postgres",
  "url": process.env.DATABASE_URL,
  //"host": "localhost",
  //"port": 5432,
  //"username": "postgres",
  //"password": "docker",
  //"database": "apivendas",

  "migrations": [
    "./src/shared/typeorm/migrations/*ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations"
  }
}
