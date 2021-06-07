import React from 'react';

const WebSite = () => {
    return (
        <div className="web_site">
            <div className="web_site_card d-flex">
                <div className="card">
                    <img src="/images/gebra.png" alt="Error"/>
                    <div className="card-body">
                        <p className="font-inter-medium">O‘zbekiston Respublikasi
                            Prezidentining
                            rasmiy veb sayti</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/images/check.png" alt="Error"/>
                    <div className="card-body">
                        <p className="font-inter-medium">Davlat interaktiv
                            xizmatlari yagona portali</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/images/mygovuz.png" alt="Error"/>
                    <div className="card-body">
                        <p className="font-inter-medium">O‘zbekiston Respublikasi
                            ochik ma'lumotlari
                            portali</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/images/talim.png" alt="Error"/>
                    <div className="card-body">
                        <p className="font-inter-medium">O‘zbekiston Respublikasi
                            Maktabgacha Ta'lim
                            Vazirligi</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/images/uzdon.png" alt="Error"/>
                    <div className="card-body">
                        <p className="font-inter-medium">“O’ZDONMAHSULOT”
                            aksiyadorlik
                            kompaniyasi</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WebSite;