import HeaderClient from "../../components/HeaderClient/HeaderClient.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";


export default function Home() {
    return (
        <>
            <HeaderClient />
            <Outlet />
            <Footer />
        </>
    )
}
