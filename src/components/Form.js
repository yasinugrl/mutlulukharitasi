import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../commons/Button';
import { strings } from '../Lang/Strings';
import RNGooglePlaces from 'react-native-google-places';
import ImagePicker from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');


class Form extends Component {

    state = {
        yourLocation: '',
        herLocation: '',
        yourImgOk: require('../img/ok.png'),
        herImgOk: require('../img/ok.png'),
        yourLongLat: [],
        herLongLat: [],
        myPhoto: '',
        herPhoto: ''
    }

    componentWillMount() {
        this.setState({
            yourLocation: strings.location,
            herLocation: strings.herLocation,
        })
    }

    renderSection(text, onPress, img) {
        return(
            <View style={styles.section}>
            <TouchableOpacity
                onPress={onPress}
                style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}
            >
                    
                    <Text style={{ textAlign: 'center', flex: 9 }}>{text}</Text>

                    <Image
                    source={img}
                    style={{}}
                    />

            </TouchableOpacity>

            </View>
        );
    }

    showPhoto(type,text, onPress) {
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                 <Image
                    source={type === 'my' ? this.state.myPhoto : this.state.herPhoto}
                    style={styles.photoStyle}
                 />

                <Text style={styles.pickerTextStyle}>{text}</Text>
            </TouchableOpacity>
            
        );
    }

    renderPickerButton(text, onPress) {
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles.pickerButtonStyle}>
                    <Image
                    source={require('../img/add.png')}
                    style={{}}
                    />
                </View>
                <Text style={styles.pickerTextStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }

    openSearchModal(type) {
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            if(type === 'my') {
                this.setState({ 
                    yourLocation: place.name ,
                    yourImgOk: require('../img/check.png'),
                    yourLongLat: [place.latitude, place.longitude]
                });
            } else {
                this.setState({ 
                    herLocation: place.name,
                    herImgOk: require('../img/check.png'),
                    herLongLat: [place.latitude, place.longitude]
                });
            }
            
        })
        .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    openImagePicker(type) {
    
        var options = {
            title: strings.title,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
            takePhotoButtonTitle: strings.takePhotoButtonTitle,
            chooseFromLibraryButtonTitle: strings.chooseFromLibraryButtonTitle,
            cancelButtonTitle: strings.cancelButtonTitle,
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.5
        };

        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else {
            let source = { uri: response.uri };

            if (type === 'my') {
                this.setState({
                    myPhoto: source
                });
            } else{
                this.setState({
                    herPhoto: source
                });
            }
             
        }
        });
    }

    render() {
        return(
            <ImageBackground
            source={require('../img/bg.png')}
            style={{ width, height, alignItems: 'center',
            justifyContent: 'center' }}
            >

            <Image
            source={require('../img/logo.png')}
            />

           {this.renderSection(
               this.state.yourLocation,
               () => this.openSearchModal('my'),
               this.state.yourImgOk
               )}

           {this.renderSection(
               this.state.herLocation,
               () => this.openSearchModal('her'),
               this.state.herImgOk
               )}
            
            <View style={styles.PickerMainViewStyle}>
                { this.state.myPhoto !== '' ?
                    this.showPhoto(
                        'my',
                        strings.yourPhoto,
                        () => this.openImagePicker('my')
                    ) 
                    :
                    this.renderPickerButton(
                        strings.yourPhoto,
                        () => this.openImagePicker('my')
                        
                        )
                }


                { this.state.herPhoto !== '' ?
                    this.showPhoto(
                        'her',
                        strings.herPhoto,
                        () => this.openImagePicker('her')
                    ) :
                    this.renderPickerButton(
                    strings.herPhoto,
                    () => this.openImagePicker('her')
                    )
                } 

            </View>

            <Button
            onPress={() => Actions.Map({ 
                data: {
                    yourLongLat: this.state.yourLongLat,
                    herLongLat: this.state.herLongLat,
                    myPhoto: this.state.myPhoto,
                    herPhoto: this.state.herPhoto
                }
            })
            }
            text={strings.buttonText}
            />
            
            </ImageBackground>
        );
    }
}

const styles = {
    photoStyle: {
        width: width*0.24,
        height: width*0.24,
        borderRadius: (width*0.24) / 2,
    },
    pickerTextStyle: { 
        marginTop: 10, 
        color: 'white', 
        width: width*0.24, 
        textAlign: 'center' 
    },
    PickerMainViewStyle: { 
        flexDirection: 'row', 
        marginTop: 20, 
        width: width*0.59, 
        justifyContent: 'space-between'
    },
    pickerButtonStyle: {
        width: width*0.24,
        height: width*0.24,
        borderRadius: (width*0.24) / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    section: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width: width*0.59,
        height: height*0.05,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
};

export default Form;