import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Baselayout(params) {
    return (
        <>
       <Navbar/>
       <Outlet/>
        </>
    )
}