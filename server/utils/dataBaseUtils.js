import mongoose from 'mongoose'

import '../models/notes'
import config from '../../config/index.json'

const Note = mongoose.model('Note');

const url = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

export const setUpConnection = () =>
    mongoose.connect(url, {useNewUrlParser : true});

export const listNotes = () => Note.find();

export const createNote = data => {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createAt: data.createAt
  });

    return note.save();
};

export const deleteNote = id => Note.findById(id).remove();