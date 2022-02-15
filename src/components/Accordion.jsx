import React, { useState } from 'react'
import "./Accordion.css"

const Accordion = ({topic,drop}) => {
  const [isActive,setIsActive] = useState(false);
  return (
    <div className='accordion-item'>
      <div className='accordion-item-topic' onClick={()=> setIsActive(!isActive)}>
        <div className='topic-text'>
            <h1>{topic}</h1>
        </div>
        <div className='topic-sign'>{isActive ? '-':'+'}</div>
      </div>
      <div>
        {isActive && <div className='dropbox' onClick={()=> setIsActive(!isActive)}>{drop}</div> }
      </div>
    </div>
  )
}

export default Accordion