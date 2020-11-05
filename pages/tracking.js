import React, { Component, useState, useEffect } from "react";
import Googlemap from "../component/map/maptracking";
import Header from "../component/header";
import { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";
import Componentdidmount from "../component/componentdidmount";
import Leaflet from "../component/map/leaflet";
import swal from "@sweetalert/with-react";
import AuthService from "../services/auth.service";
import Select from "react-select";
import axios from "axios";


export default function tracking() {
    return(
        <>
            <Header></Header>
            <Componentdidmount></Componentdidmount>
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-lg-12">
                        <Googlemap></Googlemap>
                    </div>
                </div>
            </div>
        </>
    )
}