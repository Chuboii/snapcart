import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../pages/explore/Explore";


const RenderRoutes: FC = () => {
    
    return (
        <>
            <Routes>
                <Route path='/' element={ <Explore/>} />
        </Routes>
        </>
    )
}

export default RenderRoutes