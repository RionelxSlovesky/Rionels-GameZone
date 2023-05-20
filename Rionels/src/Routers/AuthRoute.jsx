import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (user ? <Navigate to="/"></Navigate> :  children)
  }
};

export default AuthRoute;
