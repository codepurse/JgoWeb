import React, { Component, useState, useEffect } from "react";
import Header from "../component/header";
import { useRouter } from "next/router";
import Componentdidmount from "../component/componentdidmount";
import AuthService from "../services/auth.service";
export default function logout() {
  const router = useRouter();
  useEffect(() => {
    AuthService.logout();
    router.push("/");
  }, []);
  return <></>;
}
