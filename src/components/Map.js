import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { captureScreen } from "react-native-view-shot";

const { width, height } = Dimensions.get('window');

class Map extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
    }
    componentWillMount() {
        console.log(this.props.data);

        const { yourLongLat } = this.props.data;


        this.setState({
            region: {
                latitude: yourLongLat[0],
                longitude: yourLongLat[1],
                latitudeDelta: 8,
                longitudeDelta: 8,
            },
            isButtonShow: true
        })
        
    }

    screenShot() {
        this.setState({
            isButtonShow: false
        });

        setTimeout(() => {
            captureScreen({
                format: "jpg",
                quality: 0.8
                })
                .then(
                uri => {
                    console.log("Image saved to", uri);
                    Actions.Edit({ 
                        data: {
                            uri,
                            myPhoto: this.props.data.myPhoto,
                            herPhoto: this.props.data.herPhoto  
                        }
                        });
                },
                error => console.error("Oops, snapshot failed", error)
                );
          }, 500);

    }

    render() {
    const { yourLongLat, herLongLat } = this.props.data;

    const origin = {latitude: yourLongLat[0], longitude: yourLongLat[1]};

    const destination = {latitude: herLongLat[0], longitude: herLongLat[1]};

    const GOOGLE_MAPS_APIKEY = 'AIzaSyAkz2_WcvzWeZ1BS5g_VPl4lU7f-YjHkDk';

        return(
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                <MapView
                style={{ ...StyleSheet.absoluteFillObject }}
                region={this.state.region}
                >
                <Marker 
                coordinate={origin}
                />
                <Marker 
                coordinate={destination} />

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={6}
                    strokeColor="#05B3FD"
                />
                </MapView>

                {this.state.isButtonShow ?
                <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => this.screenShot()
                }
                >
                <Image
                source={require('../img/button.png')}
                style={styles.buttonStyle}
                />
                </TouchableOpacity> : 
                null}


            </View>
        );
    }
}

const styles = {
    touchableStyle: { width: 80, height: 80, alignItems: 'center', justifyContent: 'center' },
    
    buttonStyle: {
        // marginTop: height - 80,
        // marginLeft: width - 80,

    }
};

export default Map