import React, { Component } from 'react';
import axios from 'axios'
import './Contact.css'


class Contact extends Component {
  state={
      Contact:[]
  }

  componentDidMount(){
      axios.get('js/data.json').then(res => {
              this.setState({Contact : res.data.Contact})

      })
  }

  render(){
    const {Contact}=this.state;
    const ContactList=Contact.map( (ContactItem) => {
       return(
        <div className="ContactItem" key={ContactItem.id}>
            <i class={ContactItem.icon} aria-hidden="true"></i>
            <h2>{ContactItem.title}</h2>
            <span>{ContactItem.desc}</span>
        </div>
        )                
    })

    return(
      <div className="container pd-y">
        <div className="Contact">
            <h2 className="Titles">Contact Us</h2>
            <span className="line"></span>
            <p className="desc">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <div className="ContactItems">
                  {ContactList}
            </div>
            <div className="clear"></div>
            <div className="Map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3662248926726!2d35.907303924127966!3d31.869457254820844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca7824f6bcbdf%3A0x386207b9b6b4f872!2zMzHCsDUyJzA5LjMiTiAzNcKwNTQnMjguNyJF!5e0!3m2!1sen!2sjo!4v1598725165813!5m2!1sen!2sjo" 
               width="100%" 
               height="300" 
               frameborder="0"
               allowfullscreen="" 
               aria-hidden="false" 
               tabindex="0">
               </iframe>
            </div>
            <form action="">
                <div class="form-input">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                </div>
                <input type="text" className="sub" placeholder="Subject"/>
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
                <input className="buttons" type="submit" value="Send Message"/>
            </form>

        </div>
     </div>
    )
}}
export default Contact;