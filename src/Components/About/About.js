import React, { Component } from 'react';
import './About.css'

const About = () => {
    return(
      <div className="container pd-y">
        <div className="About">

          <div className="AboutImg">
            <img src='./images/About.jpg' alt="Image"/>
          </div>

          <div className="AboutInfo">
              <h2 className="Titles">Lorem Ipsum dolor sit amet, consecteture adipiscling</h2>
              <p className="desc">ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
              <ul class="service-list">
                <li> <i class="fa fa-check-circle-o" aria-hidden="true"></i>narrative development to make vivid a place,</li>
                <li> <i class="fa fa-check-circle-o" aria-hidden="true"></i>narrative development to make vivid a place,</li>
                <li> <i class="fa fa-check-circle-o" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</li>
              </ul>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    )
}
export default About;