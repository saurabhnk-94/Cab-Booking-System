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
        this.submitHandler = this.submitHandler.bind(this);
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

     submitHandler() {
         const username = this.state.username;
         const drivername = this.state.drivername;
         axios.post(`http://127.0.0.1:8000/users/`, {
             username
         }).then(res => {
            console.log(res.data);
         console.log(res.data);})
         .catch(err => console.log("Error", err))
         this.setState({
             username:"",
             
         })
         axios.post(`http://127.0.0.1:8000/drivers/`, {
             drivername
         }).then(res => {
            console.log(res.data);
         console.log(res.data);})
         .catch(err => console.log("Error", err))
         this.setState({
             drivername:""
         })
     }
    
    render () {
        return (
            <div>
                This is Settings page
                <NavLink to="/">Home</NavLink>
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


                <div>Create user:
                    <div>
                        <input type="text" value={this.state.value} onChange={() => this.setState({username:event.target.value})} />
                        <button onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>
                <div>Create Driver:
                    <div>
                        <input type="text" value={this.state.value} onChange={() => this.setState({drivername:event.target.value})} />
                        <button onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>


            </div>
        )
    }
}

export default Settings;
