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
All api's are declared on`/services/auto.service.js`

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


### Custom Search
If the address is not available in the autosearch the user can click the map icon beside of the search bar. The popup map will show and the user can drag the marker on the map and click set. It will get the latitude, longitude and the geocode address based on the coordinates.

```javascript
   onPositionChanged: () => {
      const position = refs.marker.getPosition();
      console.log(position.lat());
      Geocode.fromLatLng(position.lat(), position.lng()).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log(address);
          global.config.place.deliver.pickoff = address;
          global.config.place.deliver.pickofflat = position.lat();
          global.config.place.deliver.dropofflang = position.lng();
        },
        (error) => {
          console.error(error);
        }
      );
    };
```

Im using react-google-maps, so the issue is it cannot render 2 maps in the same page. So in custom search in  `/map` I used react-leaflet. The map component was rendered using 
`Dynamic from "next/dynamic` since NextJs is SSR.

```javscript
const Leaflet = dynamic(
    () => import('../map/leafletmap'),
    { ssr: false }
  )
```

### Storage

Everthing including lat, lng, address ,dropoff and pickoff are thrown in config.js. It holds the array of lat  lng and the  address `coordinate = [];`
When the user type the needed details in `/delivery` the data will be thrown in localstorage.

```javacript
    localStorage.setItem("address", address.label);
    localStorage.setItem("addressDrop", addressDrop.label);
    localStorage.setItem("pickofflat", coordinates.lat);
    localStorage.setItem("pickofflng",coordinates.lng);
    localStorage.setItem("dropofflat",coordinatesDrop.lat);
    localStorage.setItem("dropofflng", coordinatesDrop.lng);
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

The coordinates given by the user will automatically render the driver route in the map. The destination will be on **alphabetical letters**. The map can render 15 routes but for now the maximus is 3 routes. **Since the map needs coordinates before its load; I used `localstorage` to get the first input of user in dropoff and pickoff in `/delivery` so whenever the user refresh the site the pickoff, dropoff and map are already have a value.** Check the storage section of this readme.

![alt text](https://i.ibb.co/C8HDLxL/2020-10-14-14-20-44-localhost-fe21694942f5.png)


#### Additonal details
Per destination the user can add another details like `{name,contact_number,blk_add}`

#### Addtional Stopoff
The client can add 10 stop destination but he needs to fill up the current stopoff before adding a new one. 

#### Category / Addtional Service
The client can choose only one.


# Driver

Below is the process how the driver will send his profile. The form is composed of 20 field ( 13 required fields )\
**The process of sending the application will be denied if you meet the following.**

  - If the required fields is null
  - If the email is already used.
  - IF the password did not match.
  - If the password is less than 6 and greater than 16
 
 if the validation is okay all state will be reset.
