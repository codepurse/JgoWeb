import React, { Component } from "react";
import Link from "next/link";
export class footer extends Component {
  render() {
    return (
      <div className="container-fluid conFooter">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <img
              src="Image/logo.png"
              className="img-fluid imgLogo imgLogoFooter"
              style={{ width: "150px", marginLeft: "20px" }}
            ></img>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ul className="ulFooter">
              <li className="liFooter">
                <Link href="/faq#contact">
                  <a href="#news">CONTACT US</a>
                </Link>
              </li>
              <Link href="/privacy-policy">
                <li className="liFooter">
                  <a href="#contact">POLICIES</a>
                </li>
              </Link>
              <Link href="/terms-conditions">
                <li className="liFooter">
                  <a href="#contact">TERM & CONDITION</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-12">
            <p className="text-center pFooter">
              © 2020 JGO Philippines. - All Rights
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
