import React, {
  Component,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import "../component/map/config";
import Select from "react-select";
import swal from "@sweetalert/with-react";
import NextNprogress from "nextjs-progressbar";
import Componentdidmount from "../component/componentdidmount";
import Chat from "../component/chat1";
import Link from "next/link";
import PubNub from "pubnub";
import { PubNubProvider, usePubNub } from "pubnub-react";
export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);
  const [tableproile, setTableprofile] = React.useState([]);
  const [tableid, settableid] = React.useState("1");
  const [count, setCount] = React.useState("");
  const [activeCount, setACtivecount] = React.useState("");
  const [statusdropdown, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [oldpass, setOldpass] = React.useState("");
  const [confirmoldpass, setConfirmoldpass] = React.useState("");
  const [newpass, setNewpass] = React.useState("");
  const [isToggled, setIsToggled] = React.useState(false);
  const [firstid, setFirstid] = React.useState("");
  const [firstrun, setFirstrun] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showmore, setShowmore] = React.useState("5");
  const [latestbook, setLatestbook] = React.useState("");

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mname, setMname] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [emailprof, setEmailprof] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [state1, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [profilepic, setProfle] = React.useState("");
  const [walletbalance, setWallet] = React.useState("");
  const [topupamount, setTopup] = React.useState("");
  const [profile_name, setProfilename] = React.useState("");
  const [profile_pic, setprofilepic] = React.useState("");
  const [newimage, setNewimage] = React.useState([]);

  const [listcard, setListcard] = React.useState([]);
  const [verify, setVerify] = React.useState("");
  const [clienttoken, setClientToken] = React.useState("");
  const [bookingid, setBookingid] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [listtickets, setListticket] = React.useState([]);
  const inputFileRef = useRef(null);

  function handleFile(e) {
    let file = e.target.files[0];
    setProfilename(file.name);
    console.log(file);
    setNewimage(file);
    $(".imgProfileDash").attr("src", window.URL.createObjectURL(file));
    setprofilepic(file);
  }
  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  var x;

  const status = [
    { value: "Complete", label: "Complete" },
    { value: "Looking for Driver", label: "Looking for Driver" },
    { value: "In Transit", label: "In Transit" },
    { value: "a", label: "All" },
    { value: "Canceled", label: "Canceled" },
  ];

  const pubnub = new PubNub({
    subscribeKey: "sub-c-958ab632-1d8d-11eb-8a07-eaf684f78515",
    publishKey: "pub-c-701ebbe8-c393-43d5-a389-9ef5391a8fe9",
  });

  function mapbooking(e) {
    if ($(e.target).hasClass("btn--loading")) {
      return false;
    } else {
      $("#exampleModal").modal("hide");
      router.push("/tracking");
    }
  }

  function cancelbook() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl =
      "https://staging-api.jgo.com.ph/api/auth/cancelBookings";

    axios.post(apiUrl, { booking_id: latestbook }, options).then((result) => {
      $("#exampleModal").modal("hide");
      $(".modal-backdrop").hide();
      swal( 
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #00C853" }}
            >
              <div className="col-lg-2">
                <img src="Image/success.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Verified</p>
                <p className="pErrorSub">Your booking is successfully cancelled.</p>
              </div>
            </div>
          </div>
        </div>
      );
      refresh();
    });

  }

  function successMessage() {
    swal(
      <div style={{ width: "450px", padding: "10px" }}>
        <div className="container">
          <div
            className="row align-items-center"
            style={{ borderLeft: "3px solid #00C853" }}
          >
            <div className="col-lg-2">
              <img src="Image/success.png" style={{ width: "32px" }}></img>
            </div>
            <div className="col-lg-10" style={{ textAlign: "left" }}>
              <p className="pError">Success</p>
              <p className="pErrorSub">Your profile is successfully updated.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function refresh() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl =
      "https://staging-api.jgo.com.ph/api/auth/ctransaction-history";
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        setTabledata(result.data.data);
        tablemap = result.data.data;
        setCount(result.data.data.length);
        if (result.data.data.length === 0) {
          $(".pNo").show();
        }
        const active = result.data.data.filter(
          (obj) =>
            obj.status == "Looking for Driver" ||
            obj.status == "Driver found" ||
            obj.status == "Arrived at Pick Up"
        );
        setACtivecount(active.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function show(min, max) {
    var $table = $("#table"),
      $rows = $table.find("tbody tr");
    min = min ? min - 1 : 0;
    max = max ? max : $rows.length;
    $rows.hide().slice(min, max).fadeIn();
    return false;
  }

  function driverfound() {
    $("#exampleModal").modal("show");
    $(".imgLoading").attr("src", "Image/found.gif");
    $(".pSearching").text("Driver Found!");
    $(".pSearchsub").text(
      "Congrats we found a driver, click the button below to check the booking details."
    );
    $(".btn").removeClass("btn--loading");
  }

  useEffect(() => {
    global.config.place.deliver.table_id = Number(
      localStorage.getItem("activeid")
    );
    const listener = {
      message: (message) => {
        setMessage(message.message.status);
        let mes = message;

        if (mes.message.status == "Ongoing") {
          driverfound();
          refresh();
        } else if (mes.message.status == "Arrived to Pick up") {
          refresh();
        } else if (mes.message.status == "Arrived") {
          refresh();
        }
      },
    };
    pubnub.addListener(listener);

    pubnub.subscribe({
      channels: ["booking_channel_" + localStorage.getItem("activeid")],
      withPresence: true,
      includeState: true,
    });
    return () => {
      pubnub.removeListener(listener);
      pubnub.unsubscribeAll();
    };
  }, [message]);

  const date = [{ value: "October", label: "October" }];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgb(28, 30, 33)",
      color: "white",
      border: "none",
      boxShadow: "none",
      borderRadius: "5px",
      width: "115%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    container: (base) => ({
      ...base,
      width: "150px",
    }),
  };

  const customStyles1 = {
    control: (base, state) => ({
      ...base,
      background: "#F3F3F4",
      color: "#424242",
      border: "1px solid gray",
      boxShadow: "none",
      borderRadius: "5px",
      width: "115%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#424242",
    }),
    container: (base) => ({
      ...base,
      width: "150px",
    }),
  };

  useEffect(() => {
    if (localStorage.getItem("saveprof") == 1) {
      successMessage();
      localStorage.removeItem("saveprof");
    }

    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const apiUrllatest =
      "https://staging-api.jgo.com.ph/api/auth/customer-latest-booking";

    axios
      .post(apiUrllatest, { customer_id: AuthService.getId() }, options1)
      .then((result) => {
        try {
          setLatestbook(result.data.data.id);
        } catch (e) {}
      });

    const apiUrl2 =
      "https://staging-api.jgo.com.ph/api/auth/customer_card_details";

    axios.post(apiUrl2, {}, options1).then((result) => {
      setListcard(result.data.user_card_details);
    });

    const apiUrl_view_tickets =
      "https://staging-api.jgo.com.ph/api/client_tickets/user/" +
      AuthService.getId() +
      "/open_tickets";

    axios.get(apiUrl_view_tickets, {}, options1).then((result) => {
      console.log(result.data);
      setListticket(result.data);
    });

    if (sessionStorage.getItem("addpayment") == "1") {
      $(".ulDashboard>li").removeClass("activeUl");
      $(".conPayment").fadeIn(250);
      $(".conProf").hide();
      $(".conBook").hide();
      $(".conSettings").hide();
      $(".liPayment").addClass("activeUl");
      sessionStorage.removeItem("addpayment");
    }

    var theme = JSON.parse(localStorage.getItem("theme"));
    setIsToggled(theme);
    coordinatebook.length = 0;
    global.config.place.deliver.table_id = "";
    if (AuthService.getFullname()) {
      setFull_name(AuthService.getFullname());
      $(".conProfile").show();
    } else {
      router.push("/");
    }

    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        "Content-Length": "X-Actual-Content-Length",
      },
    };

    const apiUrl =
      "https://staging-api.jgo.com.ph/api/auth/ctransaction-history";
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        setTabledata(result.data.data);

        if (result.data.data) {
          result.data.data
            .filter(
              (event) => event.id === Number(localStorage.getItem("activeid"))
            )
            .map((data) =>
              data.status == "Looking for Driver"
                ? $("#exampleModal").modal("show")
                : null
            );
        }
        if ($("#table tbody tr").length > 5) {
          $(".btnShowmore").show();
        }
        show(0, 5);
        tablemap = result.data.data;
        setCount(result.data.data.length);
        $(".Box").hide();
        if (result.data.data.length === 0) {
          $(".pNo").show();
        }

        const active = result.data.data.filter(
          (obj) =>
            obj.status == "Looking for Driver" ||
            obj.status == "Driver found" ||
            obj.status == "Arrived at Pick Up"
        );
        setACtivecount(active.length);
      })
      .catch((err) => {
        console.log(err);
      });

    const apiUrl1 = "https://staging-api.jgo.com.ph/api/auth/customer-profile";
    axios
      .post(apiUrl1, { id: AuthService.getId() }, options)
      .then((result) => {
        console.log(result.data.data);
        setTableprofile(result.data.data);
        setFname(result.data.data.fname);
        setMname(result.data.data.mname);
        setLname(result.data.data.lname);
        setEmailprof(result.data.data.email);
        setAddress(result.data.data.address);
        setCountry(result.data.data.country);
        setMobile(result.data.data.mobile_no);
        setState(result.data.data.state);
        setZip(result.data.data.zip);
        setCity(result.data.data.city);
        setWallet(result.data.data.get_jgo_wallet.balance);
        setProfle(
          "https://jgo-storage.s3.ap-southeast-1.amazonaws.com/" +
            result.data.data.profile_pic
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function showmoretable() {
    show(0, $("#table tbody tr").length + 5);
  }

  function logout() {
    AuthService.logout();
    router.push("/");
  }

  function profile() {
    $(".conProf").fadeIn(250);
    $(".conBook").hide();
    $(".conSettings").hide();
    $(".conPayment").hide();
    $(".conSupport").hide();
  }

  function booking() {
    $(".conBook").fadeIn(250);
    $(".conProf").hide();
    $(".conSettings").hide();
    $(".conPayment").hide();
    $(".conSupport").hide();
  }

  function settings() {
    $(".conSettings").fadeIn(250);
    $(".conProf").hide();
    $(".conBook").hide();
    $(".conPayment").hide();
    $(".conSupport").hide();
  }

  function payment() {
    $(".conPayment").fadeIn(250);
    $(".conProf").hide();
    $(".conBook").hide();
    $(".conSettings").hide();
    $(".conSupport").hide();
  }

  function support() {
    $(".conSupport").fadeIn(250);
    $(".conProf").hide();
    $(".conBook").hide();
    $(".conSettings").hide();
    $(".conPayment").hide();
  }

  function doubleclickTable() {
    $("#table").on("click", "tr", function (e) {
      window.open("/tracking/" + $(this).children().closest("td").html());
    });
  }

  function hovertable() {
    $("tr")
      .not(":first")
      .hover(
        function () {
          $("td", this).css("color", "#EDC728 ");
        },
        function () {
          if (localStorage.getItem("theme_status") === "light") {
            $("td", this).css("color", "#424242");
          } else {
            $("td", this).css("color", "");
          }
        }
      );
  }

  function changeVerify(e) {
    setVerify(e.target.value);
  }

  function getcardToken(e) {
    console.log($(e.currentTarget).find(".p9Sub").text());
    listcard
      .filter(
        (event) =>
          event.maskedCardNumber === $(e.currentTarget).find(".pMasked").text()
      )
      .map((data) => setClientToken(data.client_token));

    if ($(e.currentTarget).find(".pVerified").text() == "Verified") {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #00C853" }}
            >
              <div className="col-lg-2">
                <img src="Image/success.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Verified</p>
                <p className="pErrorSub">Your card is already verified.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $("#modalVerify").modal("toggle");
    }
  }

  function getVerify(e) {
    console.log(clienttoken);
    console.log(verify);
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/verifyToken";

    let formdata = new FormData();
    formdata.set("clientToken", clienttoken);
    formdata.set("amount", Number(verify));
    axios
      .post(apiUrl, { client_token: clienttoken, amount: verify }, options)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlestatuschange(value) {
    var value = value.value.toLowerCase();
    setStatus(value.label);
    $("#table > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

      if ($("#table> tbody > :visible").length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    });
    $("tbody").each(function () {
      var list = $(this).children("tr");
      $(this).html(list.get());
    });
  }

  function handleChangeemail(e) {
    setEmail(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function handleChangeoldpass(e) {
    setOldpass(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function handleChangeconfirmoldpass(e) {
    setConfirmoldpass(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function handleChangenewpass(e) {
    setNewpass(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function btnChangepass() {
    if (email == "") {
      $(".txtEmailchange").css("border", "1px solid #c62828");
    }

    if (oldpass == "") {
      $(".txtOldpass").css("border", "1px solid  #c62828");
    }

    if (confirmoldpass == "") {
      $(".txtConfirmoldpass").css("border", "1px solid  #c62828");
    }

    if (newpass == "") {
      $(".txtNewpass").css("border", "1px solid #c62828");
    } else {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          Authorization: "Bearer " + AuthService.getToken(),
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };

      let formdata = new FormData();
      formdata.set("id", AuthService.getId());
      formdata.set("email", email);
      formdata.set("token", AuthService.getToken());
      formdata.set("password", oldpass);
      formdata.set("password_confirmation", confirmoldpass);
      formdata.set("new_password", newpass);

      const apiUrl = "https://staging-api.jgo.com.ph/api/auth/change-password";

      axios
        .post(apiUrl, formdata, options)
        .then((result) => {
          console.log(result);
          $("#modalChangepass").modal("toggle");
          AuthService.logout();
          router.push("/");
        })
        .catch((err) => {
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #e53935" }}
                >
                  <div className="col-lg-2">
                    <img
                      src="Image/warning.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div className="col-lg-10" style={{ textAlign: "left" }}>
                    <p className="pError">Error</p>
                    <p className="pErrorSub">
                      The input credentials is invalid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    }
  }

  const statusColor = (value) => {
    switch (value) {
      case "in transit":
        return "intransit";
      case "Arrived":
        return "arrived";
      case "Complete":
        return "complete";
      case "Arrived at Pick Up":
        return "arrivedpickup";
      case "Driver found":
        return "driverfound";
      case "Looking for Driver":
        return "looking1";
      case "Canceled":
        return "cancel";
    }
  };

  function fname_change(e) {
    setFname(e.target.value);
  }

  function mname_change(e) {
    setMname(e.target.value);
  }

  function lname_change(e) {
    setLname(e.target.value);
  }

  function email_change(e) {
    setEmailprof(e.target.value);
  }

  function mobile_change(e) {
    setMobile(e.target.value);
  }

  function address_change(e) {
    setAddress(e.target.value);
  }

  function city_change(e) {
    setCity(e.target.value);
  }

  function state_change(e) {
    setState(e.target.value);
  }

  function country_change(e) {
    setCountry(e.target.value);
  }

  function zip_change(e) {
    setZip(e.target.value);
  }

  function booking_change(e) {
    setBookingid(e.target.value);
  }

  function description_change(e) {
    setDescription(e.target.value);
  }

  function saveprof() {
    $(".btnSave").addClass("btn--loading");
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    let formdata = new FormData();

    formdata.append("id", AuthService.getId());
    formdata.append("fname", fname);
    formdata.append("lname", lname);
    formdata.append("mname", mname);
    if (newimage) {
      formdata.append("profile_pic", newimage);
    } else {
    }
    formdata.append("email", emailprof);
    formdata.append("mobile_no", mobile);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("state", state1);
    formdata.append("country", "Philippines");
    formdata.append("zip", zip);
    formdata.append("_method", "PATCH");

    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/customers/3";
    axios
      .post(apiUrl, formdata, options)
      .then((result) => {
        console.log(result);
        $(".btnSave").removeClass("btn--loading");
        localStorage.setItem("saveprof", "1");
        console.log(newimage);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
        $(".btnSave").removeClass("btn--loading");
      });
  }

  function saveprof1() {
    if (
      !address ||
      !fname ||
      !lname ||
      !mname ||
      !zip ||
      !country ||
      !state1 ||
      !city ||
      !mobile ||
      !emailprof ||
      !zip
    ) {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #e53935" }}
            >
              <div className="col-lg-2">
                <img src="Image/warning.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Error</p>
                <p className="pErrorSub">Fill up all the missing fields.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $(".btConfirmTopup").addClass("btn--loading");
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          Authorization: "Bearer " + AuthService.getToken(),
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };

      const data = {
        id: AuthService.getId(),
        fname: fname,
        mname: mname,
        lname: lname,
        email: emailprof,
        mobile_no: mobile,
        address: address,
        city: city,
        state: state1,
        country: country,
        zip: zip,
      };

      const apiUrl = "https://staging-api.jgo.com.ph/api/auth/customers/3";
      axios
        .put(apiUrl, data, options)
        .then((result) => {
          console.log(result);
          $("#modalForm").modal("toggle");
          $(".btConfirmTopup").removeClass("btn--loading");
          $("#modalTopup").modal("toggle");
        })
        .catch((err) => {
          console.log(err);
          $(".btnSave").removeClass("btn--loading");
        });
    }
  }

  function addCard() {
    $(".btnAddcard").addClass("btn--loading");
    const options = {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };

    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/enrollToken";
    axios
      .post(apiUrl, { platform: "web" }, options)
      .then((result) => {
        console.log(result);
        window.open(result.data.data.redirectUrl, "_blank");
        $(".btnAddcard").removeClass("btn--loading");
      })
      .catch((err) => {
        $(".btnAddcard").removeClass("btn--loading");
        console.log(err);
      });
  }

  function goTopup() {
    $(".btnAddcard").addClass("btn--loading");
    const options = {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };
    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/topUpJGOWallet";
    let formdata = new FormData();
    formdata.set("fname", fname);
    formdata.set("mname", mname);
    formdata.set("lname", lname);
    formdata.set("platform", "web");
    formdata.set("email", emailprof);
    formdata.set("state", state1);
    formdata.set("city", city);
    formdata.set("address1", address);
    formdata.set("country", country);
    formdata.set("mobile_no", mobile);
    formdata.set("lname", lname);
    formdata.set("zip", zip);
    formdata.set("amount", topupamount);
    axios
      .post(apiUrl, formdata, options)
      .then((result) => {
        console.log(result.data);
        $("#paymentrequest").val(result.data.encoded_xml);
        document.getElementById("paygate_frm").submit();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function topup() {
    if (
      !address ||
      !fname ||
      !lname ||
      !mname ||
      !zip ||
      !country ||
      !state1 ||
      !city ||
      !mobile ||
      !emailprof ||
      !zip
    ) {
      $("#modalForm").modal("toggle");
    } else {
      $("#modalTopup").modal("toggle");
    }
  }

  function set300(e) {
    setTopup("300");
    $(".divPricewallet").css("border-left", "2px solid lightgray");
    $(e.currentTarget).css("border-left", "2px solid #3BCD67");
    $(".spanCheck").css("color", "gray");
    $(e.currentTarget).find(".spanCheck").css("color", "#3BCD67");
  }
  function set600(e) {
    setTopup("600");
    $(".divPricewallet").css("border-left", "2px solid lightgray");
    $(e.currentTarget).css("border-left", "2px solid #3BCD67");
    $(".spanCheck").css("color", "gray");
    $(e.currentTarget).find(".spanCheck").css("color", "#3BCD67");
  }
  function set900(e) {
    setTopup("900");
    $(".divPricewallet").css("border-left", "2px solid lightgray");
    $(e.currentTarget).css("border-left", "2px solid #3BCD67");
    $(".spanCheck").css("color", "gray");
    $(e.currentTarget).find(".spanCheck").css("color", "#3BCD67");
  }

  function addissue() {
    const options = {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };
    const random_num = Math.floor(Math.random() * 90000) + 10000;
    const apiUrl = "https://staging-api.jgo.com.ph/api/client_tickets";
    let formdata = new FormData();
    formdata.set("user_id", AuthService.getId());
    formdata.set("channel_id", "Channel-customersupport-" + random_num);
    formdata.set("reference_id", random_num);
    formdata.set("details", description);
    formdata.set("booking_id", bookingid);
    axios
      .post(apiUrl, formdata, options)
      .then((result) => {
        swal(
          <div style={{ width: "450px", padding: "10px" }}>
            <div className="container">
              <div
                className="row align-items-center"
                style={{ borderLeft: "3px solid #00C853" }}
              >
                <div className="col-lg-2">
                  <img src="Image/success.png" style={{ width: "32px" }}></img>
                </div>
                <div className="col-lg-10" style={{ textAlign: "left" }}>
                  <p className="pError">Success</p>
                  <p className="pErrorSub">
                    Your ticket is successfully created.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        const options1 = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            Authorization: "Bearer " + AuthService.getToken(),
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
          },
        };

        const apiUrl_view_tickets =
          "https://staging-api.jgo.com.ph/api/client_tickets/user/" +
          AuthService.getId() +
          "/open_tickets";

        axios.get(apiUrl_view_tickets, {}, options1).then((result) => {
          console.log(result.data);
          setListticket(result.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getChannel(e) {
    var x = $(e.currentTarget).find("td:nth-child(6)").text();
    channel_id = [`${x}`];
  }

  function openchat() {
    $(".divChatbox").show();
    router.push("/profile");
  }

  return (
    <>
      <Header></Header>

      <Componentdidmount></Componentdidmount>
      <div style={{ display: "none" }}>
        <form
          id="paygate_frm"
          action="https://testpti.payserv.net/webpayment/Default.aspx"
          method="POST"
        >
          <input
            type="hidden"
            name="paymentrequest"
            id="paymentrequest"
            value=""
          ></input>
          <input type="submit" id="submitpayment" value="Submit" />
        </form>
      </div>
      <div className="container-fluid conProfile">
        <NextNprogress color="#EDC728" />
        <div className="divChatbox">
          <Chat></Chat>
        </div>
        <div className="divSidebar">
          <div className="divMenuSide">
            <div className="divIcon">
              <ul className="no-bullets">
                <Link href="/main">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img src="Image/home.png" style={{ width: "20px" }}></img>
                      <span>Home</span>
                    </li>
                  </a>
                </Link>
                <Link href="/main">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img
                        src="Image/truck.png"
                        style={{ width: "20px" }}
                      ></img>
                      <span>Deliver</span>
                    </li>
                  </a>
                </Link>
                <Link href="/faq#contact">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img src="Image/call.png" style={{ width: "20px" }}></img>
                      <span>Contact</span>
                    </li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="row rowTop">
          <div className="col-lg-4">
            <Link href="/">
              <img
                src="Image/logo.png"
                className="img-fluid"
                style={{ width: "120px", marginLeft: "40px" }}
              ></img>
            </Link>
          </div>
          <div className="col-lg-4 text-center"></div>
          <div className="col-lg-4">
            <div className="form-inline divUserNav">
              <button className="btnLogout" onClick={logout}>
                Logout
              </button>
              <div className="vl"></div>
              <span className="pFullname">
                {fname} {lname}
              </span>
              <div className="circle">
                <img className="navProf" src={profilepic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conMenu">
        <div className="row">
          <div className="pDashboard">
            <p className="pDashboard">Dashboard</p>
          </div>
          <div className="col-lg-12">
            <ul className="ulDashboard">
              <li onClick={booking} className="activeUl">
                BOOKINGS
              </li>
              <li onClick={profile}>PROFILE</li>
              <li onClick={settings}>SETTINGS</li>
              <li onClick={payment} className="liPayment">
                PAYMENT
              </li>
              <li onClick={support} className="liPayment">
                SUPPORT
              </li>
            </ul>
            <hr className="hrDashboard"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid conBook">
        <div className="row">
          <div className="col-lg-12 form-inline">
            <p className="pTotalBookings">
              {count} Total Bookings
              <span className="pActiveBookings">{activeCount} Active</span>
            </p>
          </div>
          <div className="col-lg-7 form-inline">
            <div style={{ display: "none" }}>
              <Select
                options={date}
                styles={isToggled ? customStyles1 : customStyles}
                placeholder="Select Date"
              />
            </div>
            <div>
              <Select
                options={status}
                styles={isToggled ? customStyles1 : customStyles}
                placeholder="Select status"
                value={statusdropdown}
                onChange={handlestatuschange}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="divInputIcon">
              <input
                type="text"
                className="txtSearch"
                placeholder="Search id"
              ></input>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table
                className="table"
                id="table"
                onDoubleClick={doubleclickTable}
                onMouseOver={hovertable}
              >
                <thead>
                  <tr style={{ backgroundColor: "transparent" }}>
                    <th>Tracking ID</th>
                    <th>Price</th>
                    <th>Pickup Address</th>
                    <th>Drop Location</th>
                  </tr>
                </thead>
                <tbody>
                  {tabledata.map((event, index) => (
                    <tr key={event.id}>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.tracking_id}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.total}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        <span className={statusColor(event.status)}>
                          {event.status}
                        </span>
                        {event.pick_up_address}
                      </td>
                      {event.booking_drop_off_location.map((event) => (
                        <td
                          className={
                            localStorage.getItem("theme_status") == "light"
                              ? "tdlight"
                              : "tddark"
                          }
                          key={event.id}
                        >
                          <span className={statusColor(event.status)}>
                            {event.status}
                          </span>
                          {event.drop_off_address}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="Box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="text-center">
              <button
                className="btnShowmore"
                onClick={showmoretable}
                style={{ display: "none" }}
              >
                Show more
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div>
              <p className="pNo">NO RESULT FOUND</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container conProf">
        <div className="row align-items-center">
          <div
            className="col-lg-12 text-center"
            style={{ position: "relative" }}
          >
            <div className="divProfilepic">
              <img
                src={profilepic}
                className="img-fluid imgProfileDash mx-auto d-flex"
                onClick={onBtnClick}
              ></img>

              <input
                onChange={(e) => handleFile(e)}
                ref={inputFileRef}
                id="file-upload"
                type="file"
                accept=".jpg, .png, .jpeg|image"
                style={{ display: "none" }}
              />
            </div>
            <img
              src="Image/camera.png"
              className="img-fluid imgChangeprof"
              onClick={onBtnClick}
            ></img>
            <p className="spanFull">
              {fname} {mname} {lname}
              <br />
              <span className="spanAdd">{mobile}</span>
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "0px" }}>
          <div className="col-lg-6 colProf">
            <div className="divProf">
              <p className="pTxtDriver pFname">First Name</p>
              <input
                type="text"
                className="txtDriver txtFname txtprof"
                value={fname}
                onChange={fname_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6 colProf">
            <div className="divProf">
              <p className="pTxtDriver">Middle Name</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={mname}
                onChange={mname_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver pLname">Last Name</p>
              <input
                type="text"
                className="txtDriver txtLname txtprof"
                value={lname}
                onChange={lname_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver pEmail">Email</p>
              <input
                type="text"
                className="txtDriver txtEmail txtprof"
                value={emailprof}
                onChange={email_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Mobile Number</p>
              <input
                type="text"
                className="txtDriver txtMobile txtprof"
                value={mobile}
                onChange={mobile_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Address</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={address}
                onChange={address_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Province</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={state1}
                onChange={state_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">City/Municipality</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={city}
                onChange={city_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Country</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={country}
                onChange={country_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Zip Code</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={zip}
                onChange={zip_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <a className="btn btnSave" onClick={saveprof}>
              Save
              <span style={{ marginLeft: "60px" }}>
                <b></b>
                <b></b>
                <b></b>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid conSettings">
        <div className="row">
          <div className="col-lg-12">
            <p className="pSettingsTitle">General Settings</p>
            <div>
              <input type="checkbox" id="switch" />
              <label for="switch">Toggle</label>
              <span className="spanCheckSettings">
                Enable light mode
                <span style={{ fontSize: "0.9rem" }}>
                  ( Restart the page to take effect )
                </span>
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <input type="checkbox" id="switch1" />
              <label for="switch1">Toggle</label>
              <span className="spanCheckSettings">Enable toolips</span>
            </div>
            <p className="pSettingsTitle" style={{ marginTop: "20px" }}>
              Password
            </p>
            <button
              className="btnChangepassword"
              data-toggle="modal"
              data-target="#modalChangepass"
            >
              CHANGE PASSWORD
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid conPayment">
        <div className="row">
          <div className="col-lg-12">
            <p className="pSettingsTitle">Payment Methods</p>
          </div>
          <div className="col-lg-12 form-inline">
            <div className="divCardList">
              <img
                src="Image/logo.png"
                className="img-fluid imgJgowallet"
              ></img>
              <div className="divCardDetails">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <p className="p10">Points</p>
                    <p className="p10Sub">{walletbalance}</p>
                  </div>
                  <div className="col-lg-6">
                    <button className="btnTopup" onClick={topup}>
                      Top up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {listcard
              .filter((event) => event.maskedCardNumber !== null)
              .map((event) => (
                <div className="divCardList" onClick={getcardToken}>
                  <img src="Image/chip.png" className="img-fluid imgChip"></img>
                  <img
                    src="Image/mastertype.png"
                    className="img-fluid imgCardType"
                  ></img>
                  <div className="divCardDetails">
                    <div className="row">
                      <div className="col-lg-7">
                        <p className="p9">Card number</p>
                        <p className="p9Sub pMasked">
                          {event.maskedCardNumber}
                        </p>
                      </div>
                      <div className="col-lg-5">
                        <p className="p9 text-left">Status</p>
                        <p className="p9Sub pVerified text-left ">
                          {event.cardStatus == 1 ? "Not verified" : "Verified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div
              className="divCardPayment"
              data-toggle="modal"
              data-target="#modalReminder"
            >
              <p className="pAddCard">&#43;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid conSupport">
        <div className="row">
          <div className="col-lg-12">
            <button
              className="btnReport"
              data-toggle="modal"
              data-target="#modalReport"
            >
              + Report issue
            </button>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table
                className="table"
                id="table"
                onDoubleClick={doubleclickTable}
                onMouseOver={hovertable}
              >
                <thead>
                  <tr style={{ backgroundColor: "transparent" }}>
                    <th>Booking Id</th>
                    <th>Ticket Id</th>
                    <th>Created Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listtickets.map((event, index) => (
                    <tr
                      key={event.id}
                      className="trSupport"
                      onClick={getChannel}
                    >
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.booking_id}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.ticket_id}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        }).format(Date.parse(event.created_at))}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.status}
                      </td>
                      <td>
                        <button className="btnOpen" onClick={openchat}>
                          Open chat
                        </button>
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.channel_id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalChangepass"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalChangepass">
              <p
                className="pModalTitle pchangepassword"
                style={{ marginBottom: "5px" }}
              >
                Change Password
              </p>
              <p className="pModalTitleSub pchangesub">
                Your new password must be different from previous used
                passwords.You account will be logout if its successfull.
              </p>
              <hr
                style={{
                  backgroundColor: "#414141",
                  boder: "1px solid #414141",
                }}
              ></hr>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtEmailchange txtchange"
                    value={email}
                    placeholder="Enter email address"
                    onChange={handleChangeemail}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtOldpass txtchange"
                    value={oldpass}
                    placeholder="Enter old password"
                    onChange={handleChangeoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtOldpass txtConfirmoldpass txtchange"
                    value={confirmoldpass}
                    placeholder="Enter old confirm password"
                    onChange={handleChangeconfirmoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    value={newpass}
                    className="txtNewpass txtchange"
                    placeholder="Enter new password"
                    onChange={handleChangenewpass}
                  ></input>
                </div>
                <div className="col-lg-12 text-center">
                  <button className="btnChangepass" onClick={btnChangepass}>
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body text-center modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="mx-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "150px",
                      }}
                    >
                      <img
                        src="Image/searching.gif"
                        className="img-fluid mx-auto d-flex imgLoading"
                      ></img>
                    </div>
                    <p className="pSearching">Searching for driver</p>
                    <p className="pSearchsub">
                      Thank your for using jgo, please wait while we search for
                      your driver.{" "}
                    </p>
                    <a
                      className="btn btnCheck btn--loading"
                      onClick={mapbooking}
                    >
                      Check booking details
                      <span style={{ marginLeft: "80px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                    <p className="pCancelbook" onClick={cancelbook}>
                      Cancel Booking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalVerify"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalVerify">Reminder</p>
                    <p className="pModalTitleSub">
                      Please enter the exact amount that we deducted in your
                      account.
                    </p>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      value={verify}
                      className="txtVerify"
                      onChange={changeVerify}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <a className="btn btnVerify" onClick={getVerify}>
                      Verify
                      <span style={{ marginLeft: "40px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalTopup"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalTop">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalVerify">Jgo Wallet - Top up</p>
                    <p className="pModalTitleSub">
                      Choose between multipe options and select confirm.
                    </p>
                  </div>

                  <div className="col-lg-12">
                    <div className="divPricewallet" onClick={set300}>
                      <div className="row align-items-center">
                        <div className="col-lg-2">
                          <span className="spanCheck">&#10003;</span>
                        </div>
                        <div className="col-lg-7">
                          <p className="pCod">JGO Wallet</p>
                          <p className="pCodSub">300 points will be added.</p>
                        </div>
                        <div className="col-lg-3">
                          <p className="pWalletModal">300</p>
                        </div>
                      </div>
                    </div>
                    <div className="divPricewallet" onClick={set600}>
                      <div className="row align-items-center">
                        <div className="col-lg-2">
                          <span className="spanCheck">&#10003;</span>
                        </div>
                        <div className="col-lg-7">
                          <p className="pCod">JGO Wallet</p>
                          <p className="pCodSub">600 points will be added.</p>
                        </div>
                        <div className="col-lg-3">
                          <p className="pWalletModal">600</p>
                        </div>
                      </div>
                    </div>
                    <div className="divPricewallet" onClick={set900}>
                      <div className="row align-items-center">
                        <div className="col-lg-2">
                          <span className="spanCheck">&#10003;</span>
                        </div>
                        <div className="col-lg-7">
                          <p className="pCod">JGO Wallet</p>
                          <p className="pCodSub">900 points will be added.</p>
                        </div>
                        <div className="col-lg-3">
                          <p className="pWalletModal">900</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <a
                      className="btn btnAddcard  mx-auto d-flex"
                      onClick={goTopup}
                      style={{ marginTop: "10px" }}
                    >
                      Add card
                      <span style={{ marginLeft: "10px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalReminder"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalVerify">Reminder</p>
                    <p className="pModalTitleSub">
                      Once you input your card details, our payment system will
                      deduct P1.00 - P5.00 for verification purposes. You will
                      then be asked to check how much was debited from your
                      account to be inputted in the text box below. Upon
                      completion of this process the amounted deducted will be
                      debited back to your account and your credit card will be
                      VERIFIED.
                    </p>
                  </div>

                  <div className="col-lg-5">
                    <a
                      className="btn btnVerify "
                      onClick={addCard}
                      style={{ marginTop: "5px" }}
                    >
                      Add card
                      <span style={{ marginLeft: "40px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalForm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalTitle">Jgo - Topup form</p>
                    <p className="pModalTitleSub">
                      Please fill up all the missing credentials.
                    </p>
                    <hr
                      style={{
                        backgroundColor: "#414141",
                        boder: "1px solid #414141",
                      }}
                    ></hr>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">First Name</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={fname}
                      onChange={fname_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Middle Name</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={mname}
                      onChange={mname_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Last Name</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={lname}
                      onChange={lname_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Email</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={emailprof}
                      onChange={email_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Mobile</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={mobile}
                      onChange={mobile_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Country</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={country}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Address</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={address}
                      onChange={address_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">City</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={city}
                      onChange={city_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">State</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={state1}
                      onChange={state_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Zip</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={zip}
                      onChange={zip_change}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-lg-12 mx-auto d-flex"
                    style={{ marginTop: "10px" }}
                  >
                    <a className="btn btnConfirmTopup" onClick={saveprof1}>
                      Confirm
                      <span style={{ marginLeft: "60px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalReport"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body text-center modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalVerify text-left">Report a issue</p>
                    <p className="pModalTitleSub text-left">
                      Please specify the exact details of your issue.
                    </p>
                    <p className="pTxtDriver pReport">Booking ID</p>
                    <input
                      type="text"
                      className="txtDriver txtFname"
                      value={bookingid}
                      onChange={booking_change}
                    ></input>
                    <p className="pTxtDriver pReport">Description</p>
                    <textarea
                      className="txtDriver"
                      value={description}
                      onChange={description_change}
                      rows={4}
                      cols={50}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <a
                      className="btn btnSendissue"
                      onClick={addissue}
                      style={{ marginTop: "5px" }}
                    >
                      Report issue
                      <span style={{ marginLeft: "40px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
