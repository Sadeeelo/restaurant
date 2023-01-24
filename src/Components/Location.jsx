import React from 'react'

const Location = () => {
  return (
    <div id='location'>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe title="google maps location"
                width="100%" 
                height="400" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=auckland,%20new%20zealand&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default Location