import Footer from "../../components/Footer/Footer.tsx";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile.tsx";
import {Outlet} from "react-router-dom";


export default function Profile() {
    return (
        <>
            <HeaderProfile />
            <Outlet />
            <Footer />
        </>
    )
}
