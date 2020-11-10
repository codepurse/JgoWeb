import React, { Component, useState, useEffect } from "react";
import Header from "../component/header";
import { useRouter } from "next/router";
import Componentdidmount from "../component/componentdidmount";

export default function notfound() {
    return (
        <>
        <Header></Header>
        <Componentdidmount></Componentdidmount>
        <div className = "container-fluid h-100" style = {{backgroundColor: "white"}}>
            <div className = "row h-100 align-items-center">
                <div className = "col-lg-12">
                    <img src = "Image/404.jpg" className = "img-fluid mx-auto d-flex"></img>
                </div>
            </div>
        </div>
        </>
    )
}