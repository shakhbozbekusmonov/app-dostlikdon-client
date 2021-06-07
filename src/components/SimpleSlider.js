import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", right: "20px", background: "transparent" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", left: "20px", background: "green" }}
            onClick={onClick}
        />
    );
}

class SimpleSlider extends Component {
    render() {
        const settings = {
            "dots": true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            autoplay: true,
            autoplaySpeed: 3000,
            "nextArrow": <SampleNextArrow />,
            "prevArrow": <SamplePrevArrow />,
            "appendDots": dots => (
                <div
                    style={{
                        "borderRadius": "50%",
                        "position": "absolute",
                        "left": "-475px",
                        "top": "450px",
                        display: "none"
                    }}
                >
                    <ul style={{ "margin": "0px" }}> {dots} </ul>
                </div>
            ),
            "customPaging": i => (
                <div
                    style={{
                        "width": "12px",
                        "height": "12px",
                        "borderRadius": "50%",
                        "color": "#FF6B00",
                        "backgroundColor": "#D9DBE1",
                        display: "none"
                    }}
                >
                </div>
            )
        };

        return (
            <div className="container-fluid p-0 carusel">
                <Slider {...settings}>
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <img src="/images/DostlikDon.png" width="100%" className="ml-auto" alt="Error"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <img src="/images/DostlikDon.png" width="100%" className="ml-auto" alt="Error"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <img src="/images/DostlikDon.png" width="100%" className="ml-auto" alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;