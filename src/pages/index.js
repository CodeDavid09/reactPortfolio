import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import Projects from '../components/Projects';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/data';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Projects />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    );
};

export default Home;