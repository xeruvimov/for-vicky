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

    return <>
        <div>{`${date}`}</div>
    </>
}