import express from 'express'
import bodyParser from 'body-parser'
import * as db from './utils/dataBaseUtils'
import {serverPort} from '../config/index.json'

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes()
        .then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body)
        .then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id)
        .then(data => res.send(data));
});

const server = app.listen(serverPort, () => console.log(`server is running on port ${serverPort}`));
