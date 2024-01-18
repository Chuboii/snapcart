import { FC } from "react";
import { Container } from './Explore.style'
import Navbar from "../../components/navbar/Navbar";
import MobileSearchForm from "../../components/mobile search form/MobileSearchForm";
import Menu from "../../components/menu bar/Menu";
import AdSlider from "../../components/ad slide/AdSlide";
import Footer from "../../components/footer/Footer";
import QuickAcccess from "../../components/quick access/QuickAccess";


const Explore: FC = () => {
  

    return (
        <>
            <Navbar />
            <MobileSearchForm />
            <Container>
                <Menu />
                <AdSlider />
            </Container>
            <QuickAcccess/>
            <Footer/>
        </>
    )
}

export default Explore