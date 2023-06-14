import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import OurMedia from '../OurMedia/OurMedia';
import OurInstactor from '../OurInstactor/OurInstactor';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <OurMedia />
            <OurInstactor />
        </div>
    );
};

export default Home;