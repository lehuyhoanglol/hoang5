import React,{useContext} from 'react';
import { AuthContext } from "../context/AuthContext";

const Login = () =>{
    const {login } = useContext(AuthContext);

    const handleLogin = () => {
        login ();

    };
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>  
    );
};
export default Login;