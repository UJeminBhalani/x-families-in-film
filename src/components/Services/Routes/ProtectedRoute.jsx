import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux" 
const ProtectedRoute = ({ children }) => {
    const checkLoginStates = useSelector(role => role.login.loggedIn)  
    if (!checkLoginStates) { 
        
        return <Navigate to="/login" replace></Navigate>
    } 
    return children 
}

export default ProtectedRoute