import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TestPrice from '../TestPrice/TestPrice';
import Footer from '../../Shared/Footer/Footer'
import Corona from '../Corona/Corona';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Corona></Corona>
            <Services></Services>
            <TestPrice></TestPrice>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;