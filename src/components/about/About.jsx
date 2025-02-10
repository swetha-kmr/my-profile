import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BBA.(Bachelor of Business Administration) <br /><i>Bharathidasan University.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>2.03</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Design</li>
                      <li>Web Development</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            Hi, I'm Swetha!<b> I'm a Frontend Developer</b>  currently looking for new opportunities.
             I have a strong passion for creating user-friendly and visually appealing web applications. 
             In addition to frontend development, I also have experience in web design, ensuring that my
              projects are both functional and
             aesthetically engaging. I'm eager to learn and grow in the tech industry!
            </p>

          </div>
      </div>
    </section>
  )
}

export default About