import './style.css'
import './header.css'
import { useState } from 'react';

export default function Header() {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className='header'>
                <h3>Hi, I'm <span>Maija Lei Grimes</span></h3>
                                
                <button className="hamburger" onClick={() => setIsActive(!isActive)}  aria-label="Toggle navigation">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>

                <div className={`nav-links ${isActive ? 'active' : ''}`}>
                    <a href="https://www.linkedin.com/in/maijagrimes/" target="_blank">
                        <img className='nav-logos' src="/logos/InBug-Black.png" alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/maijagrimes" target="_blank">
                        <img className='nav-logos' src="/logos/GitHub_Invertocat_Black.png" alt="GitHub Logo" />
                    </a>
                    <a href="https://www.instagram.com/maijagrimes/" target="_blank">
                        <img className='nav-logos' src="/logos/Instagram_Glyph_Black.png" alt="Instagram Logo" />
                    </a>
                </div>
            </div>
        </>
    );
}