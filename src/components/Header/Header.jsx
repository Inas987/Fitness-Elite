import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
    const [menuOpened, setMenuOpened] = React.useState(false);
    const mobile = window.innerWidth <= 768;

    return (
        <div className="header">
            <img src={Logo} alt="logo" className='logo' />
            {(!menuOpened && mobile) ? (
                <div
                    onClick={() => setMenuOpened(true)}
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        position: 'fixed',
                        right: '2rem',
                        top: '2rem',
                        zIndex: 99,
                    }}
                >
                    <img src={Bars} alt="menu" className='bars' style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li>
                        <Link
                            to="pocetna"
                            smooth={true}
                            duration={500}
                            onClick={() => setMenuOpened(false)}
                        >
                            Početna
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="programi"
                            smooth={true}
                            duration={500}
                            onClick={() => setMenuOpened(false)}
                        >
                            Programi
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="razlozi"
                            smooth={true}
                            duration={500}
                            onClick={() => setMenuOpened(false)}
                        >
                            Zašto odabrati nas
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="planovi"
                            smooth={true}
                            duration={500}
                            onClick={() => setMenuOpened(false)}
                        >
                            Planovi
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="kontakt"
                            smooth={true}
                            duration={500}
                            onClick={() => setMenuOpened(false)}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Header;