import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../pages/explore/Explore";
import DisplayStore from "../components/display store/DisplayStore";
import Navbar from "../components/navbar/Navbar";
import DisplayProduct from "../components/display product/DisplayProduct";


const RenderRoutes: FC = () => {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<Explore />} />
                    <Route path="/store" element={<DisplayStore />} />
                    <Route path="/product" element={<DisplayProduct />} />
        
                </Route>
                
        </Routes>
        </>
    )
}

export default RenderRoutes