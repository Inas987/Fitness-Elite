import React from "react";
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Planovi.css';
const Planovi = () => {
    return (
        <div className="planovi-container">
            <div className="blur planovi-blur1"></div>
            <div className="blur planovi-blur2"></div>
            <div className="programi-header" style={{gap: '2rem'}}>
                <span class="stroke-text">ZAPOČNI</span>
                <span>SVOJE FITNESS PUTOVANJE</span>
                <span class="stroke-text">S NAMA</span>
            </div>

            {/* Planovi */}
            <div className="planovi">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="check" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>Pridruži se da saznaš više →</span>
                        </div>
                        <button className="btn">Pridruži se</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planovi;