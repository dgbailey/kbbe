#ROBODEX

Robodex started as a kanban clone and it is still pretty much that. The intention is for it to grow into a collaborative tool for note taking.

##Current Features
*Board Sharing via username.
*Board based edit broadcasting via Web Sockets.
*Cookie based authentication.

##API

###Board

####Get a Board
```
GET /boards/{id}
```
#####Path Parameters
*id:string

####Get columns from board
```
GET /{id}/columns
```
#####Path Parameters
*id:string

####Get items from board
```
GET /{id}/items
```
#####Path Parameters
*id:string

server.use('/flow', userRoutes);
server.use('/items', itemRoutes);
server.use('/columns', columnRoutes);
```


##
Requirements
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

##Configuration


##Installation & Setup
```npm install
    npm run server
```