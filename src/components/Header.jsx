import React,{useEffect} from 'react'
import './Header.css'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Header() {
  const {ref,inView} = useInView();

  const animation = useAnimation();

  useEffect(()=>{
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
        opacity:0,
        transition:{duration:1}
      })
    }
  },[inView]);

  return (
    <div className='header-container'>
      <div  className='header-content' ref={ref} >
              <motion.img src='images/logo.png' alt='logo' initial={{y:200,opacity:0}} animate={animation} />
              <motion.div className='header-para' initial={{y:200,opacity:0}} animate={animation} >
                <p>3D designed Aliens in HYPE style are going to conquer the Metaverse with their whole army.</p>  
              </motion.div>  
              <motion.div className='buttons' initial={{y:200,opacity:0}} animate={animation} >
                
                <a href="https://discord.com/">
                  <button className='butt'><i class="fab fa-discord fa-sm"/>Discord</button>
                </a>
                <a href="https://twitter.com/explore">
                  <button className='butt'><i class="fab fa-twitter fa-sm"/>Twitter</button>
                </a>
                <a href="https://www.instagram.com/">
                  <button className='butt'><i class='fab fa-instagram fa-sm' /> Instagram</button>
                </a>
              </motion.div>
      </div>
        
    </div>
  )
}

export default Header