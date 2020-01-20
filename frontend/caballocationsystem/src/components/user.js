import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      username: "",
      rideDetails: []
    };
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

    axios
      .get("http://127.0.0.1:8000/ridedetails/")
      .then(res =>
        this.setState({
          rideDetails: res.data
        })
      )
      .catch(err => console.log("Error", err));
  }

  bookingCab = () => {
    const username = this.state.username;
  };

  render() {
    return (
      <div className="driver-home">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 50,
            fontSize: 30
          }}
        >
          <NavLink to="/">Home</NavLink>
          &nbsp;
          <NavLink to="/driver">Driver</NavLink>
          &nbsp;
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <h1>This is User Page</h1>
        <h1>Select User</h1>
        <select
          value={this.state.value}
          onChange={event => this.setState({ username: event.target.value })}
        >
          <option>select</option>
          {this.state.user.map((item, index) => (
            <option key={index} value={item.username}>
              {item.id} &nbsp;{item.username}
            </option>
          ))}
          {console.log("select value", this.state.username)}
        </select>
        {this.state.username ? (
          <button onClick={() => this.bookingCab(this.state.username)}>
            Book Cab
          </button>
        ) : null}
        {console.log("ride", this.state.rideDetails)}
        {this.state.rideDetails
          .filter(
            items => items.user == this.state.username && items.status == "RE"
          )
          .map((item, index) => (
            <div key={index} className="driver-on-going">
              {console.log("drivername", item.driver)}
              <h2>You have requested for the CAB</h2>
            </div>
          ))}

        {this.state.rideDetails
          .filter(
            items => items.user == this.state.username && items.status == "AC"
          )
          .map((item, index) => (
            <div key={index} className="driver-on-going">
              {console.log("drivername", item.driver)}
              <h2>
                You are on the CAB with {item.driver} <button>End Trip</button>
              </h2>
            </div>
          ))}
        {/* {this.state.username ?
          <div>
          {this.state.rideDetails.filter(items => items.name == this.state.username && items.status == "RE" || items.name == this.state.username && items.status == "AC").length > 0 ?
          "": <button>Book a Cab</button> }
          </div>: null}
        {console.log("length",this.state.rideDetails.filter(items => items.name == this.state.username && items.status == "RE").length)} */}

        {this.state.username ? (
          <div className="driver-ride">
            <h3> Previous Ride Details of {this.state.username}</h3>
            <table id="customers">
              <thead>
                <tr>
                  <th>Driver Name</th>
                  <th>Date of Ride</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rideDetails
                  .filter(items => items.user == this.state.username)
                  .map((item, index) => (
                    <tr key={index}>
                      {console.log("table content", item)}
                      <td>{item.driver}</td>
                      <td>{item.ride_created}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default User;
