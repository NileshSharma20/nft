import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <img src='images/logo.png' alt='logo'/>
        <div className='header-para'>
          <p>3D designed Aliens in HYPE style are going to conquer the Metaverse with their whole army.</p>  
        </div>  
        <div className='buttons'>
          
          <a href="https://www.youtube.com/watch?v=dkg3-NJ8rJs">
            <button className='butt'><i class="fab fa-discord fa-sm"/>Discord</button>
          </a>
          <button className='butt'><i class="fab fa-twitter fa-sm"/>Twitter</button>
          <button className='butt'><i class='fab fa-instagram fa-sm' /> Instagram</button>
        </div>
      </div>
        
    </div>
  )
}

export default Header