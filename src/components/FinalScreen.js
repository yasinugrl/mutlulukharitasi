import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Platform, Linking } from 'react-native';
import Share from 'react-native-share';
import { strings, IMAGE } from '../Lang/Strings';


import Button from '../commons/Button';


const { width, height } = Dimensions.get('window');


class FinalScreen extends Component {
    render() {

        const image = 'data:image/png;base64,' + IMAGE.lastImage;
    
        const shareOptionsImage = {
          url: image,
          type: 'image/png'
         };


        const shareOptionsAppShare = {
          title: strings.shareTitle,
          message: strings.shareMessage,
          url: Platform.OS === 'ios' ? 'https://itunes.apple.com/us/app/testyasin/id1360618580' :
          'https://play.google.com/store/apps/details?id=com.mutlulukharitasi',
        };


        return(
        <View style={styles.content}>
            <Image 
            source={require('../img/logo.png')}
            style={{   marginTop: 20}}
            />

            <Image 
            source={{ uri: IMAGE.lastImage }}
            style={styles.imageStyle}
            />

            <View style={styles.back}>

            <Button
            onPress={() => Share.open(shareOptionsImage)}
            text={strings.shareImage}
            backgroundColor={'#E76E0E'}
            />

            <Button
            onPress={() => Share.open(shareOptionsAppShare)}
            text={strings.shareApp}
            backgroundColor={'#E76E0E'}
            />

            <Text
            onPress={() => Linking.openURL(Platform.OS === 'ios' ? 'https://itunes.apple.com/us/app/testyasin/id1360618580' :
            'https://play.google.com/store/apps/details?id=com.mutlulukharitasi')}
            style={{ marginTop: 20 }}
            >{strings.givePoint}</Text>

            </View>

            <Text
            style={{ color: 'white', textAlign: 'center', fontSize: 10, marginTop: 30 }}
            >{strings.bottomTex}</Text>

        </View>
        );
    }
}

const styles = {
    back: {
        backgroundColor: 'white',
        width: width - 40,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
                
    },
    imageStyle: { 
        width: width*0.33, 
        height: height*0.25, 
        marginTop: 20 ,
        borderWidth: 3,
        borderColor: '#E76E0E',
        marginBottom: 20
    },

    content: {
        backgroundColor: '#6704AA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
}

export default FinalScreen