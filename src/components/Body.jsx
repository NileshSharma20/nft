import React from 'react'
import "./Body.css"

function Body() {
  return (
    <div className='body-container'>
       <div className='body'>
       <h1 className='about'>About us</h1>
           <div className='body-para'>
               <p>Hype Aliens are modern art in the form of NFT designed by four friends creating a team. 10,000 unique 3D NFTs created on Ethereum blockchain combined with exceptional style, use-case and community are going to make HYPE ALIENS a leader in the world of NFT.</p>
               <p>As Team HYPE ALIENS we aspire to conquer the Metaverse world together with our splendid Community! We wish to win the hearts of a multitude of people so they, just like us, love our project and create it with us! HYPE ALIENS will land on Earth as soon as February 2022 and at that moment a new era will come to the Metaverse!</p>
           </div>
           <div className='body-col'>
               
               <div className='body-img'>
                <img src='images/about.png' alt='about'/>
               </div>
               
               <div className='about-stat-container'>
                  <div className='uNFT'><h2>10,000</h2> <p>Unique NFTs</p></div>
                  <div className='uItem'><h2>150+</h2><p>Unique Items</p></div>
                  <div className='legendary'><h2>50</h2><p>Legendary Artworks</p></div>
                  <div className='about-add-img'><img src='images/aboutadd.png' alt='about-add'/></div>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Body