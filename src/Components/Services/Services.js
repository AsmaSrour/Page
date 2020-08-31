import React, { Component } from 'react';
import axios from 'axios'
import './Services.css'

class Services extends Component {
  state={
      Services:[]
  }

  componentDidMount(){
      axios.get('js/data.json').then(res => {
              this.setState({Services : res.data.Services})

      })
  }

  render(){
    const {Services}=this.state;
    const ServiceList=Services.map( (ServiceItem) => {
       return(
             <div className="servicesItems ltrEffect" key={ServiceItem.id}>
                <i class={ServiceItem.icon_name} aria-hidden="true"></i>
                <div className="servicesItem">
                    <h4>{ServiceItem.title}</h4>
                    <p>{ServiceItem.body}</p>
                </div>
            </div>
        )                
    })


    return(
      <div className="container pd-y">
        <div className="Services">
            <h2 className="Titles">Services</h2>
            <span className="line"></span>
            <p className="desc">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            {ServiceList}
            <div className="clear"></div>
        </div>
       </div>
    )
}
}
export default Services;