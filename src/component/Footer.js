import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container container-flex'>
            <div className='icons'>
                <TwitterIcon className='icon'/>
                <TelegramIcon className='icon'/>
                <InstagramIcon className='icon'/>
                <LinkedInIcon className='icon'/>
                <FacebookIcon className='icon'/>
                <YouTubeIcon className='icon'/>
            </div>
            <div className='line'>
                <hr/>
                <hr/>
            </div>
            <div className='copyright'>
                <p>All rights Reserved &copy;</p>
                <p>Made by Saurav Singh</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
