import React from 'react';
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className="HomeHeader" >
            <div class="overlay">
                <div className="HomeInfo">
                    <h2 className="Title">Making <a href="#"> your ideas </a><br/>happen!</h2>
                    <div className="btns">
                        <button className="buttons firstbtn">Get Started</button>
                        <button className="buttons">Our Projects</button>
                    </div>
                </div>
            </div>
        </div>
    )
  
}
export default HomeHeader;