import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="news-letter">
        <h1>Get exlusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter