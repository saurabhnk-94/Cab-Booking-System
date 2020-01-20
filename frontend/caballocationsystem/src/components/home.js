import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Login Page</h1>
                <div className="home-content">
                    Login as 
                    <NavLink to="user">User</NavLink>
                    <NavLink to="driver">Driver</NavLink>
                </div>
            </div>

        )
    }
}

export default Home;