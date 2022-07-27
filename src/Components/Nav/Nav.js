// THIS IS A DUMMY COMPONENT, IT ONLY SERVES AS A DESIGN AID FOR THE PROJECT

import React from 'react';
import './Nav.css';
import HashFlag from '../../images/hashflag_white.jpg';

function Nav() {
  return (
    <>
        <header>
            <nav className="nav">
                <div className="logo">
                <img
                  src={HashFlag}
                  alt=""
                  className=""
                  height={40}
                  width={40}
                /> VETSWHOCODE
                </div>
                <div className="nav-desktop">
                    <ul>
                        <li>Home</li>
                        <li>Our Story</li>
                        <li>Media</li>
                        <li>Apply</li>
                        <li>Syllabus</li>
                        <li>Job Search</li>
                        <li>Contact</li>
                        <li>Code of Conduct</li>
                        <li><a href=" ">Donate</a></li>
                    </ul>
                </div>
                <div className="nav-mobile">
                    <div className="ham">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                
            </nav>
        </header>
    </>
  )
}

export default Nav