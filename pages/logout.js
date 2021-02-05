import React, { Component, useState, useEffect } from "react";
import Header from "../component/header";
import { useRouter } from "next/router";
import Componentdidmount from "../component/componentdidmount";
import AuthService from "../services/auth.service";
import axios from "axios";
import getApi from "../services/api.service";
export default function logout() {
  const router = useRouter();
  useEffect(() => {
    

    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl = appglobal.api.base_api + appglobal.api.logout;

    axios.get(apiUrl, {} , options).then((result) => {
      AuthService.logout();
      router.push("/");
    }).catch((err) => {
      AuthService.logout();
      router.push("/");
    });

  }, []);
  return <></>;
}
