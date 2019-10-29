import React from 'react'
import { useFetch } from './hook'
import { Image, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './apod.css'

const api_key = "YbnLdBKZ3SQ3FTSFkbs8DB89JDupUVziArMg4BkL"
const url = "https://api.nasa.gov/planetary/apod"
const urlWithKey = url + "?api_key=" + api_key

export default function APOD(props) {
    const [data, loading] = useFetch(urlWithKey)

    return <>
        <header className="App-header">
            <p>
                Astronomy Picture of the Day
            </p>
            {loading ? (<Spinner animation="border" variant="light" />) :
                (<Image src={data.url} rounded alt={"Тут должна быть пикча"} />)}
            <p>
                {data.explanation}
            </p>
            <Link to="/">Назад</Link>
        </header>
    </>
}