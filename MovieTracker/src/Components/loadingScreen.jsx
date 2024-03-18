import React, { useEffect, useState} from "react"; 
import '../Styles/loadingScreen.css'
import loadingLogo from '../Assets/loadingLogo.svg'

function Loading() {
    const [text, setText] = useState('');
    const originalText = 'Movie Tracker Loading....'
    const typingSpeed = 100;

    useEffect(() => {
        let i = 0;

        const typingInterval = setInterval(() => {
            if (i <= originalText.length) {
                setText(originalText.slice(0, i));
                i += 1;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return() => clearInterval(typingInterval);
    }, [originalText, typingSpeed]);

    return(
        <>
        <div className="loading-screen-container">
            <header className="loading-header">{text}</header>
        </div>
        <div className="loading-logo-container">
            <div className="loading-spin-logo">
                <img className="loading-logo" src={loadingLogo} alt="Loading Logo" />
            </div>
        </div>
        </>
    )
}

export default Loading;