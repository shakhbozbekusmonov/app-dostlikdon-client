import React from 'react';
import {Link} from "react-router-dom";

const More = () => {
    return (
        <div className="more_container">
            <div className="row">
                <div className="col-7">
                    <div className="card">
                        <div className="card_time">

                            <div className="d-flex mt-4 justify-content-around align-items-center">
                                <a href="#" className="font-inter-regular">Jamiyat haqida</a>
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

                            <h3 className="font-inter-medium ml-4 mt-4">Eksport qiluvchi tadbirkorlik
                                subektlariga!!!</h3>

                            <p className="font-inter-regular ml-4 mr-4 mt-3">“O‘zdonmaxsulot” aksiyadorlik kompaniyasi
                                tizim
                                korxonalari tomonidan istisno tariqasida maxalliy tadbirkorlik sub'ektlariga eksport
                                qilish sharti bilan birja savdolari orqali bug’doy sotilmoqda.
                                Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat
                                solig’isiz 1 610 000 so‘mdan, qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000
                                so‘mdan sotiladi.
                                Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                                natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi
                                tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib
                                beriladi.</p>

                            <hr className="ml-4 mr-4 mt-5"/>

                            <div className="mavzu ml-4 mr-4 mt-5 d-flex justify-content-between align-items-center">
                                <h4 className="font-inter-medium">Mavzuga izohlar</h4>

                                <h5 className="font-inter-medium">2 ta fikr</h5>
                            </div>

                            <div className="comment_container d-flex align-items-center mt-2 ml-4 mr-4">
                                <img src="/images/human.png" alt="Error"/>

                                <textarea name="comment" className="form-control" placeholder="Izoh qoldirishingiz mumkin"></textarea>
                            </div>

                            <div className="comment_container d-flex align-items-center ml-4 mr-4">
                                <img src="/images/nigina.png" alt="Error"/>

                                <div className="reply_text">
                                    <h4 className="font-inter-medium mb-0">Nigina Karimova</h4>
                                    <p className="font-inter-regular mb-0">Tushunmovchilik bo’yicha qayerga murojaat
                                        qilsam
                                        bo’ladi?</p>
                                    <div className="reply d-flex mt-1 justify-content-between  align-items-center">
                                        <div><img src="/images/icons/heart.svg" className="picture" alt="Error"/></div>
                                        <div><a href="#"
                                                className="text-decoration-none font-inter-regular text-secondary">Javob
                                            qaytarish</a></div>

                                        <div><h6 className="font-inter-regular text-secondary">15 daq avval</h6></div>
                                    </div>
                                </div>
                            </div>

                            <div className="comment_container mb-5 d-flex align-items-center ml-4 mr-4">
                                <img src="/images/sahar.png" alt="Error"/>

                                <div className="reply_text">
                                    <h4 className="font-inter-medium mb-0">Sahar Kenjayev</h4>
                                    <p className="font-inter-regular mb-0 my-0">Tadbirkorlik sub'ektlariga “nol'” darajali
                                        qo‘shilgan qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan
                                        qiymat soligining ortiqcha <span className="text-secondary">batafsil</span></p>
                                    <div className="reply d-flex justify-content-between mt-1 align-items-center">
                                        <div><img src="/images/icons/redheart.svg" className="picture" alt="Error"/></div>
                                        <div><a href="#"
                                                className="text-decoration-none font-inter-regular text-secondary">Javob
                                            qaytarish</a></div>

                                        <div><h6 className="font-inter-regular text-secondary">15 daq avval</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5">
                    <div className="card p-4">
                        <h2 className="font-inter-semibold">Media</h2>

                       <div className="hover_card">
                           <div className="d-flex mt-3 justify-content-between align-items-center">
                            <span className="font-inter-regular text-secondary"><img src="/images/icons/portfel.svg"
                                                                                     alt="Error"/> 16:48 / 12.11.20</span>
                               <a href="#" className="text-decoration-none font-inter-regular">Foto galareya</a>
                           </div>

                           <h3 className="font-inter-medium mt-2">"DO`STLIKDONMAXSULOTLARI"
                               AJ boshqaruv raisi...</h3>
                       </div>

                        <hr/>

                        <div className="hover_card">
                            <div className="d-flex mt-3 justify-content-between align-items-center">
                            <span className="font-inter-regular text-secondary"><img src="/images/icons/portfel.svg"
                                                                                     alt="Error"/> 16:48 / 12.11.20</span>
                                <a href="#" className="text-decoration-none font-inter-regular">Foto galareya</a>
                            </div>

                            <h3 className="font-inter-medium mt-2">Xisobot: Buxgalteriya balansi 2-
                                kvartal</h3>
                        </div>

                        <hr/>

                        <div className="hover_card">
                            <div className="d-flex mt-3 justify-content-between align-items-center">
                            <span className="font-inter-regular text-secondary"><img src="/images/icons/portfel.svg"
                                                                                     alt="Error"/> 16:48 / 12.11.20</span>
                                <a href="#" className="text-decoration-none font-inter-regular">Video galareya</a>
                            </div>

                            <h3 className="font-inter-medium mt-2">Aksiyadorlik kompaniya tizim
                                korxonalari</h3>
                        </div>

                        <hr/>

                        <div className="hover_card">
                            <div className="d-flex mt-3 justify-content-between align-items-center">
                            <span className="font-inter-regular text-secondary"><img src="/images/icons/portfel.svg"
                                                                                     alt="Error"/> 16:48 / 12.11.20</span>
                                <a href="#" className="text-decoration-none font-inter-regular">Foto galareya</a>
                            </div>

                            <h3 className="font-inter-medium mt-2">Xisobot: Buxgalteriya balansi 2-
                                kvartal</h3>
                        </div>
                    </div>

                    <div className="card mt-3 p-4 card_shikoyat">
                        <h1 className="font-inter-semibold">Shikoyatlar mavjudmi?
                            Onlayn tarzda yuboring</h1>

                        <img src="/images/check.png" className="m-auto" alt="Error"/>

                        <h6 className="font-inter-medium">Davlat interaktiv
                            xizmatlari yagona portali</h6>
                    </div>
                </div>

                {/* News code */}
                <div className="col-12 d-flex justify-content-between">
                    <h3 className="font-inter-semibold">So'ngi yangiliklar</h3>
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
                        <img src="/images/card-six.png" className="card_images" alt="Error"/>
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
                                    className="btn btn-outline-primary font-inter-medium ml-auto">Batafsil
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="/images/card-three.png" alt="Error"/>
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
            </div>
        </div>
    );
};

export default More;