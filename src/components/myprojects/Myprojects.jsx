import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG6 from '../../assets/IMG6.png'
import IMG7 from '../../assets/IMG7.png'

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
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Mini Shop</h3>
            <small className='text-light'>FIGMA </small>
            <div className="portfolio__item-cta">

              <a href="https://www.figma.com/proto/tfnfbEJkzXIlv83WWZMwV4/Swetha_2?node-id=1-2&starting-point-node-id=1%3A2&t=QE3wE7W6niiIzdEW-1" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG7} alt="" />
            </div>
            <h3>Education</h3>
            <small className='text-light'>FIGMA </small>
            <div className="portfolio__item-cta">

              <a href="https://www.figma.com/proto/nHMScYNz5PNZjwAccuU1Ld/Swetha_1?node-id=2027-38&starting-point-node-id=2027%3A38&t=bcNCMDQgUUOudOxG-1" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
      </div>
    </section>
  )
}

export default Myprojects