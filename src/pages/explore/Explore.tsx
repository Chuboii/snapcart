import { FC } from "react";
import { Container } from './Explore.style'
import MobileSearchForm from "../../components/mobile search form/MobileSearchForm";
import Menu from "../../components/menu bar/Menu";
import AdSlider from "../../components/ad slide/AdSlide";
import Footer from "../../components/footer/Footer";
import QuickAcccess from "../../components/quick access/QuickAccess";
import TechnologyStore from "../../components/technology store/TechnologyStore";
import FashionStore from "../../components/fashion store/FashionStore";
import HomeStore from "../../components/home store/HomeStore";
import FoodStore from "../../components/food store/FoodStore";
import AllProducts from "../../components/all products/AllProducts";


const Explore: FC = () => {
  

    return (
        <>
        
                <MobileSearchForm />
            <Container>
                <Menu />
                <AdSlider />
            </Container>
            <QuickAcccess />
            <TechnologyStore />
            <FashionStore />
            <HomeStore />
            <FoodStore />
            <AllProducts/>
            <Footer/>
        </>
    )
}

export default Explore