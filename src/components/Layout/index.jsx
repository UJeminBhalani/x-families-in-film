import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes } from "../../Routes"
const AppLayout = () => {
    const [active, setActive] = useState(false);
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        Routes.forEach(item => {
            if (item.routes.includes(window.location.pathname)) {
                setRoutes(item.sidebar)
            }
        });
    }, [])

    return (<>
        <div className={active ? "wrapper active" : "wrapper"}>
            <Header setActive={setActive} />
            <Sidebar Routes={routes} />
            <div className="layout-right">
                <Scrollbars className='scroll_bars'>
                    <Outlet />
                </Scrollbars>
            </div>
        </div>
    </>)
}

export default AppLayout