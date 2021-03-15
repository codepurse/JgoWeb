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
If you use facebook or google to login but your email is not existing you will automatically redirect to signup page with your email, first and last name.
#### Succesfull login
The JWT token will automatically store in localstorage



### Autoplace search
The places are restricted only in the **PH**.
```javascript
 autocompletionRequest={{
    	componentRestrictions: {
    		country: ["ph"],
    	},
    }}
```
The boundaries between places are not yet implemented. 

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
