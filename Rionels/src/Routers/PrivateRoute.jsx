import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (user ? children :  <Navigate to="/"></Navigate>)
  }
};

export default PrivateRoute;