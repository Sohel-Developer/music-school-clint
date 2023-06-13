import { useContext } from "react";
import { AuthContext } from "../pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // TODO: Why Problem I Am Not Sure?
    // if (loading) {
    //     return <p>Private Route Loading............</p>
    // }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;