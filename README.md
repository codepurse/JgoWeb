# Jgo [![Build Status](https://i.ibb.co/tqgywhd/Build-Development-lightgrey.png)](https://travis-ci.org/joemccann/dillinger)
[![Next Js](https://i.ibb.co/CKgz0J3/output-onlinepngtools.png)](https://nextjs.org)

This readme is all about the following pages and components

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

### Login
Before you book you need to login. Login have 3 ways you can either use your normal account, facebook or google.\

#### Login using facebook and google
If you login using facebook or google , the 3rd party api will automatically response the id, email, first_name and last_name. The resonsed data will be automatically transfer to the state. After we transter the response we will call the api register for the 3rd party api and the parameter is the same as the response. IF the email is not registered the modal will be shown but the email, first name and last name is already declared if not the api will response a token. 

#### Succesfull login
The JWT token will automatically store in localstorage

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
In ongoing bookings the api that I used is `const apiUrlall = appglobal.api.base_api + appglobal.api.all_booking;` and the active count is `setACtivecount(result.data.count);` basically all the data are loaded in the api. If you want you can console.log() the response to view the result.



# Driver

Below is the process how the driver will send his profile. The form is composed of 20 field ( 13 required fields )\
**The process of sending the application will be denied if you meet the following.**

  - If the required fields is null
  - If the email is already used.
  - IF the password did not match.
  - If the password is less than 6 and greater than 16
 
 if the validation is okay all state will be reset.
