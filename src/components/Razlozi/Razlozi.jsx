import React from 'react'
import './Razlozi.css'
import image1 from '../../assets/image1.jpg';
import tick from '../../assets/tick.png';
const Razlozi = () => {
  return (
    <div className='Razlozi' id='razlozi'>
        <div className="left-r">
            <img src={image1} alt="" />
        </div>
        <div className="right-r">
            <span>neki od razloga</span>
            <div>
                <span className="stroke-text">zasto</span>
                <span> odabrati nas?</span>
            </div>
            <div className='detalji-r'>
                <div><img src={tick} alt="tick"></img>
                <span>SAVREMENA OPREMA</span>
                </div>
                <div><img src={tick} alt="tick" />
                <span>INDIVIDUALNI I GRUPNI TRENINZI</span>
                </div>
                <div><img src={tick} alt="tick" />
                <span>STRUČNO OSOBLJE</span>
                </div>
                <div><img src={tick} alt="tick" />
                <span>PARTNERI I POPUSTI</span>
                </div>
                <div><img src={tick} alt="tick" />
                <span>STOTINE TRANSFORMACIJA I ZADOVOLJNIH ČLANOVA</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Razlozi