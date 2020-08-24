const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const connectDB = require("./config/db");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

connectDB();
app.use(express.json());

app.use("/api/ideas", require("./routes/api/ideas"));

io.on("connection", (socket) => {
  console.log("user joined");
  socket.on("disconnect", () => {
    console.log("User left");
  });
  socket.on("join", ({ id }) => {
    console.log(`id is ${id}`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
