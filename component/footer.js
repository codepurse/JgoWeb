import React, { Component } from "react";
import Link from "next/link";
export class footer extends Component {
  render() {
    return (
      <div className="container-fluid conFooter">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Link href="/">
              <img
                src="Image/logo.png"
                className="img-fluid imgLogo imgLogoFooter"
                style={{ width: "130px", marginLeft: "20px" }}
              ></img>
            </Link>

            <div
              className="form-inline divButtonFooter"
              style={{ marginTop: "5px", marginLeft: "25px" }}
            >
              <img
                src="Image/appstore.png"
                className="img-fluidi imgButton"
                style={{ width: "150px", marginLeft: "15px" }}
              ></img>

              <img
                src="Image/playstore.png"
                className="img-fluid imgButton"
                style={{ width: "195px" }}
              ></img>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ul className="ulFooter ml-auto">
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
                  <a href="#contact">TERMS & CONDITIONS</a>
                </li>
              </Link>
            </ul>
            <div className="text-right" style={{ marginTop: "-20px" }}>
              <Link href="https://www.instagram.com/jgo_ph/?fbclid=IwAR1BzxdovtGg6c0jQU3A3m66nnbUInMwQUseBWzTSBr5YKzIYS5sVfQbsbg">
                <img
                  src="Image/instagram.png"
                  className="img-fluid imgSocialfooter"
                  style={{ width: "25px", margin: "5px", cursor: "pointer" }}
                />
              </Link>
              <Link href="https://www.facebook.com/JGOph">
                <img
                  src="Image/facebook-app-symbol.png"
                  className="img-fluid imgSocialfooter"
                  style={{ width: "25px", margin: "5px", cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <hr className="hrfooter"></hr>
            <p className="pFooter">
              8415 Dr Arcadio Santos Ave, Sucat, Parañaque, 1700 Metro Manila ©
              2020 JGO Philippines. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
