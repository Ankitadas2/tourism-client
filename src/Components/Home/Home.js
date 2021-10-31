import React from 'react';
import About from '../About/About';
import ArgentBook from '../ArgentBook/ArgentBook';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <Services></Services>
           <ArgentBook></ArgentBook>
        </div>
    );
};

export default Home;