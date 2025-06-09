import React, { useState } from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Heart from '../../assets/heart.png';
import hero_image_back from '../../assets/hero_image_back.png';
import hero_image from '../../assets/hero_image.png';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import LoginRegister from '../LoginRegister'; 
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

const Hero = () => {
    const { user, setUser } = useContext(AuthContext);
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    const [showAuth, setShowAuth] = useState(false);

    const handleLogin = (userData) => {
        setUser(userData);
        setShowAuth(false);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div className="hero" id="pocetna">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="najbolji-ad">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '210px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>Najbolji fitness klub u gradu</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Započni </span>
                        <span>Svoje</span>
                    </div>
                    <div>
                        <span>Fitness Putovanje</span>
                    </div>
                    <div>
                        <span>
                            Fitness centar koji ti pruža više. Savremena oprema,
                            profesionalni pristup, pravi rezultati.
                        </span>
                    </div>
                </div>

                <div className="stats">
                    <div>
                        <span>
                            <CountUp start={0} end={15} duration={3} />+
                        </span>
                        <span>Godina Iskustva</span>
                    </div>
                    <div>
                        <span>
                            <CountUp start={0} end={2} duration={3} />
                        </span>
                        <span>Fitness centra</span>
                    </div>
                    <div>
                        <span>
                            <CountUp start={0} end={10} duration={3} />
                        </span>
                        <span>Sedmičnih grupnih termina</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Pronađi nas</button>
                    <button className="btn">Fitpass</button>
                </div>
            </div>

            <div className="right-h">
                {!user ? (
                    <button className="btn" onClick={() => setShowAuth(!showAuth)}>
                        Login/Registracija
                    </button>
                ) : (
                    <>
                        <p style={{ color: '#fff' }}>
                            Dobrodošao, {user.username} ({user.role})
                        </p>
                        <button className="btn" onClick={handleLogout}>
                            Odjava
                        </button>
                    </>
                )}

                {showAuth && <LoginRegister onLogin={handleLogin} />}

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="Heart" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="Hero" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back}
                    alt="Hero Back"
                    className="hero-image-back"
                />
            </div>
        </div>
    );
};

export default Hero;
