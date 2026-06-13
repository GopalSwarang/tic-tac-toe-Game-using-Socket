Real-Time Multiplayer Game using WebSockets
Overview

This project is a real-time multiplayer web application built using Node.js, Express, WebSockets, HTML, CSS, and JavaScript. It demonstrates how WebSocket technology can be used to establish persistent, bidirectional communication between clients and a server, enabling live multiplayer interactions.

The application allows two players to connect to the game, receive randomly assigned turns, and exchange game actions in real time through socket connections.

Features
Real-time multiplayer communication
WebSocket-based client-server architecture
Random player turn selection
Turn-based gameplay system
Live move synchronization
Player connection and disconnection handling
Simple and responsive user interface
Support for multiple devices on the same network
Technologies Used
Frontend
HTML5
CSS3
JavaScript
Backend
Node.js
Express.js
WebSocket (ws)
Project Structure
project/
│
├── server.js
├── package.json
│
└── public/
    └── index.html
How It Works
Players connect to the server through a WebSocket connection.
The server stores connected players.
When two players join, the server randomly selects one player to start.
Players send moves through WebSocket messages.
The server forwards moves to the opponent instantly.
Turns are switched after each move.
If a player disconnects, the server removes them from the active player list.
Installation
Clone the Repository
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
Install Dependencies
npm install
Run the Server
node server.js
Open the Application
http://localhost:3000

To connect from another device on the same network, use:

http://YOUR_LOCAL_IP:3000
WebSocket Communication
Client Connection
const socket = new WebSocket("ws://localhost:3000");
Sending Data
socket.send(JSON.stringify(data));
Receiving Data
socket.onmessage = (event) => {
    console.log(event.data);
};

The WebSocket connection remains open throughout the session, allowing both the server and players to exchange messages instantly without repeatedly creating new connections.
