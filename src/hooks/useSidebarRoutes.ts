import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useSidebarRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: 'dashboard',
            navigate: () => navigate(RoutesName.Dashboard),
            icon: RxDashboard,
            active: RoutesName.Dashboard===location.pathname,
            label: 'Dashboard'
        },
        {
            id: 'Analytics',
            navigate: () => navigate(RoutesName.Analytics),
            icon: MdOutlineAnalytics,
            active: RoutesName.Analytics===location.pathname,
            label: 'Analytics'
        },
        {
            id: 'orders',
            navigate: () => navigate(RoutesName.Orders),
            icon: RxDashboard,
            active: RoutesName.Orders===location.pathname,
            label: 'Orders'
        },
        {
            id: 'customer',
            navigate: () => navigate(RoutesName.Customer),
            icon: MdOutlineAnalytics,
            active: RoutesName.Customer===location.pathname,
            label: 'Customer'
        }
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useSidebarRoutes }