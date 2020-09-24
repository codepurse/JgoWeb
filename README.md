# Jgo [![Build Status](https://i.ibb.co/tqgywhd/Build-Development-lightgrey.png)](https://travis-ci.org/joemccann/dillinger)
[![Next Js](https://i.ibb.co/CKgz0J3/output-onlinepngtools.png)](https://nextjs.org)

This repository is for the developer of Jgo web app. This is not **publishable** .

### Plugins
You might want to install the below plugins to completely run the web app.

`npm install --save react-google-maps` - **For the map** \
`npm install --save react-google-places-autocomplete`  - **For the autosearch places** \
`npm install --save react-geocode`  - **To get the address based on lat and lng**

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

### Storage

Everthing including lat, lng, address ,dropoff and pickoff are thrown in config.js. It holds the array of lat  lng and the  address `coordinate = [];`

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
