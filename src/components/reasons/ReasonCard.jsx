import React from 'react'
import { Card } from 'react-bootstrap'

export default function ReasonCard(props) {
    return <Card style={{ width: '180px' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.text}</Card.Title>
        </Card.Body>
    </Card>
}