import React from 'react'
import ask from '../assets/call.png'

const Main = () => {
  return (
    <div className="main">
      <h1>
        EasyLearn - We Make <br/>
        Your Dreams Come True
        </h1>
        <p>Study anywhere you want to with our help. Well, expcept Hogwarts </p> 
        <div className="main-btn">
          <p><span>Request a course</span></p>
          <p> <img src={ask} width="20px"/>+1(250)792200568</p>
          
        </div>
    </div>

  )
}

export default Main;
