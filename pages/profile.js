import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";

export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  useEffect(() => {
    setFull_name(AuthService.getFullname());
  }, []);

  function logout() {
    AuthService.logout();
    router.push("/");
  }

  return (
    <>
      <Header></Header>
      <div className="container-fluid conProfile">
        <div className="divSidebar">
          <div className="divMenu">
            <div className="divIcon">
              <ul className="no-bullets">
                <li>
                  <img src="Image/home.png" style={{ width: "20px" }}></img>
                </li>
                <li>
                  <img src="Image/truck.png" style={{ width: "20px" }}></img>
                </li>
                <li>
                  <img src="Image/call.png" style={{ width: "20px" }}></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col-lg-6">
            <img
              src="Image/logo.png"
              className="img-fluid"
              style={{ width: "120px", marginLeft: "40px" }}
            ></img>
          </div>
          <div className="col-lg-6">
            <div className="form-inline divUserNav">
              <button className="btnLogout" onClick={logout}>
                Logout
              </button>
              <div className="vl"></div>
              <span className="pFullname">{full_name}</span>
              <div className="circle">
                <img src="Image/profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
       <div className = "row" style = {{paddingLeft: "55px", marginTop: "40px"}}>
         <div className = "col-lg-12">
           <p className = "pDashboard">Dashboard</p>
         </div>
         <div className = "col-lg-12">
           
         </div>
       </div>
      </div>
    </>
  );
}
