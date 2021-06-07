import React from 'react';
import {Link} from "react-router-dom";
import {MDBCol} from "mdbreact";

const NavBar = () => {
    return (
        <div  className="navbar navbar-one navbar-expand-sm">
            <div className="NavBar d-flex justify-content-between align-items-center m-auto">

                       {/* Logo code*/}
                       <Link to="/" className="navbar-brand font-inter-semibold mr-5">Dustlikdon.uz</Link>

                       {/* Search code*/}
                       <MDBCol md="6">
                           <div className="input-group border-0 md-form form-sm form-1 pl-0">
                               <div className="input-group-prepend">
                                <span className="input-group-text border-0 bg-white" id="basic-text1">
                                 <img src="/images/icons/search.svg" alt="Error"/>
                                </span>
                               </div>
                               <input className="form-control border-0 my-0 py-1" type="text" placeholder="Saytdan izlash" aria-label="Search" />
                           </div>
                       </MDBCol>

                        {/*Language change code*/}
                        <a href="#" className="language font-inter-medium text-decoration-none">На русском</a>

                        {/*Phone button code*/}
                        <button type="button" className="btn btn"><a href="tel:+998723354116" className="nav-link"><img
                            src="/images/icons/phone button.svg" className="ml-0" alt="Error"/> 99872 335-41-16</a></button>
            </div>
        </div>
    );
};

export default NavBar;