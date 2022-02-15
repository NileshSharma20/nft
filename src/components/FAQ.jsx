import React from 'react'
import "./FAQ.css"
import Accordion from './Accordion';

const FaqData =[
    {
        topic: 'When do HYPE ALIENS land on Earth?',
        drop: 'HYPE ALIENS plan their Earth-coming at the end of February 2022! Let us all be ready and watch out for their spacecraft!'
    },
    {
        topic:'How many HYPE ALIENS will be created?',
        drop:'There will be only 10,000 pieces!'
    },
    {
        topic:'What lies at the base of the project’s success?',
        drop:'Responsibility for the project’s success lies in the unique execution style of our 3D aliens, exceptional clothing choices, modern jewelry e.g. on teeth and much more, but especially the community we are creating together!'
    },
    {
        topic:'How to contact the team?',
        drop:'Contact with us is really easy and within your reach! Join our Discord and there you can contact us w'
    }
];


function FAQ() {
  return (
        <div className='faq-container'>
            <div className='container'>
                <div className='faq'>
                        <div className='faq-section'>
                            <h1 className='faq-heading'>FAQ</h1>
                                <div className='accoridon-container'>
                                    {FaqData.map(({ topic, drop }) => (
                                        <Accordion topic={topic} drop={drop} />
                                        ))}         
                                </div>
                        </div>
                        <div className='faq-add-image'><img src='images/logogreen.png' alt='logogreen'/></div>
                </div>
            </div>
        </div>
  )
}

export default FAQ