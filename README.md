# ROBODEX

Robodex started as a kanban clone and it is still pretty much that. The intention is for it to grow into a collaborative tool for note taking.

## Current Features
* Board Sharing via username.
* Board based edit broadcasting via Web Sockets.
* Cookie based authentication.

## API

## Board

#### Get a Board
```
GET /boards/{boardId}
```
##### Path Parameters
* id:string

#### Get columns from board
```
GET /boards/{boardId}/columns
```
##### Path Parameters
* id:string

#### Get items from board
```
GET boards/{boardId}/items
```
##### Path Parameters
* id:string

#### Add member to board via username
```
PUT boards/{boardId}/members
```
##### Path Parameters
* id:string
##### Query Parameters
*userName:string

## Get items by board id
```
GET /items/{boardId}

```
##### Path Parameters
* id:string


## Columns
* TBW
## Users
* TBW

## Requirements
```
        bcryptjs": "^2.4.3",
		"cookie-parser": "^1.4.4",
		"cors": "^2.8.5",
		"dotenv": "^8.2.0",
		"express": "^4.17.1",
		"express-ws": "^4.0.0",
		"helmet": "^3.21.2",
		"jsonwebtoken": "^8.5.1",
		"knex": "^0.20.8",
		"morgan": "^1.9.1",
		"pg": "^7.17.1",
		"uuid4": "^1.1.4",
		"ws": "^7.2.3"
```

## Configuration
### CORS
Whitelisting is necessary dude to the apps cookie based authentication. This can also be configured with dotenv variables. Whitelisting is explicit in server.js.
### Database
Database configuration is necessary in the knex.js file. A dotenv file in the project root with the appropriate env variables will to the trick.

## Installation & Setup
```
    npm install
    npm run server
```