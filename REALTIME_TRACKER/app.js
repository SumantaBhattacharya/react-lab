const express = require("express");
const path = require("path");

const app = express();

// pre installed module comes with nodejs
const http = require("http");


// import { Server } from "socket.io";
const socketIo = require("socket.io"); 

const server = http.createServer(app); // create a server using express app
const io = socketIo(server); // create a socket server using the http server
// const io = new Server(server); // create a socket server using the http server

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Socket.io connection
// server-side
io.on("connection", (socket) => {

  //          event
  socket.on("send-location", function (data) {
    console.log(data); // this will log the data object to the console

    // send the data to all connected clients. could be here data too but we spread it to make it more simpler
    io.emit("receive-location", {id: socket.id, ...data}); // emit the location event to all connected clients

  })

  // every time a new user connects, a new socket id is generated
  // console.log(socket.id);

  socket.on("disconnect", () => {
    // console.log(socket.id); 
    io.emit("user-disconnected", socket.id); // emit the user-disconnected event to all connected clients
  });

});


app.get("/", (req, res) => {
  res.render("index", { title: "Real Time Tracker" });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`The app is listening on port http://localhost:${3000}`);
});
