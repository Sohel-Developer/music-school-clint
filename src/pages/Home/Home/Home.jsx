import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import OurMedia from '../OurMedia/OurMedia';
import OurInstactor from '../OurInstactor/OurInstactor';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music School | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <OurMedia />
            <OurInstactor />
        </div>
    );
};

export default Home;