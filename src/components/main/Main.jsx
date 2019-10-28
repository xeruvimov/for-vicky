import React from 'react'
import photo from './vicky.jpg';
import ModalLove from '../modal/ModalLove'
import Link from 'react-router-dom/Link'

function Main(props) {
    return (
        <header className="App-header">
            <img src={photo} className="App-logo" alt="logo" />
            <p>
                Люблю Вики
            </p>
            <ModalLove />
            <Link to="/reasons">А за что?</Link>
        </header>
    )
}

export default Main