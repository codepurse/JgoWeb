# Jgo [![Build Status](https://i.ibb.co/tqgywhd/Build-Development-lightgrey.png)](https://travis-ci.org/joemccann/dillinger)
[![Next Js](https://i.ibb.co/CKgz0J3/output-onlinepngtools.png)](https://nextjs.org)

This repository is for the developer of Jgo web app. This is not **publishable** .

### Plugins
You might want to install the below plugins to completely run the web app.

`npm install --save react-google-maps` - **For the map** \
`npm install --save react-google-places-autocomplete`  - **For the autosearch places** \
`npm install --save react-geocode`  - **To get the address based on lat and lng**
`npm install react-leaflet`  - **React laeflet**
`npm install leaflet`  - **React leaflet dependency**

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

![alt text](https://i.ibb.co/jbKSnj3/2020-09-24-13-22-00-localhost-59bc89e112d8.png)


#### Additonal details
Per destination the user can add another details like `{name,contact_number,blk_add}`

#### Addtional Stopoff
The client can add 10 stop destination but he needs to fill up the current stopoff before adding a new one. 

#### Category / Addtional Service
The client can choose only one.
