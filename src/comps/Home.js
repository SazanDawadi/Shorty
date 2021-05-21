import React, {useState} from 'react';
import { Button, TextField, LinearProgress} from "@material-ui/core";
import { FaRegClone } from 'react-icons/fa';
import { MdCheck } from "react-icons/md"
import "./home.css";
import shrtCode from "../api/shrtcode";
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Home() {
    const [url, setUrl] =  useState('');
    const [shrtUrl,setShrtUrl] = useState('');
    const[isLoading, setIsLoading] = useState(false);
    const[isCopied, setIsCopied] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        getUrl();
        setUrl('');
        setShrtUrl('')
        setIsCopied(false);

        setIsLoading(!isLoading);
    }

    const getUrl = async () => {
        await shrtCode
          .get(`shorten?url=${url}`)
          .then((response) => {
            setShrtUrl(response.data.result.short_link);
            console.log(response.data.result.short_link);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      };


    return (
        <div className = 'container'>
            <h1>Shorty Urls</h1>
            <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' >
                <TextField id = "home_input" label = "Enter Your URL" variant = "outlined" value = {url}
                onChange = {(e) =>{
                    setUrl(e.target.value)
                }}
                />


                {!isLoading && (
                    < Button id = "home_btn" variant = "contained" color = "primary" 
                    onClick = {(e) => handleSubmit(e)}>Shorten URL</Button>
                )}


                {isLoading && (
                    <LinearProgress className = "loader" />
                )}

                {shrtUrl && (
                    <div className = "shorturl_container">
                        <p>{shrtUrl}</p>
                        <CopyToClipboard  text={shrtUrl}>
                            <div>
                                {!isCopied && (
                                    <FaRegClone className = "copy_icon" onClick ={() => setIsCopied(!isCopied) } />
                                )}
                                {isCopied && (
                                    <MdCheck className = "copied_icon" onClick ={() => setIsCopied(!isCopied) } />
                                )}
                            </div>
                            
                        </CopyToClipboard>
                    </div>
                    
                )}

            </form>
        </div>
    )
}

export default Home;
