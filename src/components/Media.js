import React from 'react';

const Media = () => {
    return (
        <div className="media_cards">
            <div className="row">
                <div className="col-12">
                    {/* Media text code */}
                    <h2 className="font-inter-semibold">Media</h2>
                </div>

                {/* Media link active code */}
                <div className="col-12">
                    <div className="link_active mt-2">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item"><a href="#" className="nav-link font-inter-regular active">Barchasi</a></li>
                            <li className="nav-item"><a href="#" className="nav-link font-inter-regular text-dark my-2">Foto galareya</a></li>
                            <li className="nav-item"><a href="#" className="nav-link font-inter-regular text-dark my-2">Video galareya</a></li>
                        </ul>
                    </div>
                </div>
            </div>

                <div className="row">
                    {/*  Media Cards code  */}
                    <div className="col-4 mt-5">
                        <div className="card">
                            <img src="/images/card-five.png" alt="Error"/>
                            <div className="card-body">
                                <h4 className="font-inter-semibold">"DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...</h4>

                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="font-inter-regular">
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span className="font-inter-regular">
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span className="font-inter-regular">
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="card">
                            <img src="/images/card-five.png" alt="Error"/>
                            <div className="card-body">
                                <h4 className="font-inter-semibold">"DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...</h4>

                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="font-inter-regular">
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span className="font-inter-regular">
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span className="font-inter-regular">
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="card">
                            <img src="/images/card_seven.png" alt="Error"/>
                            <div className="card-body">
                                <h4 className="font-inter-semibold">"DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...</h4>

                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="font-inter-regular">
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span className="font-inter-regular">
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span className="font-inter-regular">
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Media;