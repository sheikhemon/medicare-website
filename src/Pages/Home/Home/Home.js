import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Bannar from '../Bannar/Bannar';
import Help from '../Help/Help';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Help></Help>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;