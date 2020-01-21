import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            drivers:[],
            username:"",
            drivername:""
        }
        this.userSubmit = this.userSubmit.bind(this);
        this.driverSubmit = this.driverSubmit.bind(this);
    }
    componentDidMount() {
        axios
          .get("http://127.0.0.1:8000/users/")
          .then(res =>
            this.setState({
              user: res.data
            })
          )
          .catch(err => console.log("Error", err));
    
        axios.get("http://127.0.0.1:8000/drivers/").then(res =>
          this.setState({
            drivers: res.data
          })
        ).catch(err => console.log("Error", err)
        );
     }

     userSubmit(username) {
         console.log("usernameSubmit:", username);
         axios.post(`http://127.0.0.1:8000/users/`, {
             username
         })
         .then(res => {
         console.log("Successful",res.data);
         })
         .catch(err => console.log("Error", err)) 
         this.setState({
             username:"",
         })
           
        
     }

     driverSubmit(drivername) {
        console.log("driverSubmit:", drivername);
        axios.post(`http://127.0.0.1:8000/drivers/`, {
            drivername
        }).then(res => {
        console.log("Successful",res.data);
        })
        .catch(err => console.log("Error", err))   
        this.setState({
            drivername:"",   
        })
    }
    
    render () {
        return (
            <div className="settings-page">
                <div className="driver-header">
                Welcome to the Settings page
                <NavLink to="/">Home</NavLink>
                </div>
                    
          &nbsp;
                <h2>List of users</h2>
                <table id="customers">
                   <thead>
                       <tr>
                       <th>Users</th>  
                       </tr>
                   </thead>
                   <tbody>
                        <tr>
                       {this.state.user.map((items, index) => (
    <td key={index}>{items.username}</td>
                       ))}
                       </tr>
                   </tbody>
                </table>

                <h2>List of Drivers</h2>
                <table id="customers">
                   <thead>
                       <tr>
                       <th>Drivers</th>  
                       </tr>
                   </thead>
                   <tbody>
                        <tr>
                       {this.state.drivers.map((items, index) => (
    <td key={index}>{items.drivername}</td>
                       ))}
                       </tr>
                   </tbody>
                </table>


                <div className="creating-user">
                    <div>Create user:</div>
                    <div>
                        <input type="text" value={this.state.username} onChange={() => this.setState({username:event.target.value})} />
                        <button onClick={() => this.userSubmit(this.state.username)}>Submit</button>
                    </div>
                </div>
                <div className="creating-user">
                    <div>Create Driver:</div>
                    <div>
                        <input type="text" value={this.state.drivername} onChange={() => this.setState({drivername:event.target.value})} />
                        <button onClick={() => this.driverSubmit(this.state.drivername)}>Submit</button>
                    </div>
                </div>


            </div>
        )
    }
}

export default Settings;
