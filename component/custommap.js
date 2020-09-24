import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import "../component/map/config";
import Geocode from "react-geocode";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            Geocode.setApiKey("AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4");
            const refs = {}

            this.setState({
                position: null,
                onMarkerMounted: ref => {
                    refs.marker = ref;
                },
                onPositionChanged: () => {
                    const position = refs.marker.getPosition();
                    
                    console.log(position.lat());
                    Geocode.fromLatLng(position.lat(), position.lng()).then(
                        response => {
                          const address = response.results[0].formatted_address;
                          console.log(address);
                          global.config.place.deliver.pickoff = address;
                          global.config.place.deliver.pickofflat = position.lat();
                          global.config.place.deliver.dropofflang = position.lng();
                        },
                        error => {
                          console.error(error);
                        }
                      );
                }
            })  
            
        },
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 14.6091, lng: 121.0223 }}>
        {props.isMarkerShown && <Marker position={{ lat: 14.6091, lng: 121.0223 }} draggable={true} ref={props.onMarkerMounted} onPositionChanged={props.onPositionChanged} />}
    </GoogleMap>
    )

class custommap extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    render() {
        return (
            <div>
                <MyMapComponent isMarkerShown={true} />
                
            </div>
        )
    }
}


export default custommap;
