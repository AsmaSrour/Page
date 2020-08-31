import React, { Component } from 'react';
import axios from 'axios'
import './Testimonials.css'

class Testimonials extends Component {
  state={
      Testimonials:[]
  }

  componentDidMount(){
      axios.get('js/data.json').then(res => {
              this.setState({Testimonials : res.data.Testimonials})

      })
  }

  render(){
    const {Testimonials}=this.state;
    const TestimonialsList=Testimonials.map( (TestimonialsItem) => {
       return(
        <div className="TestimonialsItems pd-y">
        <div className="TestimonialsItem" key={TestimonialsItem.id}>
          <p className="paragraph"><i class="fa fa-quote-left fa-lg" aria-hidden="true"></i> {TestimonialsItem.paragraph}  <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i></p>
          <img src={TestimonialsItem.image} alt="profile photo"/>
          <h4>{TestimonialsItem.name}</h4>
          <p className="desc">{TestimonialsItem.desc}</p>
        </div></div>
        )                
    })

    return(
      <div className="container pd-y">
          <div className="Testimonials">
              <h2 className="Titles">Testimonials</h2>
              <span className="line"></span>
              <p className="desc">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
              <div className="allItems">
                {TestimonialsList}
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
}
export default Testimonials;