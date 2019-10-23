# A city guide Vue.js / Express.js web app.

This is a simple Vue.js / Express.js city guide web app for **ExtensionEngine Summer Camp 2019**.

## Prerequisites
* Node.js & npm
* Vue CLI 3.x
* create database
* clone this repo

> This app uses **MySQL database** but you can create any database supported by Sequelize (MySQL, MariaDB, SQLite, PostgreSQL, MSSQL).
> If you use database other than MySQL, you also need to install **SQL client for your database**.

## How to run the app

In `server` and `client` folders create `.env` file as shown in `.env.example`.

### Client - Terminal A

```
cd client
npm install
npm run serve
```

### Server - Terminal B

```
cd server
npm install
npm run seed
npm run start
```