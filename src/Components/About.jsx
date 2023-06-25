import React from 'react'
import cafe from '../Images/cafe.jpg'

const About = () => {
  return (
    <section id="about">
      <div className='about'>
        <div>
          <div className='container'>
              <img src={cafe} className='image'/>
          </div>
          <div className="container">
            <p>where we strive to bring the true taste of Italy to your palate. Our menu features a diverse selection of traditional and modern Italian dishes, made with only the freshest and highest quality ingredients. Our chefs, hailing from various regions of Italy, bring their unique expertise and passion for authentic Italian cuisine to the kitchen.</p>
            <p>where we strive to bring the true taste of Italy to your palate. Our menu features a diverse selection of traditional and modern Italian dishes, made with only the freshest and highest quality ingredients. Our chefs, hailing from various regions of Italy, bring their unique expertise and passion for authentic Italian cuisine to the kitchen.</p>

          </div>
            <h2>Tervetuloa kahvilaan </h2>
        </div>
      </div>
      {/* <h2>About Us</h2> */}
    </section>    
  )
}

export default About