import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_wrap d-flex">
                <div className="col-4">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="#" className="nav-link pl-0"><h3 className="font-inter-medium">Dustlikdon.uz</h3></a></li>
                        
                        <p className="font-inter-regular">Jizzax viloyati Do‘stlik tumani <br/>
                            Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                    </ul>
                </div>

                <div className="col-3">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="#" className="nav-link"><h3 className="font-inter-medium">Asosiy</h3></a></li>
                        <li className="nav-item"><a href="#" className="nav-link font-inter-regular">Jamiyat haqida</a></li>
                        <li className="nav-item"><a href="#" className="nav-link font-inter-regular">Struktura</a></li>
                        <li className="nav-item"><a href="#" className="nav-link font-inter-regular">Yangiliklar</a></li>
                    </ul>
                </div>

                <div className="col-3">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="#" className="nav-link"><h3 className="font-inter-medium">Xizmatlar</h3></a></li>
                        <li className="nav-item"><a href="#" className="nav-link font-inter-regular">Elektron murojaatlar</a></li>
                        <li className="nav-item"><a href="#" className="nav-link font-inter-regular">Interaktiv xizmatlar</a></li>
                        <li className="nav-item"><a href="#" className="nav-link font-inter-regular">Saytdan izlash</a></li>
                    </ul>
                </div>

                <div className="col-3">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="#" className="nav-link"><h3 className="font-inter-medium">Bog'lanish</h3></a></li>
                        <li className="nav-item"><a href="tel:+998713354116" className="nav-link font-inter-regular"><img
                            src="/images/icons/phonee.svg" className="mr-2" alt="Error"/>998 71 335 41 16</a></li>
                        <li className="nav-item"><a href="mailto" className="nav-link font-inter-regular"><img
                            src="/images/icons/email.svg" className="mr-2"
                            alt="Error"/>info@dustlikdon.uz</a></li>
                    </ul>
                </div>
            </div>

            <div className="line"></div>
        </div>
    );
};

export default Footer;