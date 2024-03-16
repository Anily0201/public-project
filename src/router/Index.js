import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { lazy } from "react";
import ResultNotFound from "../component/ResultNotFound";
import UserDetail from "../component/user/UserDetail";

const Adminlayout = lazy(() => import("../layout/Adminlayout"));
const AdminDashboard = lazy(() => import("../component/admin/AdminDashboard"));
const UserDashboard = lazy(() => import("../component/user/UserDashboard"));
const Userlayout = lazy(() => import("../layout/Userlayout"));
const AboutUs = lazy(() => import("../component/aboutus/AboutUs"));
const ContactUs = lazy(() => import("../component/contactus/ContactUs"));
const HotProducts = lazy(() => import("../component/user/HotProducts"));
const LatestProducts = lazy(() => import("../component/user/LatestProducts"));
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const SignUp = lazy(() => import("../component/auth/SignUp"));
const Login = lazy(() => import("../component/auth/Login"));
const Profile = lazy(() => import("../component/user/profile/Profile"));


export const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Userlayout />} >
                <Route index element={<UserDashboard />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="HotProducts" element={<HotProducts />} />
                <Route path="LatestProducts" element={<LatestProducts />} />
                <Route path="user/profile" element={<Profile />} />
                <Route path="userdetail/:id" element={<UserDetail />} />
            </Route>
            <Route path="/admin" element={<Adminlayout />} >
                <Route index element={<AdminDashboard />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />} >
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<ResultNotFound />} />
        </Route>
    )
);