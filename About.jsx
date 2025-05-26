import React from 'react'
import cafe from '../Images/cafe.jpg'

const About = () => {
  return (
    <section id="about">
      <div className='about'>
        <div>
          <div className='about-wrapper'>
            <div className="container">
              <div>
                <p><b>Kahvila Kesämökki</b> on Pirkkalan Loukonlahdessa sijaitseva kesäkahvila. 
                </p><p>Meillä pääset nauttimaan aurinkoisista kesäpäivistä pelaillen ulkopelejä, 
                suppaillen sekä nauttien herkuistamme sekä kylmistä juomista! 
                </p><p>
                Myös karvakamut ovat tervetulleita meille ja koirille on tarjolla itsetehtyä jäätelöä! 
                </p>

              </div>
              <div>
                <p>
                Meille on helppo saapua Tampereen keskustasta bussilla numero 8, 
                joka tulee Nuolialan koululle tai sitten voit pysähtyä meille Pyhäjärven ympäri pyöräillessäsi! Ilmaista parkkitilaa on myös hyvin saatavilla kahvilan ympäristösssä. <br /><br />
                </p>
                {/* <p>
                  <a href='/About'>Lue Lisää</a>
                </p> */}
                <p><b>Tervetuloa Kesämökille! </b></p>

              </div>
            </div>
          </div>

        </div>
      </div>
    <div className='image-wrapper'>
        <img src={cafe} className='image'/>
    </div>
      {/* <h2>About Us</h2> */}
    </section>    
  )
}

export default About