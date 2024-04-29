import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";

const MainLayout = () => {
    return (
        <>
            <Navs />
            <AppTitle />


            
            <Outlet />

        </>
    )
}

export default MainLayout;