import {  Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { CreatePost } from "../pages/CreatePost/CreatePost";
import { CreateUser } from "../pages/CreateUser/CreateUser";

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
      <Route path="/" element={<CreateUser />}></Route>
    </Routes>
  );
};
