import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Food Restaurant</h3>
            <small className='text-light'>HTML | CSS | JS</small>
            <div className="portfolio__item-cta">
            <a href=" https://swetha-kmr.github.io/Fooder_Restaurant-/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   {/* <a href="https://github.com/himani413/FashionGallery" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt=""/>
            </div>
            <h3>Weather App</h3>
            <small className='text-light'>HTML | CSS | React </small>
            <div className="portfolio__item-cta">
            <a href=" https://swetha-kmr.github.io/weather-app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
              
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3> Dashboard</h3>
            <small className='text-light'>ReactJs | Firebase</small>
            <div className="portfolio__item-cta">

              <a href="https://swetha-kmr.github.io/dashboard/#/login" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Mini Shop</h3>
            <small className='text-light'>HTML | CSS  </small>
            <div className="portfolio__item-cta">

              <a href="https://swetha-kmr.github.io/mini-shop-Boutique/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects