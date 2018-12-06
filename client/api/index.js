//import {apiPrefix} from '../../config/index.json'
import axios from 'axios'

export const listNotes = () => axios.get(`http://localhost:8080/notes`);
export const createNote = data => axios.post(`http://localhost:8080/notes`, data);
export const deleteNote = id => axios.delete(`http://localhost:8080/notes/${id}`);