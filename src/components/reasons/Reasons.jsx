import React from 'react'
import { Card } from 'react-bootstrap'
import First from './first.jpg';

function Reasons(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={First}/>
            <Card.Body>
                <Card.Title>За что-то</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Reasons