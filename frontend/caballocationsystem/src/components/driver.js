import React, { Component } from "react";
import axios from "axios";
import "./components.css";
import { NavLink } from "react-router-dom";

class Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: [],
      drivername: "",
      rideDetails: []
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/drivers/")
      .then(res =>
        this.setState({
          driver: res.data
        })
      )
      .catch(err => console.log("Error", err));

    axios.get("http://127.0.0.1:8000/ridedetails/").then(res =>
      this.setState({
        rideDetails: res.data
      })
    );
  }

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
          <NavLink to="/user">User</NavLink>
          &nbsp;
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <h1>This is driver Page</h1>
        <h1>Select Driver</h1>
        <select
          value={this.state.value}
          onChange={event => this.setState({ drivername: event.target.value })}
        >
          <option>select</option>
          {this.state.driver.map((item, index) => (
            <option key={index} value={item.drivername}>
              {item.id} &nbsp;{item.drivername}
            </option>
          ))}
          {console.log("select value", this.state.drivername)}
        </select>
        {console.log("ride", this.state.rideDetails)}
        {this.state.drivername
          ? this.state.rideDetails
              .filter(
                items =>
                  items.driver == this.state.drivername && items.status == "AC"
              )
              .map((driver, index) => (
                <div key={index} className="driver-on-going">
                  <h2>You are presently on ride with {driver.user}</h2>
                </div>
              ))
          : null}

        {this.state.rideDetails
          .filter(items => items.status == "RE")
          .map((item, index) => (
            <div key={index}>
              <div className="card">
                <div className="card-details">
                  <div style={{ padding: 10 }}>{item.user}</div>
                  <div style={{ padding: 10 }}>{item.ride_created}</div>
                  <div style={{ padding: 10 }}>Requesting</div>
                  <button>ACCEPT</button>
                </div>
              </div>
            </div>
          ))}
        {this.state.drivername ? (
          <div className="driver-ride">
            <h3>Driver Previous Ride Details</h3>
            <table id="customers">
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>Date of Ride</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rideDetails
                  .filter(items => items.driver == this.state.drivername)
                  .map((item, index) => (
                    <tr key={index}>
                      {console.log("table content", item)}
                      <td>{item.user}</td>
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

export default Driver;
