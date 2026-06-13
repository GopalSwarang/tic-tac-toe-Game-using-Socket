# Real-Time Multiplayer Web Game

A real-time multiplayer web game built using Node.js, Express, WebSockets, HTML, CSS, and JavaScript. The project demonstrates how WebSocket technology enables instant, bidirectional communication between connected players for live gameplay.

## Features

- Real-time player communication using WebSockets
- Multiplayer gameplay support
- Random player turn selection
- Turn-based game flow
- Live move synchronization between players
- Player join functionality
- Automatic connection and disconnection handling
- Simple and responsive user interface

## Technologies Used

- Node.js
- Express.js
- WebSocket (ws)
- HTML5
- CSS3
- JavaScript (ES6)

## Project Structure

```text
project/
│
├── server.js
├── package.json
│
└── public/
    └── index.html
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

2. Navigate to the project directory:

```bash
cd your-repository-name
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open your browser and visit:

```text
http://localhost:3000
```

## How It Works

1. Players connect to the server through a WebSocket connection.
2. The server stores connected players.
3. When two players join, the server randomly selects one player to start.
4. Players send moves to the server using WebSockets.
5. The server forwards moves to the opponent in real time.
6. Turns are switched after each move.
7. If a player disconnects, the server removes them from the active player list.

## WebSocket Communication

### Client to Server

- Join game
- Send move
- Switch turn

### Server to Client

- Start game
- Your turn
- Wait for opponent
- Opponent move updates

## Learning Objectives

This project helps understand:

- Client-server architecture
- Real-time communication
- WebSocket implementation
- Multiplayer game logic
- Event-driven programming
- Node.js backend development
