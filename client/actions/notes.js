import * as api from '../api/index.js'
import {AXIOS_NOTES_START,AXIOS_NOTES_SUCCESS, AXIOS_NOTES_FAIL, REMOVE_NOTE , ADD_TO_NOTES} from '../constants'

export const axiosNotes = () => async dispatch => {
    dispatch({
       type: AXIOS_NOTES_START
    });
    try{
        const notes = await api.listNotes()
            .then(response => response.data);
        //console.log('notes', notes);
        dispatch({
            type: AXIOS_NOTES_SUCCESS,
            payload: notes
        })
    } catch (e) {
        dispatch({
            type: AXIOS_NOTES_FAIL,
            payload: e,
            error: true
    })
    }
};

export const removeNote = id => async dispatch => {
    try{
        await api.deleteNote(id);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        });
    } catch (e) {
        console.log(e)
    }

};

export const addNote = note => async dispatch => {
  try{
      const newNote = await api.createNote(note).then(response => response.data);
      dispatch({
          type: ADD_TO_NOTES,
          payload: newNote
      })
  }  catch (e) {
      console.log(e);
  }
};