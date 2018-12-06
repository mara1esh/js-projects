import React from 'react'
import NoteCreator from './NoteCreator'
import Notes from './Notes'
import {Container} from 'reactstrap'
import './app.css'

const App = () => (
    <Container className={'layout'}>
        <NoteCreator/>
        <Notes/>
    </Container>
    );

export default App;
