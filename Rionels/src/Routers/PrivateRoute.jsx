import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { loginFirst } from "../Pages/Authentication/Login/Login";

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    loginFirst()
    
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (user ? children :  <Navigate to="/login"></Navigate>)
  }
};

export default PrivateRoute;