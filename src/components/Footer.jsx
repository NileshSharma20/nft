import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='footer-col'>
                <h1>Join us!</h1>
                <div className='footer-buttons'>
                    <a href="https://www.youtube.com/watch?v=dkg3-NJ8rJs">
                        <button className='butt'><i class="fab fa-discord fa-sm"/>Discord</button>
                    </a>
                    <button className='butt'><i class="fab fa-twitter fa-sm"/>Twitter</button>
                    <button className='butt'><i class='fab fa-instagram fa-sm' /> Instagram</button>
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