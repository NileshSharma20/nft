import React,{useEffect} from 'react'
import "./Team.css"
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Team() {

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
        opacity:0,
        transition:{duration:1}
        })
    }
    },[inView]);

  return (
    <div className='team-section'>
        <div className='team-container' ref={ref}>
            <motion.div className='team-heading' initial={{y:200,opacity:0}} animate={animation}>
                <h1>The Jaadu Team</h1>
            </motion.div>

            <div className='team-placard-container'>
                <motion.div className='team-item' initial={{y:200,opacity:0}} animate={animation}>
                    <img src='images/team1.png' alt='team'/>
                    <div className='team-role'>
                        <span>Photo-sythesis</span>
                    </div>
                    <h1 className='team-name'>One</h1>
                    <p className='team-desc'>Artist Specializing In 2D Design. Front-End Developer.</p>
                </motion.div>

                <motion.div className='team-item' initial={{y:200,opacity:0}} animate={animation}>
                    <img src='images/team1.png' alt='team'/>
                    <div className='team-role'>
                        <span>Photo-sythesis</span>
                    </div>
                    <h1 className='team-name'>Two</h1>
                    <p className='team-desc'>Artist Specializing In 2D Design. Front-End Developer.</p>
                </motion.div>

                <motion.div className='team-item' initial={{y:200,opacity:0}} animate={animation}>
                    <img src='images/team1.png' alt='team'/>
                    <div className='team-role'>
                        <span>Photo-sythesis</span>
                    </div>
                    <h1 className='team-name'>Three</h1>
                    <p className='team-desc'>Artist Specializing In 2D Design. Front-End Developer.</p>
                </motion.div>

                <motion.div className='team-item' initial={{y:200,opacity:0}} animate={animation}>
                    <img src='images/team1.png' alt='team'/>
                    <div className='team-role'>
                        <span>Photo-sythesis</span>
                    </div>
                    <h1 className='team-name'>Four</h1>
                    <p className='team-desc'>Artist Specializing In 2D Design. Front-End Developer.</p>
                </motion.div>

                <motion.div className='team-item' initial={{y:200,opacity:0}} animate={animation}>
                    <img src='images/team1.png' alt='team'/>
                    <div className='team-role'>
                        <span>Photo-sythesis</span>
                    </div>
                    <h1 className='team-name'>Five</h1>
                    <p className='team-desc'>Artist Specializing In 2D Design. Front-End Developer.</p>
                </motion.div>

                <motion.div className='team-item' initial={{y:200,opacity:0}} animate={animation}>
                    <img src='images/team1.png' alt='team'/>
                    <div className='team-role'>
                        <span>Photo-sythesis</span>
                    </div>
                    <h1 className='team-name'>Six</h1>
                    <p className='team-desc'>Artist Specializing In 2D Design. Front-End Developer.</p>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default Team