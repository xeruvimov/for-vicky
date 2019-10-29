import React, { useState, useEffect } from 'react'

export default function LoveTimer(props) {
    const startDate = new Date(2018, 8, 26)
    const currentDate = Date.now() - startDate
    const [date, setDate] = useState(currentDate)

    useEffect(() => {
        const id = setInterval(() => {
            setDate(d => d + 1000);
        }, 1000)
        return () => {
            clearInterval(id)
        };
    }, []);

    //побитовая магия говна
    let seconds = date / 1000
    let minute = seconds / 60
    seconds = ~~(seconds % 60)
    let hour = minute / 60
    minute = ~~(minute % 60)
    let day = ~~(hour / 24)
    hour = ~~(hour % 24)
    return <>
        <div>{`${day} дней ${hour} часов ${minute} минут ${seconds} секунд вместе`}</div>
    </>
}