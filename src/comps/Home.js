import React, {useState} from 'react'
import "./home.css";
import {db} from "../firebase";
import {v4 as uuidv4} from "uuid";

function Home() {
    const [url, setUrl] =  useState('');
    let code = uuidv4();
    const handelFormSumbit = async (e) =>{
        e.preventDefault();
        await db.collection("Urls").add({
            url:url,
            code:code,
        });
        alert("your url is http://localhost:3000/l/" + code)
    }

    return (
        <div>
            <h1>Shorty Urls</h1>
            <form onSubmit = {handelFormSumbit} >
                <input type = "text" value = {url} onChange = {(e ) => setUrl(e.target.value)}
                placeholder = "Enter yor URL..." />
                < button type = "sumbit">Shorten URL</button>

            </form>
        </div>
    )
}

export default Home;
