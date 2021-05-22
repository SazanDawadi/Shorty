import React, {useState} from 'react';
import { Button, TextField, LinearProgress} from "@material-ui/core";
import { FaRegClone } from 'react-icons/fa';
import { MdCheck } from "react-icons/md"
import "./home.css";
import shrtCode from "../api/shrtcode";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Banner from "../img/Banner.svg";

 // eslint-disable-next-line
const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;


function Home() {
    const [url, setUrl] =  useState('');
    const [shrtUrl,setShrtUrl] = useState('');
    const[isLoading, setIsLoading] = useState(false);
    const[isCopied, setIsCopied] = useState(false);
    const[isValidUrl, setIsValidUrl] = useState(true);

      // Link Validation Function
    const validateUrl = (string) => {
    // Regex to check if string is a valid URL
        return string.match(HTTP_URL_VALIDATOR_REGEX);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateUrl(url)){
            getUrl();
            setUrl('');
            setShrtUrl('')
            setIsCopied(false);
            setIsLoading(!isLoading);
            setIsValidUrl(true);

        }
        else{
            setIsValidUrl(false);
        }

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
            <img src={Banner} alt="React Logo" />
            <h1>Shorten Any Links</h1>
            <p>Build and protect your brand using powerful recognizable short link.</p>
            <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' >
                <TextField id = "home_input" label = "Type or Paste your link" variant = "outlined" value = {url} 
                onChange = {(e) =>{
                    setUrl(e.target.value)
                }}
                />

                {
                    !isValidUrl && (
                        <div className = "display_error"><p>Invalid URL!</p></div>
                    )
                }


                {!isLoading && (
                    < Button id = "home_btn" variant = "contained" color = "success " 
                    onClick = {(e) => handleSubmit(e)}>Shorten</Button>
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
