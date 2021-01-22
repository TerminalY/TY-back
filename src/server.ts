import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from "./services";
import { connectToDB } from './db/index';
const SocketIO = require('socket.io');
connectToDB();

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

console.table(routes.map(route => {
  return { path: route.path, method: route.method }
}));

const  PORT = 3000;
const server = http.createServer(router);
let numberOfOnlineUsers = 0;
const io = SocketIO(server, { cors: {
  credentials: true, origin: true 
}}); 

io.on("connection", socket => {
  numberOfOnlineUsers++;
  io.emit('numberOfOnlineUsers', numberOfOnlineUsers);

  /* Disconnect socket */
  socket.on('disconnect', ()=> {
    numberOfOnlineUsers--;
    io.emit('numberOfOnlineUsers', numberOfOnlineUsers);  
  });

});


server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
