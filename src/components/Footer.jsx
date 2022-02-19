import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='footer-col'>
                <h1>Join us!</h1>
                <div className='footer-buttons'>
                    <a href="https://discord.com/">
                        <button className='butt'><i class="fab fa-discord fa-sm"/>Discord</button>
                    </a>
                    <a href="https://twitter.com/explore">
                        <button className='butt'><i class="fab fa-twitter fa-sm"/>Twitter</button>
                    </a>
                    <a href="https://www.instagram.com/">
                        <button className='butt'><i class='fab fa-instagram fa-sm' /> Instagram</button>
                    </a>
                </div>
            </div>

            <div className='footer-col-right'>
                <h1>Contact Us</h1>
                <p>marketing@hypealiens.com</p>
                <a href="https://www.youtube.com/watch?v=dkg3-NJ8rJs">
                        <button className='butt'>Contact Us</button>
                    </a>
            </div>
        </div>
        <div className='rights'>
            <p>2022 © HYPE ALIENS. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer