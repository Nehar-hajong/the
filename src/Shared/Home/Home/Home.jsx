import React from 'react';
import Bennar from '../Bennar/Bennar';
import Nevber from '../../../Component/Nevber/Nevber';
import Footer from '../../Footer/Footer';
import Travel from '../../../Component/Travel/Travel';
import Travelimg from '../../../Component/Travel/Traveimg/Travelimg';
import Advanturetravel from '../../../Component/Advanturetravel/Advanturetravel';

const Home = () => {
    return (
        <div>
            <Nevber></Nevber>
            <Bennar></Bennar>
            <Travel></Travel>
            <Travelimg></Travelimg>
            <Advanturetravel></Advanturetravel>
            <Footer></Footer>
        </div>
    );
};

export default Home;