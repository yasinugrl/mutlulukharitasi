import React from 'react';
import { View, Text } from 'react-native';


export default function Menu() { 
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#9116E4'
        }}>

        <Text style={styles.sectionStyle}>
            Home
        </Text>

        <Text style={styles.sectionStyle}>
            Hakkımızda
        </Text>

        <Text style={styles.sectionStyle}>
            İletişim
        </Text>

        </View>
    );
}

const styles = {
    sectionStyle: {
        color: 'white',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 16,
    }
}