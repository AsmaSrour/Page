import React, { Component } from 'react';
import axios from 'axios'
import './Team.css'

class Team extends Component {
  state={
    Team:[]
  }

  componentDidMount(){
      axios.get('js/data.json').then(res => {
              this.setState({Team : res.data.Team})

      })
  }

  render(){
    const {Team}=this.state;
    const TeamList=Team.map( (TeamItem) => {
       return(
        <div className="TeamItems" key={TeamItem.id}>
            <img src={TeamItem.image} alt="team photo"/>
            <div className="TeamItem">
                <h2>{TeamItem.name}</h2>
                <span>{TeamItem.desc}</span>
                <div className="Media">
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        )                
    })
    return(
      <div className="container pd-y">
          <div className="Team">
              <h2 className="Titles">Our Team</h2>
              <span className="line"></span>
              <div className="allItems">
                  {TeamList}
              </div>
              
          </div>
          <div className="clear"></div>
      </div>
    )
}}
export default Team;