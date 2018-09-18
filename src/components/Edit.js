import React, { Component } from 'react';
import { ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';
import { captureScreen } from "react-native-view-shot";
import { strings, IMAGE } from '../Lang/Strings';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

class Edit extends Component {

    state = {
        isButtonShow: true
    };

    componentWillMount() {
        console.log(this.props.data);
        
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
                    IMAGE.lastImage = uri;
                    Actions.LastScreen();
                    
                },
                error => console.error("Oops, snapshot failed", error)
                );
          }, 500);

    }

    render() {
        return(
            <ImageBackground
            source={{ uri: this.props.data.uri }}
            style={styles.containerStyle}
            >

            <Draggable 
            isRadius
            renderSize={75} 
            offsetX={0} 
            offsetY={-200} 
            renderShape='image'
            imageSource={this.props.data.myPhoto}
            reverse={false}
            />

             <Draggable 
             isRadius
            renderSize={75} 
            offsetX={0} 
            offsetY={200} 
            renderShape='image'
            imageSource={this.props.data.herPhoto}
            reverse={false}
            />

            <Draggable 
            renderSize={150} 
            offsetX={100} 
            offsetY={0} 
            renderShape='image'
            imageSource={strings.textPhoto}
            reverse={false}
            />

            {this.state.isButtonShow ?
                <TouchableOpacity
                style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => this.screenShot()
                }
                >
                <Image
                source={require('../img/button.png')}
                style={{ }}
                />
                </TouchableOpacity> : 
                null}
            
            </ImageBackground>
        );
    }
}
const styles = {
    containerStyle: {
        width,
        height,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
};

export default Edit;