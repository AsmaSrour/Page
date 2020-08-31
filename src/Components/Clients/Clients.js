import React, { Component } from 'react';
import './Clients.css'

const Clients = () => {
    return(
      <div className="container pd-y">
          <div className="Services">
            <h2 className="Titles">Clients</h2>
            <span className="line"></span>
            <p className="desc">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <div className="ClientsItems">
              <img src='/images/client2.png'alt="logo1"/>
              <img src='/images/client2.png' alt="logo2"/>
              <img src='/images/client2.png' alt="logo3"/>
              <img src='/images/client2.png' alt="logo4"/>
              <img src='/images/client2.png' alt="logo5"/>
              <img src='/images/client2.png' alt="logo6"/>
            </div>
            <div className="clear"></div>
            <ul className="bollets">
                <li class="active"></li>
                <li></li>
            </ul>
          </div>
      </div>
    )
}
export default Clients;