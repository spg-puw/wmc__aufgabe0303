import express from 'express'
import { URL } from 'url';
export const app = express();
const port = 3000;

// import { WebSocketServer } from 'ws';
// const server = new WebSocketServer({
//     port: 3001,
// });

const messages = [];

app.use(express.urlencoded({ extended: true })); // for req.body

app.get('/', (req, res) => {
  res.sendFile('chat.html', { root: new URL('.', import.meta.url).pathname });
})

//TODO: hier die express Endpoints einfügen

export default { app }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    app.listen(port, () => {
        console.log(`Webserver gestartet: http://localhost:${port}`);
        console.log(`Zum Beenden: Ctrl+C`);
    })
}
