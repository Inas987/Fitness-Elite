import React from "react";
import './Programi.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programi = () => {
  return (
    <div className="Programi" id="programi">
        {/* Header */}
        <div className="programi-header">
            <span className='stroke-text'>Istraži naše</span>
            <span>Programe</span>
            <span className='stroke-text'>i kreni sada</span>
        </div>
        <div className="kategorije-programa">
            {programsData.map((program) => (
                <div className="kategorija">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="pridruzi-se">
                        <span>Pridruži se</span>
                        <img src={RightArrow} alt="right-arrow" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Programi;