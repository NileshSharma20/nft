import React,{useEffect} from 'react'
import "./Util.css"
import Accordion from './Accordion';
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Data =[
    {
        topic: 'Whitelist mint',
        drop: 'Owners of our NFTs will get places on Whitelists for many other equally desirable NFT projects.'
    },
    {
        topic:'Events',
        drop:'HYPE ALIENS community will have access to numerous events hosted around the globe! We desire that our holders have access to the greatest parties in the world with VIP status! Parties on yachts in Dubai or Miami are in the planning phase!'
    },
    {
        topic:'Cars Club',
        drop:'Cars Club is one of many elements to our project! We wish to create a cars club so that the membership is only available to the owners of our HYPE ALIENS! Lamborghini, Ferrari, Bentley, McLaren… that and more awaits for our Community!'
    },
    {
        topic:'Giveaways',
        drop:'To crank up the interest in our project even more we will organize a giveaway with valuable prizes every few months! Ferrari or Lamborghini will find its way to one of our holders!'
    },
    {
        topic:'Merch',
        drop:'As a project that identifies with the HYPE style we want to create our own Merch based on individual NFTs! It will be glorious to see our NFT in real world, won’t it?'
    }
];




function Util() {

    const {ref,inView} = useInView();

const animation = useAnimation();

useEffect(()=>{
  console.log("use effect hook, aboutInView=",inView);
  if(inView){
    animation.start({
      y:0,
      opacity:1,
      transition:{duration:0.6}
    });
  }
  if(!inView){
    animation.start({
      y:200,
      opacity:0.2,
      transition:{duration:0.6}
    })
  }
},[inView]);


  return (
        <div className='util-container'>
            <motion.div className='util' animate={animation} ref={ref}>
                    <div className='util-section'>
                        <h1 className='util-heading'>Utilities</h1>
                            <div className='accoridon-container'>
                                {Data.map(({ topic, drop }) => (
                                    <Accordion topic={topic} drop={drop} />
                                    ))}         
                            </div>
                    </div>
                <div className='util-image'>
                    <div className='util-add-img'><img src='images/utilities.png' alt='about-add'/></div>
                    <div className='util-data-container'>
                        <div className='util-data'>
                            <span>TBA</span><p>Name</p>
                        </div>
                        <div className='util-data'>
                            <span>#????</span><p>Id</p>
                        </div>
                        <div className='util-data'>
                            <img src='images/logo.png' alt='util-add-logo'/>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
  )
}

export default Util