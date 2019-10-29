import React from 'react'
import photo from './vicky.jpg';
import ModalLove from '../modal/ModalLove'
import Link from 'react-router-dom/Link'
import LoveTimer from '../timer/Timer';
import { Image } from 'react-bootstrap';

function Main(props) {
    return (
        <header className="App-header">
            <Image src={photo} roundedCircle className="App-logo" alt="logo" />
            <p>
                Люблю Вики!
                <LoveTimer />
            </p>
            <ModalLove />
            <Link to="/reasons">А за что?</Link>
            <Link to="/apod">APOD</Link>
        </header>
    )
}

export default Main