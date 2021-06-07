import React from 'react';
import {Link} from "react-router-dom";

const News = () => {
    return (
        <div className="main_cards">
            <div className="main_cards_news">
                <div className="row">
                    {/* News code */}
                    <div className="col-12 d-flex justify-content-between">
                        <h3 className="font-inter-semibold">Yangiliklar</h3>
                        <div className="d-flex">
                            <a href="#"><img src="/images/icons/chernov-left.svg" alt=""/></a>
                            <a href="#"><img src="/images/icons/chernov-right.svg" className="ml-2" alt=""/></a>
                        </div>
                    </div>

                    {/*  Cards news code   */}
                    <div className="col-4">
                        <div className="card">
                            <img src="/images/card-one.png" alt="Error"/>
                            <div className="card-body">
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

                                <h4 className="font-inter-semibold">E'LON !!!</h4>

                                <p className="font-inter-regular">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                    aksiyadorlari diqqatiga! 2020-yil 27-mart
                                    kuni soat 9:00 dan...</p>

                                <button type="button"
                                        className="btn btn-outline-primary font-inter-medium ml-auto">Batafsil
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/images/card-two.png" className="card_images" alt="Error"/>
                            <div className="card-body border">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span>
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span>
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>

                                <h4 className="font-inter-semibold">Eksport qiluvchi tadbirkorlik
                                    subektlariga...</h4>

                                <p className="font-inter-regular">“O‘zdonmaxsulot” aksiyadorlik kompaniya tizim
                                    korxonalari tomonidan istisno tarikasida maxalliy...</p>

                                <button type="button"
                                        className="btn btn-outline-primary font-inter-medium ml-auto"><Link to="/More" className="text-decoration-none" >Batafsil</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/images/card-one.png" alt="Error"/>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span>
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span>
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>

                                <h4 className="font-inter-semibold">"DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...</h4>

                                <p className="font-inter-regular">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                    boshqaruv raisi tomonidan Do’stlik
                                    tumanidagi 2-sonli...</p>

                                <button type="button"
                                        className="btn btn-outline-primary font-inter-medium ml-auto">Batafsil
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*  Companies news code  */}
                    <div className="col-12 d-flex justify-content-between">
                        <h3 className="font-inter-semibold">Korxonamiz yangiliklari</h3>

                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#"><img src="/images/icons/chernov-left.svg" alt="Error"/></a>
                            <a href="#"><img src="/images/icons/chernov-right.svg" className="ml-2" alt="Error"/></a>
                        </div>
                    </div>

                    {/*  Componies Cards code  */}
                    <div className="col-4">
                        <div className="card">
                            <img src="/images/card-four.png" alt="Error"/>
                            <div className="card-body">
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

                                <h4 className="font-inter-semibold">E'LON !!!</h4>

                                <p className="font-inter-regular">2019 yil 27-mart kuni soat 10.00da
                                    “Do‘stlikdonmaxsulotlari” aksiyadorlik jamiyati aksiyadorlarining umumiy</p>

                                <button type="button"
                                        className="btn btn-outline-primary font-inter-medium ml-auto">Batafsil
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/images/card-five.png" className="card_images_5" alt="Error"/>
                            <div className="card-body border">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span>
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span>
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>

                                <h4 className="font-inter-semibold">"DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...</h4>

                                <p className="font-inter-regular">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                    boshqaruv raisi tomonidan Do’stlik
                                    tumanidagi 2-sonli...</p>

                                <button type="button"
                                        className="btn btn-outline-primary font-inter-medium ml-auto">Batafsil
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/images/card-six.png" alt="Error"/>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <img src="/images/icons/portfel.svg" alt="Error"/>
                                        16:48 / 12.11.20
                                    </span>

                                    <span>
                                        <img src="/images/icons/eye.svg" alt="Error"/>
                                        321
                                    </span>

                                    <span>
                                        <img src="/images/icons/sms.svg" alt="Error"/>
                                        100
                                    </span>
                                </div>

                                <h4 className="font-inter-semibold">Xisobot: Buxgalteriya balansi
                                    2 kvartal</h4>

                                <p className="font-inter-regular">Buxgalteriya balansi 2 kvartal bo’yicha
                                    foto jamlanma.</p>

                                <button type="button"
                                        className="btn btn-outline-primary font-inter-medium ml-auto">Batafsil
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;