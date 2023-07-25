const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 3000;

// const WebSocket = require('ws');
// const server = new WebSocket.Server({
//     port: 3001,
// });

const messages = [];

app.use(express.urlencoded({ extended: true })); // for req.body

app.get('/', (req, res) => {
  res.sendFile('chat.html', { root: __dirname });
})

//TODO: hier die express Endpoints einfügen

app.listen(port, () => {
  console.log(`Webserver gestartet: http://localhost:${port}`);
  console.log(`Zum Beenden: Ctrl+C`);
})
