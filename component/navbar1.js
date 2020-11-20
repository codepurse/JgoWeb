import React, { Component } from "react";
import Link from "next/link";
export class navbar1 extends Component {
  showModal() {
    localStorage.setItem("showmodal", "1");
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={{ padding: "20px 20px" }}
      >
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="navbar-brand" href="#">
          <Link href = "/">
            <a>
              <img
                src="Image/logo.png"
                className="img-fluid imglogo"
                style={{ width: "130px", marginLeft: "20px" }}
              />
            </a>
          </Link>
        </nav>
        <div className="collapse navbar-collapse" id="collapse">
          <div className="col2 ml-auto">
            <ul className="nav navbar-nav">
              <Link href="/">
                <li>
                  <a
                    className="nav-link nav-driver"
                    onClick={this.showModal}
                    style={{ color: "white" }}
                  >
                    Ride with Us
                  </a>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <a className="nav-link nav-driver" style={{ color: "white" }}>
                    Deliver Now
                  </a>
                </li>
              </Link>
              <li>
                <a className="nav-link nav-driver" style={{ color: "white" }}>
                  JGO Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar1;
