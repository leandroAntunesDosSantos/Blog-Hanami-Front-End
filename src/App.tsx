import "./App.css"

import Home from "./routes/Home/Home.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ContactHome from "./routes/Home/ContactHome/ContactHome.tsx";
import AllPostsHome from "./routes/Home/AllPostsHome/AllPostsHome.tsx";
import AboutUsHome from "./routes/Home/AboutUsHome/AboutUsHome.tsx";
import OnePostHome from "./routes/Home/OnePostHome/OnePostHome.tsx";
import Profile from "./routes/Profile/Profile.tsx";
import PostEdit from "./routes/Profile/PostEdit/PostEdit.tsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<AllPostsHome />} />
                    <Route path="/allPostsHome" element={<AllPostsHome />}/>
                    <Route path="/aboutUs" element={<AboutUsHome />} />
                    <Route path="/contact" element={<ContactHome />} />
                    <Route path="/onePostHome/:postId" element={<OnePostHome />} />
                </Route>
                <Route path="/profile" element={<Profile/>} >
                    <Route index element={<PostEdit />} />
                    <Route path="/profile/postEdit" element={<PostEdit />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"}/>} />
            </Routes>
        </BrowserRouter>
    )
}

