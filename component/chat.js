import React, { Component, useEffect, useState, useCallback } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import "../component/map/config";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import PubNub from "pubnub";

export default function chat() {
  const router = useRouter();
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container conChatbox">
          <div className = "row rowType">
                <div className = "col-lg-12">
                    <input type = "text" className = "txtType"></input>
                </div>
          </div>
        <div className="row rowChat">
          <div className="col-lg-12 align-self-end">
            <div className="row" style={{ margin: "10px 0px" }}>
              <div className="col-lg-2 align-self-end">
                <img
                  src="Image/profile.jpg"
                  className="img-fluid imgChat"
                ></img>
              </div>
              <div className="col-lg-10">
                <p className="pChatuser">
                  Sample chaasdsadasdasdasdasdasdasdasdasdasdt
                </p>
              </div>
            </div>
            <div className="row" style={{ margin: "10px 0px" }}>
              <div className="col-lg-2 align-self-end">
                <img
                  src="Image/profile.jpg"
                  className="img-fluid imgChat"
                ></img>
              </div>
              <div className="col-lg-10">
                <p className="pChatuser">
                  Sample chaasdsadas
                </p>
              </div>
            </div>
            <div className="row" style={{ margin: "10px 0px" }}>
              <div className="col-lg-2 align-self-end">
                <img
                  src="Image/profile.jpg"
                  className="img-fluid imgChat"
                ></img>
              </div>
              <div className="col-lg-10">
                <p className="pChatuser">
                  Sample chaasdsadasdasdasdasdasdasdasdasdasdt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
