import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Button extends Component {



    render() {
        return(
            <TouchableOpacity style={{
                width: width*0.71,
                height: height*0.07,
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#53008C',
                marginTop: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onPress={() => this.props.onPress()}>
            <Text style={{ color: 'white' }}>{this.props.text}</Text>

            </TouchableOpacity>

        );
    }
}

const styles = {

};

export default Button;