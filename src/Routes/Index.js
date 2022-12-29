import React from 'react'

import { Routes, Route, } from "react-router-dom";
import Center from "../Screen/Center";
import Profile from "../Screen/Profile";
import Friends from "../Screen/Friends";
import Friendrequest from "../Screen/FriendRequest";
import SearchUser from "../Screen/SearchUser";
import SignUp from "../Screen/SignUp";
import SignIn from "../Screen/SignIn";
import MainWrapper from "../Screen/MainWrapper";
import ProtectedRoutes from "./ProtectedRoutes";
import Post from "../Screen/Post";
import ChatPage from '../Screen/ChatPage';
import NotFound from '../Screen/NotFound'







const Index = () => {


    return (

        <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/" element={<MainWrapper />}>
                    <Route path="/" element={<Center />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/friend-requests" element={<Friendrequest />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/Search" element={<SearchUser />} />
                    <Route path="/Posts" element={<Post />} />
                </Route>
                <Route path="/chat" element={<ChatPage />} />
            </Route>



            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}

export default Index