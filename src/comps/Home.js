import React, {useState} from 'react'
import "./home.css"

function Home() {
    const [url, setUrl] =  useState('');
    const handelFormSumbit = (e) =>{

    }

    return (
        <div>
            <h1>Shorty Urls</h1>
            <form onSubmit = {handelFormSumbit} >
                <input type = "text" value = {url} onChange = {e => setUrl(e.target.value)}
                placeholder = "Enter yor URL..." />
                < button type = "sumbit">Shorten URL</button>

            </form>
        </div>
    )
}

export default Home
