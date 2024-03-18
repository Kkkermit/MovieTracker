import React, { useEffect, useState } from 'react'
import '../Styles/footer.css'
import config from '../Config/footer.json'
import LoadingDoc from './loadingScreenDoc';

const footer = config.footer

function Footer() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    return(
        <>
        {isLoading ? <LoadingDoc/> :
        <div className='footer-container'>
            <div className='footer-text'>
                <footer id='footer-text'>{footer}</footer>
            </div>
        </div>
        }
        </>
    )
}

export default Footer