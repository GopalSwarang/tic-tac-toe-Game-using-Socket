const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const setupGameSocket = require("./src/sockets/gameSocket");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend
app.use(express.static("public"));

// Socket connection
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    setupGameSocket(io, socket);
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});