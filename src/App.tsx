import "./App.css"

import Home from "./routes/Home/Home.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ContactHome from "./routes/Home/ContactHome/ContactHome.tsx";
import AllPostsHome from "./routes/Home/AllPostsHome/AllPostsHome.tsx";
import AboutUsHome from "./routes/Home/AboutUsHome/AboutUsHome.tsx";
import OnePostHome from "./routes/Home/OnePostHome/OnePostHome.tsx";
import Profile from "./routes/Profile/Profile.tsx";
import LoginLog from "./routes/Home/Login/LoginLog.tsx";
import CreateAccountHome from "./routes/Home/CreateAccountHome/CreateAccountHome.tsx";
import ProfilePage from "./routes/Profile/ProfilePage/ProfilePage.tsx";
import EditPostAuth from "./routes/Profile/EditPostAuth/EditPostAuth.tsx";
import CreatePostAuth from "./routes/Profile/CreatePostAuth/CreatePostAuth.tsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<AllPostsHome />} />
                    <Route path="/allPostsHome" element={<AllPostsHome />}/>
                    <Route path="/aboutUs" element={<AboutUsHome />} />
                    <Route path="/contact" element={<ContactHome />} />
                    <Route path="/login" element={<LoginLog />} />
                    <Route path="/createAccount" element={<CreateAccountHome />} />
                    <Route path="/onePostHome/:postId" element={<OnePostHome />} />
                </Route>
                <Route path="/profile" element={<Profile/>} >
                    <Route index element={<ProfilePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/posts" element={<CreatePostAuth />} />
                    <Route path="/profile/:postId" element={<EditPostAuth />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"}/>} />
            </Routes>
        </BrowserRouter>
    )
}

