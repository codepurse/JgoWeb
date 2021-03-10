import React, {
  Component,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import getApi from "../services/api.service";
import { useRouter } from "next/router";
import axios from "axios";
import "../component/map/config";
import Select from "react-select";
import swal from "@sweetalert/with-react";
import NextNprogress from "nextjs-progressbar";
import Componentdidmount from "../component/componentdidmount";
import Chat from "../component/chat";
import Link from "next/link";
import PubNub from "pubnub";
import ReactPaginate from "react-paginate";
import { PubNubProvider, usePubNub } from "pubnub-react";

export default function profile() {
  var potareason = "";
  const router = useRouter();
  const refreshPage = refreshcard;
  var cancel;
  const [full_name, setFull_name] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);
  const [tableproile, setTableprofile] = React.useState([]);
  const [tableid, settableid] = React.useState("1");
  const [count, setCount] = React.useState("");
  const [activeCount, setACtivecount] = React.useState("");
  const [pages, setPages] = React.useState("");
  const [statusdropdown, setStatus] = React.useState("");
  const [usertype, setUsertype] = React.useState("");
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
  const [latestbooktrack, setLatestbooktrack] = React.useState("");
  const [lateststatus, setLateststatus] = React.useState("");

  var pageactive;

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

  const [pagenow, setPagenow]  = React.useState("");
  const [forcepage, setForcepage] = React.useState(0);

  const [listcard, setListcard] = React.useState([]);
  const [verify, setVerify] = React.useState("");
  const [clienttoken, setClientToken] = React.useState("");
  const [bookingid, setBookingid] = React.useState("");
  const [titleissue, setTitleissue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [listtickets, setListticket] = React.useState([]);
  const inputFileRef = useRef(null);
  const [cleartimer, setCleartimer] = React.useState(false);
  const [canceluser, setCanceluser] = React.useState(false);

  const [ipdate, setIpdate] = React.useState(false);
  const [reasoncancel, setReasoncancel] = React.useState("");
  const [cancelreason, setCancelreason] = React.useState("");
  const [othercancel, setOthercancel] = React.useState("");
  var holdclear = false;

  const [driverprof, setDriverprof] = React.useState("");
  const [drivername, setDrivername] = React.useState("");
  const [drivernumber, setDrivernumber] = React.useState("");
  const [bookingdate, setBookingdate] = React.useState("");
  const [viewPrice, setViewprice] = React.useState("");
  const [viewbookingdata, setViewbookingdata] = React.useState([]);
  const [viewpickupstatus, setViewpickupstatus] = React.useState("");
  const [viewPickuploc, setViewpickuploc] = React.useState("");
  const [viewPickupname, setViewpickupname] = React.useState("");

  const [bookingidtable, setBookingidtable] = React.useState("");
  var canceltableid;
  var drivertableid;
  var rebooktableid;

  const [tableactivebooking, setTableactivebooking] = React.useState([]);
  const [tablescheduled, setTablesheduled] = React.useState([]);

  function handleFile(e) {
    const reader = new FileReader();

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
    { value: "a", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Scheduled", label: "Scheduled" },
  ];

  const pubnub = new PubNub({
    subscribeKey: "sub-c-958ab632-1d8d-11eb-8a07-eaf684f78515",
    publishKey: "pub-c-701ebbe8-c393-43d5-a389-9ef5391a8fe9",
  });

  function mapbooking(e) {
    if ($(".btnCheck").hasClass("btn--loading")) {
      return false;
    } else {
      $("#exampleModal").modal("hide");
      window.open("/tracking/" + latestbooktrack);
    }
  }

  

  useEffect(() => {
   startTimer();
   
    $("#__next ").css("background-color", "#212427");
  }, []);

  var myTimer = null;

  function startTimer() {
    window.intervalrefresh = setInterval(() => {
     
      refresh();
    
    }, 10000);
  }

  useEffect(() => {
    if (localStorage.getItem("theme") == "true") {
      $(".pagination > li").attr("style", "color: #212121 !important");
      $(".pagination > li > a").attr("style", "color: #212121 !important");
    }
  }, [pages]);

  useEffect(() => {
    if (localStorage.getItem("theme") == "true") {
      $(".pNoaction").attr(
        "style",
        "color: #212121 !important;font-weight: bold"
      );
    }
  }, [tabledata]);

  useEffect(() => {
    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrlall = appglobal.api.base_api + appglobal.api.all_booking;
    const apiUrlscheduled =
      appglobal.api.base_api + appglobal.api.scheduled_booking;
    axios
      .post(apiUrlall, { customer_id: AuthService.getId() }, options1)
      .then((result) => {
        console.log(result.data.count);
        setTableactivebooking(result.data.data.reverse());
        console.log("success all booking");
        setACtivecount(result.data.count)
      })
      .catch((err) => {
        console.log(err);
        console.log("pota error");
      });
    axios
      .post(apiUrlscheduled, { customer_id: AuthService.getId() }, options1)
      .then((result) => {
        setTablesheduled(result.data.data);
        console.log(result);
        console.log("success scheduled");
      })
      .catch((err) => {
        console.log(err);
        console.log("pota error scheduled");
      });
  }, []);

  function gotoTrack(e) {
    var trackid = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")

      .children()
      .closest("td:nth-child(4)")
      .html();
    tabledata
      .filter((event) => event.tracking_id == trackid)
      .map((number) => {
        if (
          number.status == "Canceled" ||
          number.status == "Complete" ||
          number.status == "On hold" ||
          number.status == "Looking for Driver" ||
          number.status == "Scheduled"
        ) {
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
                    <p className="pErrorSub">This booking cannot be track.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          window.open(
            "/tracking/" +
              $(e.currentTarget)
                .parent("div")
                .parent("td")
                .parent("tr")
                .children()
                .closest("td:nth-child(4)")
                .html(),
            "_blank"
          );
        }
      });
  }

  function trylang() {
  
  }

  function reason1() {
    console.log("tagnian ");
    setCancelreason("Wrong input address");
    potareason = "Wrong input address";
  }

  function reason2() {
    setCancelreason("It's too expensive");
    potareason = "It's too expensive";
  }

  function reason3() {
    setCancelreason("Can't find a driver");
    potareason = "Can't find a driver";
  }

  function reason4() {
    potareason = "Other";
  }

  function changeCancel(e) {
    potareason = e.target.value;
  }

  function btnNocancel() {
    swal.close();
    $("#exampleModal").modal("hide");
    $("#modalRebook").modal("hide");
    $(".modal-backdrop").hide();

 
  }

  function consoleid() {
    console.log(bookingidtable);
  }

  function opencancelBooking(e) {
    
    var addresstable = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(5)")
      .html();


    var statustable = $(e.currentTarget)
    .parent("div")
    .parent("td")
    .parent("tr")
    .children()
    .closest("td:nth-child(6)")
    .html();


      var now = moment(new Date()); //todays date
      var end = moment(addresstable); // another date
      var duration = now.diff(end,"seconds")
     


    if (duration > 30  && statustable == "Driver found") {
      console.log(duration)
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
                <p className="pErrorSub">This booking cannot be cancel. Please contact our customer support</p>
              </div>
            </div>
          </div>
        </div>
      );
    
    } else {
      console.log(duration);
      console.log(statustable);
      var trackid = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(2)")
      .html();
      var driverid = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(3)")
      .html();
    setBookingidtable(trackid);
    canceltableid = trackid;
    drivertableid = driverid;
    console.log(trackid);
    $("#exampleModal").modal("hide");
    $("#modalRebook").modal("hide");
    $(".modal-backdrop").hide();
    swal(
      <div className="divCancel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-left">
              <p className="pCancelheader">Cancel Booking</p>
              <p className="pCancelsub">
                Before you cancel, please let us know the reason
              </p>
            </div>
            <div className="col-lg-12 text-left">
              <p className="pCancelsub" style={{ marginBottom: "8px" }}>
                Select reason
              </p>

              <Select
                options={date}
                styles={cancel_white}
                placeholder="Select.."
                onChange={handlechangeCancel}
              />

              <textarea
                className="txtDriver txtAreacancel"
                onChange={changeCancel}
                rows={3}
                cols={30}
                style={{ marginTop: "10px", display: "none", color: "black" }}
              ></textarea>
              <p className="pSpecify">Please specify your reason.</p>
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <button className="btnYes" onClick={cancelbook}>
                Yes
              </button>
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <button className="btnNo" onClick={btnNocancel}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    }

   
  }

  function cancelBooking(e) {
    var trackid = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(2)")
      .html();
    tabledata
      .filter((event) => event.tracking_id == trackid)
      .map((number) => {
        if (number.status == "Canceled") {
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
                      This booking is already canceled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (number.status == "Driver found") {
          tabledata
            .filter((event) => event.tracking_id == trackid)
            .map((number) => {
              var now = moment(new Date()); //todays date
              var end = moment(number.updated_at); // another date
              var duration = moment.duration(now.diff(end));
              var min = Math.floor(duration.asMinutes());

              if (min < 1) {
                cancelbook();
                refresh();
              } else {
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
                        <div
                          className="col-lg-10"
                          style={{ textAlign: "left" }}
                        >
                          <p className="pError">Error</p>
                          <p className="pErrorSub">
                            This booking cannot be canceled.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            });
        } else if (
          number.status == "Arrived at Pick Up" ||
          number.status == "Complete"
        ) {
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
                      This booking cannot be canceled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
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
          const apiUrl = appglobal.api.base_api + appglobal.api.cancel_booking;

          axios
            .post(
              apiUrl,
              {
                booking_id: number.booking_drop_off_location[0].booking_id,
                driver_id: number.driver_id,
              },
              options
            )
            .then((result) => {
              console.log(result);
              $("#exampleModal").modal("hide");
              $(".modal-backdrop").hide();
              clearInterval(window.interval);
              swal(
                <div style={{ width: "450px", padding: "10px" }}>
                  <div className="container">
                    <div
                      className="row align-items-center"
                      style={{ borderLeft: "3px solid #00C853" }}
                    >
                      <div className="col-lg-2">
                        <img
                          src="Image/success.png"
                          style={{ width: "32px" }}
                        ></img>
                      </div>
                      <div className="col-lg-10" style={{ textAlign: "left" }}>
                        <p className="pError">Verified</p>
                        <p className="pErrorSub">
                          Your booking is successfully cancelled.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
              refresh();
            });
        }
      });
  }

  function searchTable(e) {
    var value = $(e.currentTarget).val().toLowerCase();
    $("#table> tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      if ($("#table> tbody > :visible").length == 0) {
        $(".pNo").show();
        if (tabledata) {
          $(".reactPaginate").hide();
        }
      } else {
        $(".pNo").hide();
      }
    });
  }

  function openCancelbook() {
    swal(
      <div style={{ width: "450px", padding: "20px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12" style={{ textAlign: "left" }}>
              <p className="pError">Error</p>
              <p className="pErrorSub text-center">
                Are you sure you want to cancel your booking?
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <button className="btnYes" onClick={cancelbook}>
                Yes
              </button>
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <button className="btnNo" onClick={(e) => swal.close()}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function cancelbook() {
    if (potareason) {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          Authorization: "Bearer " + AuthService.getToken(),
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      const apiUrl = appglobal.api.base_api + appglobal.api.cancel_booking;

      axios
        .post(
          apiUrl,
          {
            booking_id: canceltableid ? canceltableid : latestbook,
            who_cancel: "Customer",
            driver_id: drivertableid,
            reason_for_cancel: potareason,
          },
          options
        )
        .then((result) => {
          console.log(result.response);
          try {
            if (result.response.status == 500) {
              swal(
                <div style={{ width: "450px", padding: "10px" }}>
                  <div className="container">
                    <div
                      className="row align-items-center"
                      style={{ borderLeft: "3px solid #c62828" }}
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
                          Someting went wrong. PLease try again later or you may
                          contact our customer support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          } catch (e) {
            
            refresh();
            setCanceluser(true);
            clearInterval(window.interval);
            $("#exampleModal").modal("hide");
            $(".modal-backdrop").hide();
            $("#modalRebook").modal("hide");
            canceltableid = "";
            localStorage.removeItem("latestbookingdate");
            swal(
              <div style={{ width: "450px", padding: "10px" }}>
                <div className="container">
                  <div
                    className="row align-items-center"
                    style={{ borderLeft: "3px solid #00C853" }}
                  >
                    <div className="col-lg-2">
                      <img
                        src="Image/success.png"
                        style={{ width: "32px" }}
                      ></img>
                    </div>
                    <div className="col-lg-10" style={{ textAlign: "left" }}>
                      <p className="pError">Verified</p>
                      <p className="pErrorSub">
                        Your booking is successfully cancelled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
        .catch((err) => {
          console.log(err);
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #c62828" }}
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
                      Someting went wrong. PLease try again later or you may
                      contact our customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    } else {
      console.log(cancelreason);
      $(".pSpecify").show();
    }
    drivertableid = "";
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
    var countactive;
    var countscheduled;
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl = appglobal.api.base_api + appglobal.api.transaction_history;
    const apiUrlscheduled =
      appglobal.api.base_api + appglobal.api.scheduled_booking;
      const apiUrlall = appglobal.api.base_api + appglobal.api.all_booking;
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        setTabledata(result.data.data);
        console.log(result.data.data[0].status);
        setLateststatus(result.data.data[0].status);
        tablemap = result.data.data;
        setCount(result.data.meta.total);
        if (result.data.data.length === 0) {
          $(".reactPaginate").hide();
          $(".pNo").show();
        }
      
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(apiUrlscheduled, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        setTablesheduled(result.data.data);
        console.log(result);
        console.log("success scheduled");
      })
      .catch((err) => {
        console.log(err);
        console.log("pota error scheduled");
      });
      axios
      .post(apiUrlall, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        console.log(result.data.count);
        setTableactivebooking(result.data.data.reverse());
        console.log("success");
        setACtivecount(result.data.count)
      })
      .catch((err) => {
        console.log(err);
        console.log("pota error");
      });
  }

  function driverfound() {
    $("#exampleModal").modal("show");
    $(".imgLoading").attr("src", "Image/found.gif");
    $(".pSearching").text("Driver Found!");
    $(".pSearchsub").text(
      "Congrats we found a driver, click the button below to check the booking details."
    );
    $(".btn").removeClass("btn--loading");
    $(".pCancelbook").hide();
    setCleartimer(true);
    holdclear = true;
  }

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        AuthService.logout();
        router.push("/");
      }
      return error;
    }
  );

  useEffect(() => {
    global.config.place.deliver.table_id = Number(
      localStorage.getItem("activeid")
    );
    const listener = {
      message: (message) => {
        console.log(message);
        setMessage(message.message.status);
        console.log(message.message.status);
        let mes = message;
        x;

        if (mes.message.status == "Driver found") {
          driverfound();
          clearInterval(window.interval);
          setCleartimer(true);
          refresh();
        } else if (mes.message.status == "Ongoing") {
          clearInterval(window.interval);
          holdclear = true;
          setCleartimer(true);
          refresh();
        } else if (mes.message.status == "Arrived to Pick up") {
          refresh();
        } else if (mes.message.status == "Arrived") {
          refresh();
        } else if (mes.message.status == "Complete All") {
          refresh();
        } else if (mes.message.status == "Cancelled") {
          console.log(canceluser);
          if (canceluser == false) {
            swal(
              <div style={{ width: "450px", padding: "10px" }}>
                <div className="container">
                  <div
                    className="row align-items-center"
                    style={{ borderLeft: "3px solid #FFE900" }}
                  >
                    <div className="col-lg-2">
                      <img
                        src="Image/complain.png"
                        style={{ width: "32px" }}
                      ></img>
                    </div>
                    <div className="col-lg-10" style={{ textAlign: "left" }}>
                      <p className="pError">Warning</p>
                      <p className="pErrorSub">
                        Your booking was cancelled by the driver.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
          }
          refresh();
        } else if (mes.message.status == "On hold") {
          $("#exampleModal").modal("hide");
          $("modalRebook").modal("show");
        }
      },
    };
    pubnub.addListener(listener);

    pubnub.subscribe({
      channels: ["booking_channel_testing_" + localStorage.getItem("activeid")],
      withPresence: true,
      includeState: true,
    });
    return () => {
      pubnub.removeListener(listener);
      pubnub.unsubscribeAll();
    };
  });

  const date = [
    { value: "1", label: "Wrong input address" },
    { value: "2", label: "It's too expensive" },
    { value: "3", label: "Can't find a driver" },
    { value: "4", label: "Others" },
  ];

  const user_type = [
    { value: "driver", label: "Driver" },
    { value: "customer", label: "Customer" },
  ];

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
      width: "200px",
    }),
  };

  const style_issue = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
      borderRadius: "5px",
      width: "100%",
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
      width: "100%",
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
      width: "200px",
    }),
  };

  const cancel_white = {
    control: (base, state) => ({
      ...base,
      background: "#F3F3F4",
      color: "#424242",
      border: "1px solid gray",
      boxShadow: "none",
      borderRadius: "5px",
      width: "100%",
      marginBottom: "8px",
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
      width: "100%",
    }),
  };

  const cancel_black = {
    control: (base, state) => ({
      ...base,
      background: "rgb(28, 30, 33)",
      color: "white",
      border: "none",
      boxShadow: "none",
      borderRadius: "5px",
      width: "100%",
      marginBottom: "8px",
      padding: "2px",
      marginTop: "0px",
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
      width: "100%px",
    }),
  };

  function loadHoldtimer() {
    axios({
      url: "https://worldtimeapi.org/api/timezone/Asia/Manila",
      method: "get",
    })
      .then((response) => {
        console.log(response.data.datetime);
        setIpdate(response.data.datetime);

        var now = moment(response.data.datetime); //todays date
        var end = moment(localStorage.getItem("updatebookingdate")); // another date
        var duration = moment.duration(now.diff(end));
        var min = Math.floor(duration.asSeconds());

        window.interval = setInterval(() => {
          min = min + 1;
          console.log(min + "seconds timer");

          if (holdclear === true) {
            clearInterval(window.interval);
          } else {
            if (min > 30) {
              console.log(latestbook);
              holdbook();
              if (router.pathname === "/profile") {
                console.log(router.pathname);

                $(".modal-backdrop").show();
              } else {
                $(".modal-backdrop").hide();
              }
              clearInterval(window.interval);
              $("#exampleModal").modal("hide");
              $(".modal-backdrop").show();
            }
          }
        }, 1000);
        $(".modal-backdrop").show();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function holdTimer() {
    var now = moment(new Date()); //todays date
    var end = moment(localStorage.getItem("latestbookingdate")); // another date
    var duration = moment.duration(now.diff(end));
    var min = Math.floor(duration.asSeconds());

    window.interval = setInterval(() => {
      min = min + 1;
      console.log(min);
      console.log(holdclear);

      if (holdclear === true) {
        clearInterval(window.interval);
      } else {
        if (min > 30) {
          console.log(latestbook);
          holdbook();
          $(".modal-backdrop").show();
          if (router.pathname === "/profile") {
            console.log(router.pathname);

            $(".modal-backdrop").show();
          } else {
            $(".modal-backdrop").hide();
          }
          clearInterval(window.interval);
          $("#exampleModal").modal("hide");
          $(".modal-backdrop").show();
        }
      }
    }, 1000);
    $(".modal-backdrop").show();
  }

  useEffect(() => {

    if (scheduledbook == 1) {
      scheduledbook = 0;
      $("#modalScheduled").modal("show")
    }

    $("#modalScheduled").on('hidden.bs.modal', function () {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
   })

    if (localStorage.getItem("goSupport") == "true") {
      $(".ulDashboard>li").removeClass("activeUl");
      $(".conSupport").fadeIn(250);
      $(".conProf").hide();
      $(".conBook").hide();
      $(".conSettings").hide();
      $(".conPayment").hide();
      $(".liSupport").addClass("activeUl");
      localStorage.removeItem("goSupport");
    }
    if (localStorage.getItem("latestbookingdate")) {
      console.log(localStorage.getItem("latestbookingdate"));
    } else {
      console.log("no latest booking date");
    }
  }, []);

  useEffect(() => {
    console.log(getApi);
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

    const apiUrllatest = appglobal.api.base_api + appglobal.api.latest_booking;
    axios
      .post(apiUrllatest, { customer_id: AuthService.getId() }, options1)
      .then((result) => {
        console.log(result);
        if (!result.data.data) {
          console.log("no latest booking");
        } else {
          console.log(result);

          localStorage.setItem(
            "latestbookingdate",
            result.data.data.created_at
          );
          localStorage.setItem(
            "updatebookingdate",
            result.data.data.updated_at
          );
          console.log(result.data.data.updated_at + " Updated booking date");
          setLateststatus(result.data.data.status);
          console.log(result.data.data.status);

          if (result.data.data.status == "Looking for Driver") {
            loadHoldtimer();
          }

          setLatestbooktrack(result.data.data.tracking_id);
          setLatestbook(result.data.data.id);
          if (result.data.data.id) {
            setLatestbook(result.data.data.id);
            console.log(result.data.data.status);
            
            localStorage.setItem("latestbook", result.data.data.id);
          } else {
            localStorage.removeItem("latestbook");
          }
        }
      });

    const apiUrl2 = appglobal.api.base_api + appglobal.api.card_details;

    axios.post(apiUrl2, {}, options1).then((result) => {
      console.log(result.data);
      setListcard(result.data.user_card_details);
    });

    const apiUrl_view_tickets =
      appglobal.api.base_api +
      appglobal.api.view_tickets +
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
      },
    };

    const apiUrl = appglobal.api.base_api + appglobal.api.transaction_history;
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        console.log("trasaction history");
        console.log(result);

        setTabledata(result.data.data);

        if (result.data.data) {
          result.data.data
            .filter(
              (event) => event.id === Number(localStorage.getItem("activeid"))
            )
            .map((data) =>
              data.status == "Looking for Driver" && data.is_scheduled == 0
                ? $("#exampleModal").modal("show")
                : console.log("")
            );
        }

        if (localStorage.getItem("theme") == "true") {
          $(".pagination > li").attr("style", "color: #212121 !important");
          $(".pagination > li > a").attr("style", "color: #212121 !important");
        }

        tablemap = result.data.data;
        setCount(result.data.meta.total);
        setPages(result.data.meta.last_page);
        $(".Box").hide();
        if (result.data.data.length === 0) {
          $(".reactPaginate").hide();
          $(".pNo").show();
        }

      
      })
      .catch((err) => {
      
      });

    const apiUrl1 = appglobal.api.base_api + appglobal.api.customer_profile;
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

        if (result.data.data.profile_pic) {
          setProfle(
            "https://jgo-storage.s3.ap-southeast-1.amazonaws.com/" +
              result.data.data.profile_pic
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function changePage(e) {
    var x = e.selected + 1;
    if (x > 1) {
      console.log("mas mataas")
      clearInterval(window.intervalrefresh);
    }else {
      startTimer();
    }

    $(".Box").show();
    $("tbody tr").hide();
    if (localStorage.getItem("theme") == "true") {
      $(".pagination > li").attr("style", "color: #212121 !important");
      $(".pagination > li > a").attr("style", "color: #212121 !important");
    }

    console.log(e.selected + 1);
    
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
      appglobal.api.base_api + appglobal.api.transaction_history_page + x;

    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        console.log(result);
        setTabledata(result.data.data);
        console.log("page " + x)
        setPagenow(x)
        $("table").fadeIn(150);
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

        tablemap = result.data.data;

        $(".Box").hide();
        if (result.data.data.length === 0) {
          $(".reactPaginate").hide();
          $(".pNo").show();
        }

      })
      .catch((err) => {
        console.log(apiUrl);
        console.log(err);
      });
  }

  function logout() {
    router.push("/logout");
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

  function hovertable() {
    $("tr")
      .not(":first")
      .hover(
        function () {
          if (localStorage.getItem("theme_status") === "light") {
            $("td", this).css("color", "#f09307");
          } else {
            $("td", this).css("color", "#EDC728");
          }
        },
        function () {
          $("td", this).css("color", "");
        }
      );
  }

  function changeVerify(e) {
    setVerify(e.target.value);
  }

  function holdbook() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const api = appglobal.api.base_api + appglobal.api.hold_booking;
    axios
      .post(api, { booking_id: localStorage.getItem("latestbook") }, options)
      .then((result) => {
        console.log(result);
        $("#modalRebook").modal("show");
        swal.close()
        clearInterval(window.interval);
        refresh();
      })
      .catch((err) => {
        console.log(latestbook);
        console.log(err);
      });
  }

  function closeView() {
    $(".divView").css("right", "-350px");
  }

  function viewBook(e) {
    $(".conLoading").show();
    $(".conView").hide();
    $(".divWarning").hide();
    $(".divView").css("right", "0px");
    var trackid = $(e.currentTarget)
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(4)")
      .html();
    console.log(trackid);

    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const apiUrl = appglobal.api.base_api + appglobal.api.showdriver_location;

    axios
      .post(apiUrl, { tracking_id: { trackid } }, options)
      .then((result) => {
        console.log(result.data);
        $(".conLoading").hide();
        $(".conView").fadeIn(200);
        setDrivername(
          result.data.data.booking_details.driver.fname +
            " " +
            result.data.data.booking_details.driver.lname
        );
        setDriverprof(
          "https://jgo-storage.s3.ap-southeast-1.amazonaws.com/" +
            result.data.data.booking_details.driver.profile_pic
        );

        setDrivernumber(result.data.data.booking_details.driver.mobile_no);
        setBookingdate(
          moment(result.data.data.booking_details.driver.created_at).format("l")
        );
        setViewprice(result.data.data.booking_details.total);
        setViewbookingdata(
          result.data.data.booking_details.booking_drop_off_location
        );
        setViewpickupstatus(result.data.data.booking_details.status);
        setViewpickuploc(result.data.data.booking_details.pick_up_address);
        setViewpickupname(result.data.data.booking_details.contact_name);
      })
      .catch((err) => {
        console.log(err);
        $(".conView").hide();
        $(".divWarning").show();
      });
  }

  function rebook() {
   
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const api = appglobal.api.base_api + appglobal.api.retry_booking;
    axios
      .post(api, { booking_id: latestbook }, options)
      .then((result) => {
        $("#exampleModal").modal("show");
        $("#modalRebook").modal("hide");
        refresh();
        localStorage.setItem("latestbookingdate", moment(new Date()));
        holdTimer();
        console.log(result);
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
                  <img src="Image/warning.png" style={{ width: "32px" }}></img>
                </div>
                <div className="col-lg-10" style={{ textAlign: "left" }}>
                  <p className="pError">Error</p>
                  <p className="pErrorSub">Something went wrong.</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  function rebooktable(e) {
    var bookid = $(e.currentTarget)
    .parent("div")
    .parent("td")
    .parent("tr")
    .children()
    .closest("td:nth-child(2)")
    .html();
    rebooktableid = bookid;
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const api = appglobal.api.base_api + appglobal.api.retry_booking;
    axios
      .post(api, { booking_id: bookid }, options)
      .then((result) => {
       if (latestbook == bookid) {
        $("#exampleModal").modal("show");
        $("#modalRebook").modal("hide");
        localStorage.setItem("latestbookingdate", moment(new Date()));
        holdTimer();

       } else {
         console.log(latestbook);
         console.log(bookid);
       }

        refresh();
        console.log(result);
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
                  <img src="Image/warning.png" style={{ width: "32px" }}></img>
                </div>
                <div className="col-lg-10" style={{ textAlign: "left" }}>
                  <p className="pError">Error</p>
                  <p className="pErrorSub">Something went wrong.</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
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
    $(".btnVerify").addClass("btn--loading");
    console.log(clienttoken);
    console.log(verify);
    var amountverify = Math.floor(verify);
    var amountverifyfloat = parseFloat(amountverify).toFixed(2);
    console.log(amountverifyfloat);
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl = appglobal.api.base_api + appglobal.api.verify_token;

    let formdata = new FormData();
    formdata.set("clientToken", clienttoken);
    formdata.set("amount", Number(verify));
    axios
      .post(
        apiUrl,
        { client_token: clienttoken, amount: amountverifyfloat },
        options
      )
      .then((result) => {
        console.log(result);
        if (
          result.data.data.cardDetails.cardStatus == 5 ||
          result.data.data.cardDetails.cardStatus == 3
        ) {
          swal(
            $(".btnVerify").removeClass("btn--loading"),
            $("#modalVerify").modal("hide"),
            $(".modal-backdrop").hide(),
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
                      Something went wrong. If you entered the correct amount,
                      please contact our customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          $("#modalVerify").modal("hide");
          $(".modal-backdrop").hide();
          $(".btnVerify").removeClass("btn--loading");
          const options1 = {
            headers: {
              Accept: "application/json, text/plain, */*",
              "content-type": "application/json",
              Authorization: "Bearer " + AuthService.getToken(),
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
            },
          };
          const apiUrl2 = appglobal.api.base_api + appglobal.api.card_details;

          axios.post(apiUrl2, {}, options1).then((result) => {
            console.log(result.data);
            setListcard(result.data.user_card_details);
          });
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #00C853" }}
                >
                  <div className="col-lg-2">
                    <img
                      src="Image/success.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div className="col-lg-10" style={{ textAlign: "left" }}>
                    <p className="pError">Verified</p>
                    <p className="pErrorSub">Card successfully verified.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })
      .catch((err) => {
        $(".btnVerify").removeClass("btn--loading");
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
                  <p className="pErrorSub">
                    Something went wrong. If you entered the correct amount,
                    please contact our customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  function usertypechange(value) {
    var value = value.value.toLowerCase();
    setUsertype(value.label);
  }

  function handlestatuschange(value) {
    var statuslabel = value;
    var value = value.value.toLowerCase();
    console.log(value.label);
    setStatus(value.label);

    if (statuslabel.label == "Active") {
      $(".divHistory, .reactPaginate, .divScheduledtable").hide();
      $(".divActivetable").fadeIn(150);
      if (tableactivebooking.length == 0) {
        console.log("walang laman");
        $(".pNo").show();
      } else {
        console.log("walang laman");
        $(".pNo").hide();
      }
      console.log("gumana");
    } else if (statuslabel.label == "All") {
      $(".divHistory, .reactPaginate").fadeIn(150);
      $(".divActivetable, .divScheduledtable").hide();
      if (tabledata.length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    } else if (statuslabel.label == "Scheduled") {
      $(".divHistory, .reactPaginate, .divActivetable").hide();
      $(".divScheduledtable").fadeIn(150);
      if (tablescheduled.length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    }
  }

  function handlechangeCancel(event) {
    $(".pSpecify").hide();
    if (event.value == 1) {
      $(".txtAreacancel").fadeOut(200);
      reason1();
    } else if (event.value == 2) {
      $(".txtAreacancel").fadeOut(200);
      reason2();
    } else if (event.value == 3) {
      $(".txtAreacancel").fadeOut(200);
      reason3();
    } else if (event.value == 4) {
      reason4();
      $(".txtAreacancel").fadeIn(200);
    }
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
    $(".btnChangepass").addClass("btn--loading");
    if (email == "") {
      $(".txtEmailchange").css("border", "1px solid #c62828");
      $(".btnChangepass").removeClass("btn--loading");
    }

    if (oldpass == "") {
      $(".txtOldpass").css("border", "1px solid  #c62828");
      $(".btnChangepass").removeClass("btn--loading");
    }

    if (confirmoldpass == "") {
      $(".txtConfirmoldpass").css("border", "1px solid  #c62828");
      $(".btnChangepass").removeClass("btn--loading");
    }

    if (newpass == "") {
      $(".txtNewpass").css("border", "1px solid #c62828");
      $(".btnChangepass").removeClass("btn--loading");
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

      const apiUrl = appglobal.api.base_api + appglobal.api.change_password;

      axios
        .post(apiUrl, formdata, options)
        .then((result) => {
          console.log(result);
          $("#modalChangepass").modal("toggle");
          $(".modal-backdrop").hide();
          AuthService.logout();
          router.push("/");
        })
        .catch((err) => {
          $(".btnChangepass").removeClass("btn--loading");
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
      case "On hold":
        return "onhold";
      case "Scheduled":
        return "schedule"
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
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMobile(e.target.value);
    }
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

  function tittle_change(e) {
    setTitleissue(e.target.value);
  }

  function description_change(e) {
    setDescription(e.target.value);
  }

  function saveprof() {
    var clear = 0;
    if (!fname) {
      $("#txtFnameprof").css("border", "1px solid red");
      clear = 1;
    } else {
      $("#txtFnameprof").css("border", "1px solid #2c2c2c");
      clear = 0;
    }
    if (!lname) {
      $("#txtLnameprof").css("border", "1px solid red");
      clear = 1;
    } else {
      $("#txtLnameprof").css("border", "1px solid #2c2c2c");
      clear = 0;
    }
    if (!emailprof) {
      $("#txtEmailprof").css("border", "1px solid red");
      clear = 1;
    } else {
      $("#txtEmailprof").css("border", "1px solid #2c2c2c");
      clear = 0;
    }
    if (!mobile) {
      $("#txtMobileprof").css("border", "1px solid red");
      clear = 1;
    } else {
      $("#txtMobileprof").css("border", "1px solid #2c2c2c");
      clear = 0;
    }
    if (!address) {
      $("#txtAddressprof").css("border", "1px solid red");
      clear = 1;
    } else {
      $("#txtAddressprof").css("border", "1px solid #2c2c2c");
      clear = 0;
    }

    if (clear == 0) {
      $(".btnSave").addClass("btn--loading");
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json, multipart/form-data",
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
        formdata.append(
          "profile_pic",
          "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
        );
      }
      formdata.append("email", emailprof);
      formdata.append("mobile_no", mobile);
      if (state1) {
        formdata.append("state", state1);
      }
      if (zip) {
        formdata.append("zip", zip);
      }

      if (city) {
        formdata.append("city", city);
      }

      if (mname) {
        formdata.append("city", city);
      }

      formdata.append("address", address);

      formdata.append("country", "ph");

      formdata.append("_method", "PATCH");

      const apiUrl =
        appglobal.api.base_api +
        appglobal.api.save_profile +
        AuthService.getId();
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
                      Something wrong. Please contact our customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
          $(".btnSave").removeClass("btn--loading");
        });
    }
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
        country: "ph",
        zip: zip,
      };

      const apiUrl =
        appglobal.api.base_api +
        appglobal.api.save_profile +
        AuthService.getId();
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
    $(".btnVerify1").addClass("btn--loading");
    const options = {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };

    const apiUrl = appglobal.api.base_api + appglobal.api.enroll_token;
    axios
      .post(apiUrl, { platform: "web" }, options)
      .then((result) => {
        console.log(result);
        if (result.data.data.redirectUrl) {
          window.open(result.data.data.redirectUrl, "_blank");
        } else {
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #FFE900" }}
                >
                  <div className="col-lg-2 col-sm-2">
                    <img
                      src="Image/complain.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-10 col-sm-10"
                    style={{ textAlign: "left" }}
                  >
                    <p className="pError">Warning</p>
                    <p className="pErrorSub">
                      Please complete your profile information before adding a
                      card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        $(".btnVerify1").removeClass("btn--loading");
      })
      .catch((err) => {
        $(".btnVerify1").removeClass("btn--loading");
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
    const apiUrl = appglobal.api.base_api + appglobal.api.topup_jgowallet;
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
        $(".btnAddcard").removeClass("btn--loading");

        if (result.data.encoded_xml) {
          $("#paymentrequest").val(result.data.encoded_xml);
          console.log(result.data.encoded_xml);
          document.getElementById("paygate_frm").submit();
        } else {
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #FFE900" }}
                >
                  <div className="col-lg-2 col-sm-2">
                    <img
                      src="Image/complain.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-10 col-sm-10"
                    style={{ textAlign: "left" }}
                  >
                    <p className="pError">Warning</p>
                    <p className="pErrorSub">
                      Please complete your profile information before adding a
                      card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
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
    var clear = 0;
    if (titleissue == "") {
      clear = 1;
      $(".txtTitle").css("border", "1px solid red");
    } else {
      $(".txtTitle").css("border", "1px solid  #2c2c2c");
    }

    if (description == "") {
      clear = 1;
      $(".txtDescription").css("border", "1px solid red");
      return false;
    } else {
      $(".txtDescription").css("border", "1px solid  #2c2c2c");
    }

    if (clear == 0) {
      const options = {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + AuthService.getToken(),
        },
      };
      const random_num = Math.floor(Math.random() * 90000) + 10000;
      const apiUrl = appglobal.api.base_api + appglobal.api.client_tickets;
      let formdata = new FormData();
      formdata.set("user_type", "Customer");
      formdata.set("user_id", AuthService.getId());
      formdata.set("channel_id", "Channel-customersupport-" + random_num);
      formdata.set("details", description);
      formdata.set("title", titleissue);
      if (bookingid) {
        formdata.set("tracking_id", bookingid);
      }
      axios
        .post(apiUrl, formdata, options)
        .then((result) => {
          $("#modalReport").modal("hide");
          $(".modal-backdrop").hide();
          setDescription("");
          setTitleissue("");
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #00C853" }}
                >
                  <div className="col-lg-2">
                    <img
                      src="Image/success.png"
                      style={{ width: "32px" }}
                    ></img>
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
            appglobal.api.base_api +
            appglobal.api.view_tickets +
            AuthService.getId() +
            "/open_tickets";

          axios.get(apiUrl_view_tickets, {}, options1).then((result) => {
            console.log(result.data);
            setListticket(result.data);
          });
        })
        .catch((err) => {
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #FFE900" }}
                >
                  <div className="col-lg-2 col-sm-2">
                    <img
                      src="Image/complain.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-10 col-sm-10"
                    style={{ textAlign: "left" }}
                  >
                    <p className="pError">Warning</p>
                    <p className="pErrorSub">
                      Your issue was not successfully delivered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    }
  }

  function getChannel(e) {
    var x = $(e.currentTarget).find("td:nth-child(6)").text();
    channel_id = [`${x}`];
  }

  function openchat() {
    $(".divChatbox").show();
    $(".spanCount").hide();
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
        <div className="divView">
          <div className="conLoading">
            <div className="loaderview">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="divWarning">
            <img
              src="Image/close.png"
              className="img-fluid imgCloseview1"
              onClick={closeView}
            ></img>
            <div className="divWarningsub">
              <img
                src="Image/warningview.png"
                className="img-fluid imgviewwarning mx-auto d-flex"
                style={{ width: "70px" }}
              ></img>
              <p className="pSomething">
                Sorry, your booking was cancelled. You can try to book again and
                our JGO Riders will assist you.
              </p>
            </div>
          </div>
          <div className="container conView">
            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-lg-12">
                <img
                  src="Image/close.png"
                  className="img-fluid imgCloseview"
                  onClick={closeView}
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="divDriverprof">
                  <img
                    src={driverprof}
                    className="img-fluid imgProfview mx-auto d-flex"
                  ></img>
                </div>
                <p className="pDrivername">{drivername}</p>
                <p className="pDrivernumber">{drivernumber}</p>
              </div>
            </div>
            <div className="row" style={{ borderBottom: "1px solid #424242" }}>
              <div className="col-lg-6">
                <p className="pViewhead">Date</p>
                <p className="pBookingdate">{bookingdate}</p>
              </div>
              <div className="col-lg-6">
                <p className="pViewhead">Price</p>
                <p className="pViewprice">&#8369;{viewPrice}</p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-12">
                <p className="pViewhead1">Bookings</p>
              </div>
              <div className="col-lg-12" style={{ marginTop: "8px" }}>
                <ul className="ulView">
                  <li className="liView">
                    <p className={statusColor(viewpickupstatus)}>
                      {viewpickupstatus}
                    </p>
                    <p className="pViewloc">{viewPickuploc}</p>
                    <p className="pViewname">{viewPickupname}</p>
                  </li>
                </ul>
                {viewbookingdata.map((event, index) => (
                  <ul>
                    <li className="liView">
                      <p className={statusColor(event.status)}>
                        {event.status}
                      </p>
                      <p className="pViewloc">{event.drop_off_address}</p>
                      <p className="pViewname">{event.contact_name}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
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
                style={{
                  width: "120px",
                  marginLeft: "40px",
                  cursor: "pointer",
                }}
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
                <img
                  className="navProf"
                  src={profilepic ? profilepic : "Image/profile.jpg"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conMenu">
        <div className="row">
          <div className="pDashboard">
            <p className="pDashboard" onClick={trylang}>
              Dashboard
            </p>
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
              <li onClick={support} className="liSupport">
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
                placeholder="Select booking type"
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
                placeholder="Search id, tracking number or location"
                onKeyUp={searchTable}
              ></input>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-12">
            <div className="divTable divHistory">
              <div className="table-responsive">
                <table
                  className="table tabledata"
                  id="table"
                  onMouseOver={hovertable}
                >
                  <thead>
                    <tr style={{ backgroundColor: "transparent" }}>
                      <th>Action</th>
                      <th className="d-none">Id</th>
                      <th className = "d-none">Driver id</th>
                      <th>Tracking ID</th>
                      <th className="d-none">date</th>
                      <th className="d-none">Status</th>
                      <th>Price</th>
                      <th>Type</th>
                      <th>Pickup Address</th>
                      <th>Drop Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata.map((event, index) => (
                      <tr key={event.id}>
                        <td className="tdButton">
                          {event.status == "Complete" ||
                          event.status == "Canceled" ? (
                            <button className="btnView" onClick={viewBook}>
                              View
                            </button>
                          ) : event.status == "On hold" ? (
                            <div
                              className="form-inline"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btnTrackingprof"
                                onClick={rebooktable}
                              >
                                Rebook
                              </button>
                              <button
                                className="btnCancel"
                                onClick={opencancelBooking}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div
                              className="form-inline"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btnTrackingprof"
                                onClick={gotoTrack}
                              >
                                Track
                              </button>
                              <button
                                className="btnCancel"
                                onClick={opencancelBooking}
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </td>
                        <td className="d-none">{event.id}</td>
                        <td className = "d-none">{event.driver_id}</td>
                        <td
                          className={
                            localStorage.getItem("theme_status") == "light"
                              ? "tdlight"
                              : "tddark"
                          }
                        >
                          {event.tracking_id}
                        </td>
                        <td  className="d-none">{event.updated_at}</td>
                           <td  className="d-none">{event.status}</td>
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
                          {event.is_scheduled == 0 ? "Same day" : "Schedule"}
                        </td>

                        <td
                          className={
                            localStorage.getItem("theme_status") == "light"
                              ? "tdlight tdPickup"
                              : "tddark tdPickup"
                          }
                        >
                          <span className={statusColor(event.status)}>
                            {event.status} - {event.reason_for_cancel  == null ? "" :  event.reason_for_cancel}
                          </span>
                          {event.pick_up_address}
                        </td>
                        {event.booking_drop_off_location.map((event) => (
                          <td
                            className={
                              localStorage.getItem("theme_status") == "light"
                                ? "tdlight tdPickup"
                                : "tddark tdPickup"
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
            </div>

            <div className="divTable divActivetable">
              <div className="table-responsive">
                <table
                  className="table tabledata"
                  id="table"
                  onMouseOver={hovertable}
                >
                  <thead>
                    <tr style={{ backgroundColor: "transparent" }}>
                      <th>Action</th>
                      <th className="d-none">Id</th>
                      <th className = "d-none">Driver id</th>
                      <th>Tracking ID</th>
                      <th>Price</th>
                   
                      <th>Pickup Address</th>
                      <th>Drop Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableactivebooking.map((event, index) => (
                      <tr key={event.id}>
                        <td className="tdButton">
                          {event.status == "Complete" ||
                          event.status == "Canceled" ? (
                            <button className="btnView" onClick={viewBook}>
                              View
                            </button>
                          ) : event.status == "On hold" ? (
                            <div
                              className="form-inline"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btnTrackingprof"
                                onClick={rebooktable}
                              >
                                Rebook
                              </button>
                              <button
                                className="btnCancel"
                                onClick={opencancelBooking}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div
                              className="form-inline"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btnTrackingprof"
                                onClick={gotoTrack}
                              >
                                Track
                              </button>
                              <button
                                className="btnCancel"
                                onClick={opencancelBooking}
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </td>
                        <td className="d-none">{event.id}</td>
                        <td className = "d-none">{event.driver_id}</td>
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
                              ? "tdlight tdPickup"
                              : "tddark tdPickup"
                          }
                        >
                          <span className={statusColor(event.status)}>
                          {event.status} - {event.reason_for_cancel  == null ? "" :  event.reason_for_cancel}
                          </span>
                          {event.pick_up_address}
                        </td>
                        {event.booking_drop_off_location.map((event) => (
                          <td
                            className={
                              localStorage.getItem("theme_status") == "light"
                                ? "tdlight tdPickup"
                                : "tddark tdPickup"
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
            </div>

            <div className="divTable divScheduledtable">
              <div className="table-responsive">
                <table
                  className="table tabledata"
                  id="table"
                  onMouseOver={hovertable}
                >
                  <thead>
                    <tr style={{ backgroundColor: "transparent" }}>
                      <th>Action</th>
                      <th className="d-none">Id</th>
                      <th>Tracking ID</th>
                      <th>Price</th>
                      <th>Pickup Address</th>
                      <th>Drop Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tablescheduled.map((event, index) => (
                      <tr key={event.id}>
                        <td className="tdButton">
                          {event.status == "Complete" ||
                          event.status == "Canceled" ? (
                            <button className="btnView" onClick={viewBook}>
                              View
                            </button>
                          ) : event.status == "On hold" ? (
                            <div
                              className="form-inline"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btnTrackingprof"
                                onClick={rebook}
                              >
                                Rebook
                              </button>
                              <button
                                className="btnCancel"
                                onClick={opencancelBooking}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div
                              className="form-inline"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btnTrackingprof"
                                onClick={gotoTrack}
                              >
                                Track
                              </button>
                              <button
                                className="btnCancel"
                                onClick={opencancelBooking}
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </td>
                        <td className="d-none">{event.id}</td>
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
                              ? "tdlight tdPickup"
                              : "tddark tdPickup"
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
                                ? "tdlight tdPickup"
                                : "tddark tdPickup"
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
            </div>

            <div className="Box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div
              className="text-center reactPaginate"
              style={{ margin: "20px 0px" }}
            >
              <ReactPaginate
                previousLabel={"PREV"}
                nextLabel={"NEXT"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pages}
              
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={changePage}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"activepage"}
              />
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
                src={profilepic ? profilepic : "Image/profile.jpg"}
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
              {fname} {mname == "null" ? " " : mname} {lname}
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
                className="txtDriver txtprof"
                id="txtFnameprof"
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
                className="txtDriver  txtprof"
                id="txtMiddleprof"
                value={mname == "null" ? " " : mname}
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
                id="#txtLnameprof"
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
                id="txtEmailprof"
                readonly="readonly"
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
                id="txtMobileprof"
                onChange={mobile_change}
                maxLength="12"
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Address</p>
              <input
                type="text"
                className="txtDriver txtprof"
                id="txtAddressprof"
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
                value={state1 == "null" ? " " : state1}
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
                value={city == "null" ? " " : city}
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
            <a
              className="btn btnSave"
              onClick={saveprof}
              style={{ color: "white" }}
            >
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
              <label className="label" htmlFor="switch">
                Toggle
              </label>
              <span className="spanCheckSettings">
                Enable light mode
                <span style={{ fontSize: "0.9rem" }}></span>
              </span>
            </div>
            <div style={{ marginTop: "10px", display: "none" }}>
              <input type="checkbox" id="switch1" />
              <label for="switch1">Toggle</label>
              <span className="spanCheckSettings">Enable tooltips</span>
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
                    src={
                      event.cardType == "MASTERCARD"
                        ? "Image/mastertype.png"
                        : "Image/visa.png"
                    }
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
                          {event.cardStatus != "0" ? "Unverified" : "Verified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div
              className="divCardPayment d-none"
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
              + Create issue
            </button>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table" id="table" onMouseOver={hovertable}>
                <thead>
                  <tr style={{ backgroundColor: "transparent" }}>
                    <th>Booking Id</th>
                    <th>Title</th>
                    <th>Created Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listtickets
                    .filter(
                      (event) =>
                        event.status == "ongoing" || event.status == "new"
                    )
                    .map((event, index) => (
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
                          {event.title}
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
                          <button
                            className="btnOpen btnOpenchat"
                            onClick={openchat}
                          >
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
                    type="password"
                    className="txtOldpass txtchange"
                    value={oldpass}
                    placeholder="Enter old password"
                    onChange={handleChangeoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="password"
                    className="txtOldpass txtConfirmoldpass txtchange"
                    value={confirmoldpass}
                    placeholder="Enter old confirm password"
                    onChange={handleChangeconfirmoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="password"
                    value={newpass}
                    className="txtNewpass txtchange"
                    placeholder="Enter new password"
                    onChange={handleChangenewpass}
                  ></input>
                </div>
                <div className="col-lg-12 text-center">
                  <a
                    className="btn btnChangepass"
                    onClick={btnChangepass}
                    style={{ color: "white" }}
                  >
                    CONFIRM
                    <span style={{ marginLeft: "180px" }}>
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
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
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
                      <span
                        className="spanSearch"
                        style={{ marginLeft: "80px" }}
                      >
                        <b className="spanSearch"></b>
                        <b className="spanSearch"></b>
                        <b className="spanSearch"></b>
                      </span>
                    </a>
                    <p className="pCancelbook" onClick={opencancelBooking}>
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
                      <span style={{ marginLeft: "20px" }}>
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
            <div className="modal-body modalTop modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalVerify">JGO Wallet - Top up</p>
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
                      style={{ marginTop: "10px", color: "white" }}
                    >
                      Proceed
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

                  <div className="col-lg-12 text-center">
                    <a
                      className="btn btnVerify1 "
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
                      className="txtDriver txtFname txttopup"
                      value={fname}
                      onChange={fname_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Middle Name</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={mname}
                      onChange={mname_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Last Name</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={lname}
                      onChange={lname_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Email</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={emailprof}
                      onChange={email_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Mobile</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={mobile}
                      onChange={mobile_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Country</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={country}
                      readOnly="readonly"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Address</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={address}
                      onChange={address_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">City</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={city}
                      onChange={city_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">State</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
                      value={state1}
                      onChange={state_change}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pFname">Zip</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txttopup"
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
                    <a
                      className="btn btnConfirmTopup"
                      onClick={saveprof1}
                      style={{ color: "white" }}
                    >
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
                    <p className="pTxtDriver pReport">User type</p>

                    <p
                      className="pTxtDriver pReport"
                      style={{ marginTop: "10px" }}
                    >
                      Booking ID (Optional)
                    </p>
                    <input
                      type="text"
                      className="txtDriver txtFname txtIdsupport"
                      value={bookingid}
                      onChange={booking_change}
                    ></input>
                    <p className="pTxtDriver pReport">Title</p>
                    <input
                      type="text"
                      className="txtDriver txtFname txtTitle"
                      value={titleissue}
                      onChange={tittle_change}
                    ></input>
                    <p className="pTxtDriver pReport">Description</p>
                    <textarea
                      className="txtDriver txtDescription"
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
                      style={{ marginTop: "5px", color: "white" }}
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
      <div
        className="modal fade"
        id="modalRebook"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
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
                        src="Image/nodriver.png"
                        className="img-fluid mx-auto d-flex imgLoading"
                      ></img>
                    </div>
                    <p className="pSearching">No driver found</p>
                    <p className="pSearchsub">
                      Sorry it looks like some of our riders are busy, you can
                      click rebook or cancel your booking.
                    </p>
                    <a className="btn btnCheck" onClick={rebook}>
                      Rebook
                      <span style={{ marginLeft: "80px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                    <p className="pCancelbook" onClick={opencancelBooking}>
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
        id="modalScheduled"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
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
                        src="Image/found.gif"
                        className="img-fluid mx-auto d-flex imgLoading"
                      ></img>
                    </div>
                    <p className="pSearching">Scheduled successfully.</p>
                    <p className="pSearchsub">
                      Thank your for using Jgo. Your parcel will be delivered with the given time and date.
                    </p>
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
