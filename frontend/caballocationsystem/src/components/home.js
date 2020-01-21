import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <h1>Welcome To Cab Allocation System Application</h1>
                </div>
                <div className="home-content">
                    <div style={{fontSize:50, marginTop:20}}>Login as </div>
                    <div style={{fontSize:30, marginTop:20}}>
                    <NavLink to="user">User</NavLink>
                    </div>
                    <div style={{fontSize:20, marginTop:20, color:"red"}}>OR</div>
                    <div style={{fontSize:30, marginTop:20}}>
                    <NavLink to="driver">Driver</NavLink>
                    </div>
                </div>
                <div className="home-settings">
                    To create USER or DRIVER please click on settings -> &nbsp;
                    <NavLink to="settings">Settings</NavLink>
                </div>
            </div>

        )
    }
}

export default Home;