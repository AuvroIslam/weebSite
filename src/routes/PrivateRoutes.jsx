import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <Loading />; // Return statement was missing
    }
    
    if (user && user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}  />;
};
    


export default PrivateRoute;