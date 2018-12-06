import React, {Component} from 'react'
import {connect} from 'react-redux'
import {axiosNotes, removeNote} from '../actions/notes'
import Note from './Note'
import {Row, Col} from 'reactstrap'

class Notes extends Component {
    componentDidMount() {
        this.props.axiosNotes();
    }
    renderNotes() {
        return (
            this.props.notes.map(i =>
                <Note
                    key={i._id}
                    title={i.title}
                    text={i.text}
                    color={i.color}
                    remove={() => this.props.removeNote(i._id)}
                />)
        )
    }
    render() {
        const notes = this.props.notes;
        //console.log(notes);
        return (
            <Row className={'justify-content-center'}>
                <Col csm={12} md={6}>
                    {notes.length > 0 && this.renderNotes()}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProps = {
    axiosNotes,
    removeNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);