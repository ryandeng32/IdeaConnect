const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const connectDB = require("./config/db");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const path = require("path");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
connectDB();
app.use(express.json());

app.use("/api/ideas", require("./routes/api/ideas"));

// Socket.io
io.on("connection", (socket) => {
  console.log("User joined");
  socket.on("join", ({ name, room }, callback) => {
    console.log(`User "${name}" has joined Room "${room}"`);
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    console.log(user);
    console.log(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} joined` });
    socket.join(user.room);
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });
  socket.on("disconnect", () => {
    console.log("User left");
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} left`,
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
