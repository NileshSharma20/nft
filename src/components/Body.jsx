import React, {useEffect} from 'react'
import "./Body.css"
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Body() {

  const {ref,inView} = useInView();

  const animation = useAnimation();

  useEffect(()=>{
    console.log("use effect hook, aboutInView=",inView);
    if(inView){
      animation.start({
        y:0,
        opacity:1,
        transition:{duration:1}
      });
    }
    if(!inView){
      animation.start({
        y:200,
        opacity:0.2,
        transition:{duration:1}
      })
    }
  },[inView]);

  return (
    <div className='body-container'>
       <div className='body' >
       <motion.h1 className='about' initial={{y:200,opacity:0}} animate={animation} ref={ref}>About us</motion.h1>
           <div className='body-para'>
               <motion.p initial={{y:200,opacity:0}} animate={animation} transition={{delay:0.5}} ref={ref}>Hype Aliens are modern art in the form of NFT designed by four friends creating a team. 10,000 unique 3D NFTs created on Ethereum blockchain combined with exceptional style, use-case and community are going to make HYPE ALIENS a leader in the world of NFT.</motion.p>
               <motion.p initial={{y:200,opacity:0}} animate={animation} transition={{delay:0.5}} ref={ref}>As Team HYPE ALIENS we aspire to conquer the Metaverse world together with our splendid Community! We wish to win the hearts of a multitude of people so they, just like us, love our project and create it with us! HYPE ALIENS will land on Earth as soon as February 2022 and at that moment a new era will come to the Metaverse!</motion.p>
           </div>
           <motion.div initial={{y:200,opacity:0}} className='body-col' animate={animation} transition={{delay:0.5}} ref={ref}>
               
               <div className='body-img'>
                <img src='images/about.png' alt='about'/>
               </div>
               
               <div className='about-stat-container'>
                  <div className='uNFT'><h2>10,000</h2> <p>Unique NFTs</p></div>
                  <div className='uItem'><h2>150+</h2><p>Unique Items</p></div>
                  <div className='legendary'><h2>50</h2><p>Legendary Artworks</p></div>
                  <div className='about-add-img'><img src='images/aboutadd.png' alt='about-add'/></div>
               </div>
           </motion.div>
       </div>
    </div>
  )
}

export default Body