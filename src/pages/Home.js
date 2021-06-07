import React from 'react';
import NavBar from "../components/NavBar";
import NavBarTwo from "../components/NavBar-Two";
import SimpleSlider from "../components/SimpleSlider";
import News from "../components/News";
import OnlineMessage from "../components/OnlineMessage";
import Media from "../components/Media";
import WebSite from "../components/WebSite";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <SimpleSlider/>
            <News/>
            <OnlineMessage/>
            <Media/>
            <WebSite/>
        </div>
    );
};

export default Home;