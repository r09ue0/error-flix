import React, { useEffect, useState } from "react";
import './NavBar.css'

function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`navbar ${show && 'navbar_black'}`}>
            <img
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt="Netflix Logo"
                className="navbar_logo"
            />
            <img
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                alt="Netflix Profile"
                className="navbar_profile"
            />
        </div>
    );
}

export default NavBar;
