# Jgo [![Build Status](https://i.ibb.co/tqgywhd/Build-Development-lightgrey.png)](https://travis-ci.org/joemccann/dillinger)
[![Next Js](https://i.ibb.co/CKgz0J3/output-onlinepngtools.png)](https://nextjs.org)

This readme is all about the following pages and components.\
**It is required that you have basic knowledge in react and next js to understand the flow.**

- map.js
- delivery.js
- profile.js
- chat.js
- tracking.js
- tracking/number.js
- login.js

### Installation
Install the dependencies and devDependencies and start the server.
```sh
npm install
npm run dev
```

### Plugins
You might want to install the below plugins to completely run the web app.

`react-google-maps` - **For the map** \
`react-google-places-autocomplete`  - **For the autosearch places** \
`react-geocode`  - **To get the address based on lat and lng**\
`react-leaflet`  - **React laeflet**\
`leaflet`  - **React leaflet dependency**\
`next`  - **React framework**\
`react`  - **Main framework**\
`nextjs-progressbar`  - **Progress bar animation**\
`philippines`  - **List of region and cities**\
`pubnub`  - **Used in chat and getting the response of the driver**\
`pubnub-react`  - **Pubnub dependency**\
`react-datepicker`  - **Datepicker made in react**\
`react-dom`  - **React dependency**\
`react-facebook-login`  - **Used to login using facebook**\
`react-google-login`  - **Used to login using google**\
`react-paginate`  - **Pagination in table**\
`react-perfect-scrollbar`  - **To change the scrollbar style**\
`react-select`  - **Select box made in react**\
`swweetalert`  - **Alert box**\
`@sweetalert/with-react`  - **Sweet alert dependecy in react**\
`axios`  - **Used to fetch data in api**\

### Api's
All api's are declared on`/services/auto.service.js` .\
The project used axios for connecting to Api's. Some axios headers need tokens. Dont edit the header options because thats the fix format to connect to server.
```javascript
 const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
```
For staging api, change the base_api in `setvices/api.service.js` to `"https://staging-api.jgo.com.ph"`. **Dont change the other Apis that are declared**.

### Login
Before you book you need to login. Login have 3 ways you can either use your normal account, facebook or google.\

#### Login using facebook and google
If you login using facebook or google , the 3rd party api will automatically response the id, email, first_name and last_name. The resonsed data will be automatically transfer to the state. After we transter the response we will call the api register for the 3rd party api and the parameter is the same as the response. IF the email is not registered the modal will be shown but the email, first name and last name is already declared if not the api will response a token. 
```javascript
 if (result.data.status === "failed") {
     this.setState({ email: response.profileObj.email });
     this.setState({ fname: response.profileObj.givenName });
     this.setState({ lname: response.profileObj.familyName });
     $("#modalRegister").modal("toggle");
  } 
```

#### Succesfull login
The JWT token will automatically store in localstorage depends on that 3rd party that they used. In localstorage it includes `name, id and token`
| 3RD PARTY | STORAGE |
| ------ | ------ |
| Facebook |  localStorage.setItem("facebook", JSON.stringify(result.data));   |
| Google   |  localStorage.setItem("google", JSON.stringify(result.data));     |
| Normal   |  localStorage.setItem("token", JSON.stringify(result.data.data)); |


### Signup
In signup theres a multiple condition that the user should not met. If the user met the following below the variable clear will be 1. The function name is `goOtp`
- First name, Last name, Email, Mobile number, Passsword and Confirm password.
- Password should be 6-16 Characters.
- If mobile number is already registered.

If none of these arent met the variable clear will be 0.
Next we need to check if the mobile number is registered or not. Thers an axios function that holds the number and the api for checking if registed or not.
```javascript
 const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };
      const apiUrl = appglobal.api.base_api + appglobal.api.check_number;
      axios
        .post(apiUrl, { mobile_no: this.state.mobile }, options)
        .then((result) => {
```
if success it will call another axios function that will send a otp. \
In order to send an otp in mobile number, the number should start in 63. So thres a conditionnal statement that will know if the number start in 0.
```javascript
    var str = this.state.mobile;
    var firstchar = str.charAt(0);
    if (firstchar == "0" || firstchar == 0) {
      var str = str.replace(/^./, "63");
      this.setState({ otpnumber: str });
    } else {
    }
```
If success, We will get the `request_id` and `timestamp` of the response. Then modal for otp will appear and the functiion `timer` will trigger.\
The timer is set to 5mins. If timer expired you can use again your number to register.
```javascript
 axios
            .post(apiUrl, {}, options)
            .then((result) => {
              this.setState({ expired: false });
              submit == 0;
              clear == 0;
              $(".btn").removeClass("btn--loading");
           
              localStorage.setItem("requestid", result.data.request_id);
              this.setState({ requestid: result.data.request_id });
              sessionStorage.setItem("otp", "1");
              localStorage.setItem("createotpdate", result.data.timestamp);
              $("#modalRegister").modal("toggle");
              this.timer();
              this.setState({ otprequest: true });
              $("#modalOtp").modal("toggle");
            })
```
If user refresh or try to register again with the same number. It will detect if the created otp date is greater than 40secs. If less than 40 it will automatically cancel the ongoing otp then send a new one. If greater than 40 you have to wait to 5 mins to register again with that number.
```javascript
 const apiUrl =
                    appglobal.api.base_api +
                    appglobal.api.cancel_otp +
                    localStorage.getItem("requestid") +
                    "/" +
                    this.state.otpnumber;
                  axios
                    .post(apiUrl, options)
                    .then((result) => {
                     
                      const options = {
                        headers: {
                          Accept: "application/json, text/plain, */*",
                          "content-type": "application/json",
                        },
                      };
                      const apiUrl =
                        appglobal.api.base_api +
                        appglobal.api.send_otp +
                        this.state.otpnumber;
                      axios.post(apiUrl, options).then((result) => {
                     
                        this.setState({ seconds: 300 });

                        clearInterval(interval);
                        this.timer();
                      });
                    })
```
Make sure set the seconds state to 300 and clear the interval then run the timer again.


## Forgot password
Basically put the email address and it call the api. The function name is `send`.

### Deliver component
If you login succesfully the component login will be hidden and the deliver component will be shown. It composed of 2 Autoplaced search ( picup and dropoff ) and 2 custom map for each location.

### Autoplace search
The places are restricted only in the **PH**.
```javascript
 autocompletionRequest={{
    	componentRestrictions: {
    		country: ["ph"],
    	},
    }}
```

#### How autolaces works
Everytime the user enter a location the autoplace will reponse an array. It consist of lat,lat, name of the address, id of the addres and etc.\
`const results = await geocodeByAddress(value.label);` - To get the address.\
`const latLng = await getLatLng(results[0]);` - To get the lat and lng.\
The boundaries are implemented only in Metro manila, Cavite, Rizal and laguna.\
\
`var n = str.includes("Metro Manila")||str.includes("Laguna, Philippines")||str.includes("Cainta, Rizal")|| str.includes("Cavite, Philippines");`\
if the selected address includes the following places. The `latlng` and `value` will be thrown in the state depends on what autoplaces you choose ( pickup or dropoff ).\
```javascript
  else if (n === true) {
      setPlaceidpick(results[0].place_id)
      setAddress(value);
      setCoordinates(latLng);
    }
```

#### Submit button in delivery component
If the user click the submit button. We will push the address, lat, lng and ID in `coordinates` array so that in the map page the selected place will be seen in the map.
```javascript
      const origin = {
        address: address.label,
        lat: coordinates.lat,
        lng: coordinates.lng,
        id: "1",
      };
      coordinate.push(origin);
      const destination = {
        address: addressDrop.label,
        lat: coordinatesDrop.lat,
        lng: coordinatesDrop.lng,
        id: "2",
      };
      coordinate.push(destination);
```
after that, We will pass `adress` , `lat` and `lng` in Localstorage. Why? Because the maps will not run if theres no coordinates. So evertime the user access the map pages it will automatically get the coordinates in the localstorage.

```javascript
  localStorage.setItem("address", address.label);
      localStorage.setItem("addressDrop", addressDrop.label);
      localStorage.setItem("pickofflat", coordinates.lat);
      localStorage.setItem("pickofflng", coordinates.lng);
      localStorage.setItem("dropofflat", coordinatesDrop.lat);
      localStorage.setItem("dropofflng", coordinatesDrop.lng);

      global.config.place.deliver.pickoff = address.label;
      global.config.place.deliver.dropoff = addressDrop.label;

      global.config.place.deliver.pickofflat = coordinatesDrop.lat;
      global.config.place.deliver.pickofflang = coordinatesDrop.lng;

      global.config.place.deliver.dropofflat = coordinatesDrop.lat;
      global.config.place.deliver.dropofflang = coordinatesDrop.lng;
```

#### Getting rate in delivery component
After we pass all variables needed in localstorage. We will call now the rateAPi the parameter are in the code. Be aware that the weight is already set at `0-5kg` and payment_metod is `cod`.\
IF the result is success we will get all the breakdown expenses and the price. Then it will proceed to map.js .\
```javascript
         localStorage.setItem("baserate", result.data.breakdown.base_rate);
          localStorage.setItem("perkm", result.data.breakdown.per_km);
          localStorage.setItem("platform",result.data.breakdown.platform_fee);
          localStorage.setItem("adddropoff",result.data.breakdown.totalAdditionalDropOffRate);
          localStorage.setItem("totalkm",result.data.breakdown.totalDistance);
          localStorage.setItem("smsfee",result.data.breakdown.vonage_fee);
          localStorage.setItem("weightfee",result.data.breakdown.weight_fee);
          localStorage.setItem("zoningfee",result.data.breakdown.zoning_fee);
       
          localStorage.setItem("price", Math.floor(result.data.price));
          $(".btn").removeClass("btn--loading");
          router.push("/map");
```

### Custom map in delivery component
There are 2 icons in the component 1 for pickup and 1 for dropoff. Everytime they click the custom map icon it will trigger the variable `click`. The value of pickoff is 0 and dropoff is 1. After that the modal will appear wit the custom map. The custom map is place in the `component/map/leafletmap.js`.\
In the `leafletmap.js` theres a function named `handleclick` If the user click in the map it will get the address, lat and lng.

```javscript
     Geocode.fromLatLng(e.latlng.lat, e.latlng.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
   
        global.config.place.deliver.pickoff = address;
        global.config.place.deliver.pickofflat = e.latlng.lat;
        global.config.place.deliver.dropofflang = e.latlng.lng;
        this.setState({ address: address });
      },
      (error) => {
        console.error(error);
      }
    );
    this.setState({ currentPos: e.latlng });
```
After that, if the user click the set button. It wil replace the current value of the selected location. Its either 1 (Drop off) or 0 (Pickup). The name of the function is `getAdd`. 
```javascript
 if (click === 0) {
        coordinates.lat = global.config.place.deliver.pickofflat;
        coordinates.lng = global.config.place.deliver.dropofflang;
        setAddress({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      } else {
        setAddressDrop({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
        coordinatesDrop.lat = global.config.place.deliver.pickofflat;
        coordinatesDrop.lng = global.config.place.deliver.dropofflang;
      }
      swal.close();
      global.config.place.deliver.pickoff = "";
    }
```



Im using react-google-maps, so the issue is it cannot render 2 maps in the same page. So in custom search in  `/map` I used react-leaflet. The map component was rendered using 
`Dynamic from "next/dynamic` since NextJs is SSR.

```javscript
const Leaflet = dynamic(
    () => import('../map/leafletmap'),
    { ssr: false }
  )
```

Since NextJs is SSR the localstorage will be undefined in every run, because localstorage is a DOM of the browser not the NextJs itself. So to make it work I put a conditional statement.

```
if (process.browser) {
    if (global.config.place.deliver.refresh === "") {
    // All localstorage goes here.    
    }
  } else {
  }

```

##### Module export
I used module export for global variables. So everytime the client changes the dropoff and pickoff the data will throw in global config.
```javascript
module.exports = global.config = {
  place: {
      deliver: {
          pickoff: "",
          dropoff: "",
          pickofflat: "",
          pickofflang: "",
          dropofflat: "",
          dropofflang: ""
      }
  }
}

```

### Map

The coordinates given by the user will automatically render the driver route in the map. The map can render 15 routes. **Since the map needs coordinates before it load; I used `localstorage` to get the first input of user in dropoff and pickoff in `/delivery` so whenever the user refresh the site the pickoff, dropoff and map have already a value.** Check the delivery section of this readme.\
The function of autocomplete search is the same as delivery component. The pickoff autocomplete function is named `handlechange` the dropoff named `handleChangedrop` and the remaining stopoff named `handleChangestop`\
Like in delivery component, per location has a onclick variable named `click` so logic will be.
- Pickup => Click == 1
- Dropoff => Click == 2 
- Stopoff1 => Click == 3 up to 13.

```javascript
   try {
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = latLng.lat),
          (places_data[objIndex].lng = latLng.lng),
          (places_data[objIndex].address = value.label),
          router.push("/map");
        getRateloop();
        getRatewallet();
      } catch (err) {
        const destination = {
          address: value.label,
          lat: latLng.lat,
          lng: latLng.lng,
          id: click,
        };
        coordinate.push(destination);
        router.push("/map");
        getRateloop();
        getRatewallet();
      }
```
The example is the above code. If theres no selected location it will automatically push in array `destination` if theres a data it will search the id based on `click` value then replace the current data.


#### Additonal details
Per destination the user can add another details like `{name,contact_number,notes}`\
The function when you change a name is `updateInputValue`, contact_number is `updateInputValueNumber` and for notes is `updateInputValueAd`\
Per function has the same logic like in autocomplete. If there a data it will replace with the new one.
```javascript
 try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      places_data[objIndex].detailsAdd = evt.target.value;
    } catch (err) {}
```
The above is an example for setting a name.


#### Addtional Stopoff
The Usser can add upto 13 stop destination but he needs to fill up the current stopoff before adding a new one. All stop off are **STATIC** so it means all of them are on display none. The function name is btnAddstop.\
The logic is it will check first all the **VISIBLE** stop off. If one of the visible stopoff is null the autocomplete will turn into red then a message box will appear.
```javascript
    $(".div1:visible")
      .each(function () {
        if (localStorage.getItem("theme_status") === "light") {
          if (
            $(this).find(".css-121v2h3-singleValue").text().length == 0 &&
            $(this).css("display") == "table-footer-group"
          ) {
            $(this)
              .find(".css-riax9o-control")
              .css("border", "1px solid #ED3450");
            window.reactFunction();
            clearstop = 1;
            return false;
          }
        } else {
          if (
            $(this).find(".css-5sz5u5-singleValue").text().length == 0 &&
            $(this).css("display") == "table-footer-group"
          ) {
            $(this)
              .find(".css-kvzrv0-control")
              .css("border", "1px solid #ED3450");
            window.reactFunction();
            clearstop = 1;
            return false;
          }
        }
      })
```
If not a null value, theres a if condition where it will know if the stopoff value is null or not. So for example if the `stop3` is null the 1st stop off will be visible so on and so forth. Example code below. Btw you can change the if condition to looping if you want.
```javascript
      if (!stop3) {
          $(".divStopoff1").appendTo(".divlistStop");
           $(".divStopoff1").attr(
              "style",
            "display: table-footer-group !important"
            );return false;
        else if (!stop4) {
         $(".divStopoff2").appendTo(".divlistStop");
             $(".divStopoff2").attr(
              style","display: table-footer-group !important"
           );
```

#### Custom map in map.js
Custom is map is so very likely in delivery.js. Almost same code.

#### Delete stopoff
If you delete an address it will hide the div that youve selected and remove the value on state depends on what is the value of `click`. The function name is deleteAdd.
```javascript
 $(e.currentTarget)
      .closest(".div1")
      .find(".css-kvzrv0-control")
      .css("border", "1px solid #2c2c2c");
    $(e.currentTarget).closest(".divStopOff").hide();
    $(e.currentTarget).closest(".divStopOff").find(".txtAdditional").val("");
```
The above code is hiding the div then delete the value inside the autoplace complete.
```javascript
    if (e.currentTarget.id == 3) {
      setStop3(null);
    }
    if (e.currentTarget.id == 4) {
      setStop4(null);
    }
    ...
```
The above code is to delete the state data depends on `click` value.

#### Time in map.js
Time have 2 options schedule and same day booking. If the user select scheduled it will require to input a time that is not less than than the current time and date. The function name for schedule is `changeScheduled`. The format time is **24 hr** . The below code is an example. 
```javascript
  function changeScheduled(date) {
    setFormattime(moment(date).format("H:mm"));
    setFormatdate(moment(date).format("YYYY-MM-DD"));
    $(".react-datepicker__input-container input").css("borderColor", "#2c2c2c");
    setScheduledTime(date);
  }
```
For selecting a time, the function name is `selectTime`. divtime2 is the className of scheduledTime. So if you select divTime2 the statusschedule will be true else it will turn to false. Check the code below.
```javascript
 function selectTime(e) {
    if (e.currentTarget.classList.contains("divTime2")) {
      $(".divTime").css("border-color", "#2c2c2c");
      $(".imgChecktime").hide();
      $(e.currentTarget).css("border-color", "#FADD5D");
      $(e.currentTarget).find(".imgChecktime").show();
      $(".react-datepicker__input-container ").attr(
        "style",
        "display: block !important"
      );
      setStatusschedule("true");
    } else {
      $(".divTime").css("border-color", "#2c2c2c");
      $(".imgChecktime").hide();
      $(e.currentTarget).css("border-color", "#FADD5D");
      $(e.currentTarget).find(".imgChecktime").show();
      $(".divTime").css("height", "auto");
      $(".react-datepicker__input-container ").attr(
        "style",
        "display: none !important"
      );
      setStatusschedule("false");
    }
  }
  }
```

#### Weight
The default value of weight is "0-5kg". There are 4 choices `0.5kg , 6-10kg, 11-15kg, 16-20kg`. The function name is getWeight. The logic is, the function will run if the user ** Stop and release the mouse **
```javascript
 function getWeight(e) {
    $(".pWeight").text(e.target.value);
    if (e.target.value < 6) {
      setWeight("0-5KG");
      $(".imgWeight1").fadeIn(150);
      $(".imgWeight2").fadeOut(150);
    } else if (e.target.value < 11) {
      setWeight("6-10KG");
    } else if (e.target.value < 16) {
      setWeight("11-15KG");
      $(".imgWeight1").fadeOut(150);
      $(".imgWeight2").fadeIn(150);
    } else if (e.target.value < 21) {
      setWeight("16-20KG");
      $(".imgWeight1").fadeOut(150);
      $(".imgWeight2").fadeIn(150);
    }
  }
  
 function setWeightrate(e) {
    getRateloop();
  }
```

#### Breadown expenses 
The popup will show if you select the **?** icon near in the price. The value of the breakdown is based on the resposne of api for rate. You can console the result if you want.


#### Placing payment
Before you place a payment there are multiple conditions you should not met. If you met the ff of these it will not continue in payment.\
| CONDITION | DEFINITION |
| ------ | ------ |
| Booking > 9 | If the booking is greater than 10. Count is start in 0 |
| $(this).val() == "" | If theres a missing name and contact number |
| $(this).val().length < 11 | If the contact number is invalid |
| if (scheduletime == "")| If scheduled time is null |

If the condition did not met, it will now show the modal. There are 2 options Cod and JgoWallet. If cod is selected you need to select the payment location in dropdown. The payment location data is based on `coordinates` array which is on the global config. Everytime the user click the "Place order" button it will map the `coordinate` array then push the data into new array which is `locationCod`.
```javascript
   var countlocation = 0;
    locationCod.splice(0, locationCod.length);

    const promises = coordinate.map((event) =>
      locationCod.push({
        value: Number(event.id) - 1,
        label: event.address,
      })
    );
```

If the client choose JgoWallet the price should be lower than the wallet balance. The wallet is set in `useffect` function. Check the code below.
```javascript
  const apiUrl_wallet =
      appglobal.api.base_api + appglobal.api.customer_profile;
    axios.post(apiUrl_wallet, {}, options1).then((result) => {
      setWallet(result.data.data.get_jgo_wallet.balance);
    });
```
After the user select a payment method. First it will call the api for getting the rate. Why do we need to call the rate first? because we need the price to call the booking api. 
```javascript
        let ratedata = new FormData();
        var i;
        var j;
        ratedata.set("payment_method", payment);
        ratedata.set("weight", weight);
        ratedata.set("pick_up_latitude", coordinate[0].lat);
        ratedata.set("pick_up_longitude", coordinate[0].lng);
        for (i = 1, j = 0; i < coordinate.length; ++i, ++j) {
          ratedata.set(
            "drop_off_locations[" + j + "]" + "[drop_off_latitude]",
            coordinate[i].lat
          );
          ratedata.set(
            "drop_off_locations[" + j + "]" + "[drop_off_longitude]",
            coordinate[i].lng
          );
          ratedata.set(
            "drop_off_locations[" + j + "]" + "[booking_order]",
            i.toString()
          );
        }
```
Next is calling the api for booking. Code below ( Not complete please check the code manually )
```javascript
        const apiUrl_rate =
          appglobal.api.base_api + appglobal.api.calculate_rate;
        const apiUrl = appglobal.api.base_api + appglobal.api.booking;

        axios
          .post(apiUrl_rate, ratedata, options)
          .then((result) => {
            formdata.set("price", parseFloat(result.data.price));

            var price = parseFloat(result.data.price);

            axios
              .post(apiUrl, formdata, options)
              .then((result) => {
                for (var pair of formdata.entries()) {
                  console.log(pair[0], pair[1]);
                }
                console.log(result);
```
If theres an error. All error goes to `.catch((err)` if none it will proceed to `profile.js`

### Getting the rate
There are 2 functions for rate 1 for cod and Jgowallet. For cod the function name is `getRateloop();` for JgoWallet `getRatewallet();`\
The following scenario will trigger the rate function.

- Add address
- Delete address 
- Change address
- 1st run of the page
- Change weight


# Dashboard
In the dashboard page. You can view all the data in Bookings, Profile and your wallet ballance. All of the data are loading in `useffect` function. 

### Booking in dashboard
In booking tab you can see the number of all total bookings and ongoing bookings. All of the data again are loaded in `useeffect` function.\
In total bookings I get the total count of array in the api. The api that i used is `const apiUrl = appglobal.api.base_api + appglobal.api.transaction_history;` and the count data is `setCount(result.data.meta.total);`.\
In ongoing bookings the api that I used is `const apiUrlall = appglobal.api.base_api + appglobal.api.all_booking;` and the active count is `setACtivecount(result.data.count);` basically all the data are loaded in the api. If you want you can console.log() the response to view the result.\

#### Type of booking
There 3 options to view the booking. All, Scheduled and Same day. Every bookings have seperated `<div>`. So it means all sameday and scheduled div are using display none and the ALL div default as block. So if you select a booking table type it will show what youve selected and the remaining table.\
Also in dashboard you can search using tracking number or location. ** Search works only in table ** not technically in all result of api. If the lenght is null the paginate will hide and the text "No Result found" will show.
```javascript
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
```
#### Table data
Since every table have seperated div, it means they have their own state thats hold every data.
| STATE / VARIABLE | TABLE |
| ------ | ------ |
| tabledata | All booking |
| tableactivebooking | Active booking |
| tablescheduled | Scheduled booking |

The project used map function to populate the table.
```javascript
tabledata.map((event, index)
```
In table theres a table row named `Action` in this part you can `View, track, cancel or rebook` the selected booking.
| STATUS | ACTION |
| ------ | ------ |
| Complete | View |
| On hold | Rebook and Cancel |
| Ongoing | Track and Cancel |

#### View booking
When the user click the view button it will show the `Driver_name, number, price, booking_date and locations`. The function name is `viewBook`.\
Basically it will get the tracking id in table on which row youve selected then pass the tracking_id into the api then setting all the needed state. \
** Dont change the table format some function will not work **
```javascript
var trackid = $(e.currentTarget)
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(4)")
      .html();
```
The above code is getting the tracking id in the table.

#### Track booking
Its the same logic like view booking it will get the tracking_id in table then it will proceed to another page `/tracking/$tracking_id_here`. \
If the status is not `In transit or Ongoing` a message box will appear ( cannot track the current booking ) \
 ** Dont change the table format some function will not work **
```javascript
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
```

#### Cancel booking 
In cancelling a booking theres a condition that if the status is `Driver found` and the `Duration` is longer than 30 secs you cannot cancel the booking.
```javascript
 var addresstable = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(5)")
      .html();
```
The above code is to get the current date of the booking
```javascript
   var statustable = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(6)")
      .html();
```
The above code is to get the status of the booking.\
Now we have to get the difference between the date today and the given date.
```javascript
   var now = moment(new Date()); //todays date
   var end = moment(addresstable); // another date
   var duration = now.diff(end, "seconds");
```
If the duration is greater than 30 and the status is `driver found` you cannot cancel the booking. If not, we wil get the `tracking_id` and the `driver_id`.
```javascript
 var trackid = $(e.currentTarget)
        .parent("div")
        .parent("td")
        .parent("tr")
        .children()
        .closest("td:nth-child(2)")
        .html();
```
The above code is to get the tracking_id
```javascript
  var driverid = $(e.currentTarget)
        .parent("div")
        .parent("td")
        .parent("tr")
        .children()
        .closest("td:nth-child(3)")
        .html();
```
The we have to pass the variable to the state so we can call the api.
```javascript
  setBookingidtable(trackid);
  canceltableid = trackid;
  drivertableid = driverid;
```
After that a modal will popup where you have to type the reason why you want to cancel the booking. The function name for changing the reasong is `handlechangeCance`. If the user selected the yest button it will call the `cancelBook` function.

#### Rebook function
In rebook we need to get the bookid, call the api then pass the bookid to the params of the api. The function name is `rebookTable`.
```javascript
 var bookid = $(e.currentTarget)
      .parent("div")
      .parent("td")
      .parent("tr")
      .children()
      .closest("td:nth-child(2)")
      .html();
    rebooktableid = bookid;
```
Take note, if the booking id is the same as latest booking id it will show the modal animation "Searching for driver" then the timer will start. The timer is set to 120secs after 120secs it will automatically hold the latest booking. The latest booking id is set in `useeffect`.
```javascript
   setLatestbook(result.data.data.created_at);
```
The above code is to get the latest booking id.
```javascript
 $("#exampleModal").modal("show");
 $("#modalRebook").modal("hide");
 localStorage.setItem("latestbookingdate", moment(new Date()));
 holdTimer();
```
Thea above code is the know if the booking id and latest is match.

### Profile page
Basically all details in profile page are loaded in `useeffect`
```javascript
    const apiUrl1 = appglobal.api.base_api + appglobal.api.customer_profile;
    axios
      .post(apiUrl1, { id: AuthService.getId() }, options)
      .then((result) => {
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
```
If the user edit then save theres a condition that you should met. \
`Fname, Lname, Email, mobile, address` should not be null. After that variable `clear` should be 0. Clear = 1 means button are already click. The function name is `saveProf`. IF the api response is success it will automaricaly and set the localstorage `saveprof` to 1.
```javascript
localStorage.setItem("saveprof", "1");
  window.location.reload();
```
The saveprof is set to 1 so when the page reloaded theres a condition that if the value is 1 a mesasge box will appear.
```javascript
  if (localStorage.getItem("saveprof") == 1) {
      successMessage();
      localStorage.removeItem("saveprof");
    }
```

### Settings page
In settings tab you can change the theme and change your password.\

#### Theme
When using light theme all codes are loaded in `public/Script/jgo.js`. All of them are hard coded, once the user switch the theme it will reload the page then set the current theme. Theme is set in localStorage so it means the theme is atumatically applied when the user view the page.
```javascript
  $("#switch").click(function () {
    if ($(this).prop("checked") == true) {
      var theme = true;
      localStorage.setItem("theme", JSON.stringify(theme));
      localStorage.setItem("theme_status", "light");
      window.location.reload();
    } else if ($(this).prop("checked") == false) {
      var theme = false;
      localStorage.setItem("theme", JSON.stringify(theme));
      localStorage.setItem("theme_status", "false");
      window.location.reload();
    }
  });
```
And all the css light theme are set on function `light`.

#### Change password
When the user click the change password button a modal will appear. The id of the modal is `modalChangepass`.\
All of the input fields are required. Basically all the state that are bind in the input fields will thrown into the api parameter. The function name is `btnchangepass`

### Payment
The online payment method available for now is Jgowallet. The Jgowallet ballance are loaded in `useefect` function. Its the same api that the project used to get the profile details. `setWallet(result.data.data.get_jgo_wallet.balance);` \
If the user wants to topup all the profile credentials are needed. If incomplete a modal form will appear or else the modal Top . The function name is `topup`.
```javascript
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
```
In Modal topup modal there are 3 choices. `300, 600 and 900` per choices have their own function. `set300, set600 and set900` function. If you select the 300 the state will change to 300 same as 600 and 900.
```javascript
  function set300(e) {
    setTopup("300");
    $(".divPricewallet").css("border-left", "2px solid lightgray");
    $(e.currentTarget).css("border-left", "2px solid #3BCD67");
    $(".spanCheck").css("color", "gray");
    $(e.currentTarget).find(".spanCheck").css("color", "#3BCD67");
  }
```
If the user select and amount then proceed to continue. A function name `goTopup` will trigger. The logic is we have to pass all needed credentials in the form ( Lname, mname and etc ) with the selected amount.
```javascript
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
```
If the response of the api is success it will trigger the hidden form. The hidden form is place below of the `<Componentdidmount>` component.
```javascript
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
```
It will automatically go to paynamics page.

### Support tab
In this tab you can issue a concern to the customer support.\
IF the user click the "Create issue" button it will show a modal that have an input fields `booking_id, title and description`. Title and description are required. Once they succesfully created an issue and open chat button will be available. If they choose to open chat a chatbox will be shown. The chatbox is a component rendered in `component/chat`. In order work the chatbox we need to get the channel_id which is hidden on the table. The function name is `getChannel`
```javascript
 var x = $(e.currentTarget).find("td:nth-child(6)").text();
 channel_id = [`${x}`];
```
The channel_id variable is declared in `../component/map/config"`.  After we fetch the channel_in in the table we will now create a channel in pubnub.\
First we will pass the channel_id in an new variable.
```javascript
const channels = channel_id;
```
Next, We create a channel using the new variable that we created.
```javascript
useEffect(() => {
    pubnub.fetchMessages(
      {
        channels: channels,
      },
  }, [channels]);
```
Next, We will fetch the messages in the channel. While we fethe the data I added a scroll function which automatically scroll down everyime a new message appear.
```javascript
 try {
     var x = JSON.parse(JSON.stringify(response.channels[keyName])); 
     
       setLenght(response.channels[channels].length)
      setMessages(response.channels[channels]);
                
      var myscroll = $(".rowChat");
      myscroll.scrollTop(myscroll.get(0).scrollHeight);
     catch (e) {} 
```
The above code is declared using `useeffect` in `component/chat.js`\
There a new function that added that will know if theres another person in your channel. If more than 2 the red circle in the chatbox will turn to green.
```javascript
   presence: function (presenceEvent) {
        
        if (presenceEvent.occupancy > 2) {
          $(".divOnline").css("background-color", "#2E7D32");
        } else {
          $(".divOnline").css("background-color", "#ef5350");
        }
      },
```
If the user open another chat, it will not create another chatbox rather it will remove all the messages in the chatbox and replace with the new that thegram fetch in the new channell. But the thing is it will not remove the old channel it will rather add a new one, so it means you have 2 channel running in the background. So we add another `useeffect` function that will fetch the messages that are only registered in the current channel.
```javacript
 try {
                      var x = JSON.parse(
                        JSON.stringify(response.channels[keyName])
                      );

                      if (x[0].channel == channel_id) {
                    
                        setLenght(response.channels[channels].length)
                        setMessages(response.channels[channels]);
                        if (($(".conChatbox").height() + 400) < 500) {
                          $(".spanCount").show();
                          playSound();
                        }else {
                         
                        }
                      }

                      var myscroll = $(".rowChat");
                      myscroll.scrollTop(myscroll.get(0).scrollHeight);
                    } catch (e) {
```
#### Sending a message
Seding message function is trigger when the user click enter or send button. The function name is `sendMessage`

#Logout
It will route to `logout.js` and call the `api/logout` and remove the localstorage `Authservice.logout` that holds the token then route to the homepage.


# Tracking page
Tracking page are loaded in `pages/tracking/$tracking_id_here`. The tracking number is must be in router.query `  const { number } = router.query;`. It is normal sometimes if you saw the 404 page before the tracking because we have to get the response of the api to load the page. Basically all data are loaded in `useeffect` function. Once its loaded it will map and populate and div.\
In first `useeffect` function it has a state [number]; it means it loaded in the first run of the page.
```javascript
  }, [number]);
```
The `useefect` function that has state [dropoff_loc]. This is to get the all the location then make it visible to the map.
```javascript
  useEffect(() => {
    if (dropoff_loc) {
      {
        dropoff_loc.map((event, index) => {
          const dropoff = {
            id: 4,
            name: "",
            lat: parseFloat(event.drop_off_latitude),
            lng: parseFloat(event.drop_off_longitude),
            icon: "../Image/navigation.png",
          };
          tracks.push(dropoff);
        });
      }
    }
    router.push("/tracking/" + number);
  }, [dropoff_loc]);
```
The `useefect` function that has state [driver_loc]. This is to get the location of the driver and make it visible to the map.
```javascript
 useEffect(() => {
    if (driver_loc) {
      const dropoff = {
        id: 4,
        name: "",
        lat: parseFloat(driver_loc.driver_latitude),
        lng: parseFloat(driver_loc.driver_longitude),
        icon: "../Image/rider.png",
      };
      tracks.push(dropoff);
    }
    router.push("/tracking/" + number);
  }, [driver_loc]);
```
The array that I used based on the code is `tracks`. It is declared in `component/map/config.js`.

#### Refresh page in tracking
Every 10 secs the value is refresh not totally the page. The fucntion is `useefect` but with interval `10000`.

# Driver

Below is the process how the driver will send his profile. The form is composed of 20 field ( 13 required fields )\
**The process of sending the application will be denied if you meet the following.**

  - If the required fields is null
  - If the email is already used.
  - IF the password did not match.
  - If the password is less than 6 and greater than 16
 
 if the validation is okay all state will be reset.
