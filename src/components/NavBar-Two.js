import React from 'react';
import {Link} from "react-router-dom";

const NavBarTwo = () => {
    return (
        <div className="navbar navbarTwo navbar-expand-sm">
            {/*NavBar-Two code*/}
            <div className="NavBar-Two d-flex justify-content-start align-items-center">

                {/*Home logo code*/}
                <Link to="/" className="navbar-brand home_brand d-flex justify-content-center align-items-center"><img
                    src="/images/icons/home.svg" alt="Error"/></Link>

                {/*Nav Link code*/}
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link font-inter-regular">Jamiyat haqida</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link font-inter-regular">Struktura</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link font-inter-regular">Yangiliklar</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link font-inter-regular">Elektron murojaatlar</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link font-inter-regular">Interaktiv xizmatlar</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link font-inter-regular">Aloqa</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarTwo;