import React from 'react'
import first from './first.jpg'
import smile from './smile.jpg'
import sleep from './sleep.jpg'
import fashin from './fashion.jpg'
import phone from './phone_img.jpg'
import ReasonCard from './ReasonCard'
import './reasons.css'

function Reasons(props) {
    return <div className="Reasons">
            <ReasonCard img={first} text={"За неповторимость"} />
            <ReasonCard img={smile} text={"За улыбку"} />
            <ReasonCard img={sleep} text={"За то как Вики сладко спит"} />
            <ReasonCard img={phone} text={"За красоту"} />
            <ReasonCard img={fashin} text={"За стиль"} />
        </div>
}

export default Reasons