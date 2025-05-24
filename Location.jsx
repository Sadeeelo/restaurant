import React from 'react'

const Location = () => {
  return (
    <section class='location'>
      <a class="anchor" id='location'></a>
      <div>
        <h2>Täältä löydät meidät</h2>
        <p>Kirkkoveräjäntie 14</p>
        <p>Loukonlahden uimaranta</p>
        <p>Pirkkala</p>
      </div>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe title="google maps location"
                width="100%" 
                height="300" 
                id="gmap_canvas" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.3472208948506!2d23.678363416159886!3d61.47433448246004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ed8e30901d4ff%3A0xafa44f01a0fa8998!2sLoukonlahden%20uimaranta!5e0!3m2!1sfi!2sfi!4v1685609303937!5m2!1sfi!2sfi" 
                frameborder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0">
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default Location