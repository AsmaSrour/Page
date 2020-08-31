import React , {useState,useEffect} from 'react'
import axios from 'axios'
import './Portfolio.css'

const Portfolio = () => {
  const [Images , setImages] = useState([])
    
  useEffect ( ()=> {
      axios.get('js/data.json').then(res => {setImages(res.data.portfolio)} )
    }  , [])
  

  const PortfolioImages = Images.map( (imageItem) => {
     return(
          <div className="PortfolioItem" key={imageItem.id}>
              <img src={imageItem.image} alt="portfolio Image"/>
              <div className="overlay">
                <span>
                  Portfolio Item {imageItem.id}
                </span>
              </div>
          </div>
  
     )
  })
    return(
      <div className="Portfolio">
          <div className="container pd-y">
              <h2 className="Titles">Our Portfolio</h2>
              <span className="line"></span>
              <p className="desc">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
          </div>
          <div className="PortfolioItems">
             {PortfolioImages}
          </div>
        <div className="claar"></div>
      </div>
    )
}
export default Portfolio;