import React from 'react';
import Bennar from '../Bennar/Bennar';
import Nevber from '../../../Component/Nevber/Nevber';
import Footer from '../../Footer/Footer';
import Travel from '../../../Component/Travel/Travel';
import Travelimg from '../../../Component/Travel/Traveimg/Travelimg';
import Advanturetravel from '../../../Component/Advanturetravel/Advanturetravel';
import Nature from '../../../Component/Nature/Nature';

const Home = () => {
    return (
        <div>
            <Nevber></Nevber>
            <Bennar></Bennar>
            <Travel></Travel>
            <Travelimg></Travelimg>
            <Advanturetravel></Advanturetravel>
            <Nature></Nature>
            <Footer></Footer>
        </div>
    );
};

export default Home;