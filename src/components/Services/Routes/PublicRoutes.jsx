import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PublicRoutes = ({ children }) => {
    const checkLoginStates = useSelector(role => role.login)
    const isloggedIn = checkLoginStates.loggedIn
    const role = checkLoginStates.role_data
    if (isloggedIn) {
        return (
            <>
                {role === "1" && <Navigate to="/admin/dashboard" replace></Navigate>}
                {role === "2" && <Navigate to="/employer/dashboard" replace></Navigate>}
                {role === "3" && <Navigate to="/employee/dashboard" replace></Navigate>}
                {role === "4" && <Navigate to="/union/dashboard" replace></Navigate>}
                {role === "5" && <Navigate to="/caregiver/dashboard" replace></Navigate>}
            </>
        )
    }  
    return children
}
export default PublicRoutes