import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'reactstrap'
import './noteCreator.css'
import {connect} from 'react-redux'
import {addNote} from '../actions/notes'

class NoteCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.sendNote = this.sendNote.bind(this);
    }

    clearStates() {
        this.setState({
            title: '',
            text: ''
        })
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    };

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    sendNote() {
        const note = {
            title: this.state.title,
            text: this.state.text,
            color: "brown"
        };
        //console.log('send');
        this.props.addNote(note);
        this.clearStates();
    }

    render() {
        return (
            <Row className={'note-creator justify-content-center'}>
                <Col md={6} className={'creator-panel'}>
                    <h6>Main thread</h6>
                    <Input
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                        placeholder = {'attract title'}
                    />
                    <h6>What are you think</h6>
                    <Input
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder = {'your text...'}
                    />
                    <Button className={'creator-btn-add'} color={'primary'} onClick={this.sendNote}>Add</Button>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = {
    addNote
};

export default connect(null, mapDispatchToProps)(NoteCreator);