import React from 'react'
import { useNavigate } from 'react-router-dom';
const Auth = ({ authenticate}) => {
    const navigate = useNavigate();
    const onClick = () => {
        authenticate();
        navigate("profile");
    };
  return (
    <div>
    <h2> Please Authenticate Yourself</h2>
    <button onClick={onClick}>Authenticate</button>
    </div>
  );
};

export default Auth;
