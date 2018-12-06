import React from 'react'

import {Card, Button, CardTitle, CardText, CardBody} from 'reactstrap';

const Note = ({_id, title, text, color, remove}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button color={'danger'} onClick={remove}>Delete</Button>
            </CardBody>
        </Card>
    )
};

export default Note;