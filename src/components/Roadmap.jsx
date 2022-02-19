import React,{useEffect} from 'react'
import "./Roadmap.css"
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Roadmap() {

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
        opacity:0,
        transition:{duration:0.6}
        })
    }
    },[inView]);

  return (
      <div className='rm-total-container'>
          <motion.div className='roadmap-container' initial={{y:200,opacity:0}} animate={animation} ref={ref}>
              <div className='roadmap-heading'>
                <div className='roadmap-heading-content'>
                  <div className='roadm-h'>
                    <h1>Road Map</h1>
                    <p>This roadmap outlines our goals and where we want to take HypeAliens. We have a lot of ideas and concepts that we are working on.</p>
                  </div>
                  <div className='button-container'>
                      <a href="https://www.youtube.com/watch?v=dkg3-NJ8rJs">
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
              </div>
          </motion.div>

          <div className='rm-container'>
            <div className='rm-box'>
              <div className='rm-padding'>
                <div className='rm-item-active'>
                  <div className='rm-item-head-active'>
                    <span>01</span> - Drop
                  </div>
                  <div className='rm-item-desc'>
                    <p>HYPE ALIENS were created in quantity of 10,000 pieces and each one of them required maximum care and dedication to ensure quality of purchase for our investors! Among the 10,000 items, over 50 are Legendary and unique which makes them the true rarities in our collection. Hopefully their prices will soar into space gaining at least 10x-20x multiplier in relation to the mint price!</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>02</span> - Reveal
                  </div>
                  <div className='rm-item-desc'>
                    <p>Before reveal we want to provide our aliens with considerable amount of advertisement to make the collection price skyrocket immediately after reveal! We have a definite plan to get it right. How will you react to a cooperation with the most famous boxing star?</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>03</span> - Strong united community
                  </div>
                  <div className='rm-item-desc'>
                    <p>In the case of many great collections the community is the main success determinant and we have a stunning one! As a long-term project we take care of our community and make sure you can contact us at any time of day and night. We adore the nocturnal chat on Discord! But that’s not all, we want to go a step further! We aim to unite us all into a family that will clearly set the minimal selling price of our NFT to 1 ETH. It will give over 7-10x profit for each of our investors! Sounds great, doesn’t it? And that’s just the beginning!</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>04</span> - Giveaways
                  </div>
                  <div className='rm-item-desc'>
                    <p>To take care of long-term development of our community we organise a Giveaway now and will organise numerous further ones in the future! All income from OpenSea commissions will be relayed to the project expansion! It will ensure that we will be talked about, loudly.
How about the first Giveaway in March and giving out a 2022 Lamborghini Huracan EVO? The equivalent of almost $320,000!</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>05</span> - Events in Dubai, LA and Miami
                  </div>
                  <div className='rm-item-desc'>
                    <p>Life doesn’t consist of only endless investments, one has to also relax for the mental health well-being. We invite everyone to our events and parties on exclusive yachts surrounded by beautiful women, handsome men and fast cars! The first party will take place in Dubai between 20-29 April (to be specified with our community).</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>06</span> - Upcoming NFT platform
                  </div>
                  <div className='rm-item-desc'>
                    <p>We are in the middle of realising a platform that will propose the NFT projects and select the most valuable of them. It will be a separate project with the goal of becoming a competition to services like R**** S*****! Every holder of our NFT will be guaranteed a Whitelist in chosen projects on that platform. It will be one of a key point for a full-time NFT investors.</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>07</span> - Our Own Token
                  </div>
                  <div className='rm-item-desc'>
                    <p>For further development we released our own token on Ethereum network that will help us with handling the staking platform. The Token will at first go to Uniswap - a decentralized stock exchange - then we will try to get a listing on the biggest CEX in the world! Token Presale will be held in the middle of March 2022.</p>                    
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>08</span> - Staking Platform
                  </div>
                  <div className='rm-item-desc'>
                    <p>Staking Platform is our priority to secure certain earnings for our investors! Only the owners of HYPE ALIENS and people they invite will have access to our platform! It will probably be named “XPad”. A person inviting others will get guaranteed reward of 5-10% from invited people and the staking profits! The number of places will be severely restricted to maintain the liquidity of funds! Platform will be probably launched at the end of March 2022.</p>  
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>09</span> -  Mobile game
                  </div>
                  <div className='rm-item-desc'>
                    <p>In the late April or early May 2022 our goal will be to release a simple mobile game featuring the Aliens living on a planet based in Blockchain that will allow the owners of HYPE ALIENS to be rewarded with ETH every 60 minutes with Smart Contract! The game will be strongly related with our own token that we introduced above.</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>10</span> -  Cooperation with Celebrities
                  </div>
                  <div className='rm-item-desc'>
                    <p>After releasing all the platforms listed above we will be a complete project! No celebrity will be able to refuse a cooperation with us! We will aim for the greatest collaborations possible. HYPE ALIENS is going to conquer the Metaverse and cryptocurrency worlds!</p>
                  </div>
                </div>

                <div className='rm-item'>
                  <div className='rm-item-head'>
                    <span>11</span> - Metaverse & 3D scanning
                  </div>
                  <div className='rm-item-desc'>
                    <p>It will be something truly awesome… For now it will remain a secret… TBA</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
      </div>
    
  )
}

export default Roadmap