import React, { useState,useEffect } from 'react'
import "./Accordion.css"
import {motion, useAnimation, AnimatePresence} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Accordion = ({topic,drop}) => {

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

  const [isActive,setIsActive] = useState(false);
 
  return (
    <motion.div className='accordion-item' initial={{y:200,opacity:0}} animate={animation} ref={ref}>
      
      <div className='accordion-item-topic' onClick={()=> setIsActive(!isActive)}>
        <div className='topic-text'>
            <h1>{topic}</h1>
        </div>
        <div className='topic-sign'>{isActive ? '-':'+'}</div>
      </div>
      
      <div>
        <AnimatePresence>
          {isActive && <motion.div className='dropbox' onClick={()=> setIsActive(!isActive)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} 
          transition={{duration:0.4}}>
              {drop}
            </motion.div> }
          </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Accordion