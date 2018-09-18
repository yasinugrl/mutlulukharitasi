import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import Form from './components/Form';
import Map from './components/Map';
import Edit from './components/Edit';
import Menu from './components/Menu';

import FinalScreen from './components/FinalScreen';

const { width, height } = Dimensions.get('window');


export default class Root extends  Component {

    render() {
        return(
            <Router
            navigationBarStyle={styles.navBar}
            >
                <Scene
                key='Root'
                >
                    <Scene
                    key='Form'
                    component={Form}
                    hideNavBar
                    initial
                    />

                    <Scene
                    key='Map'
                    component={Map}
                    hideNavBar
                    />

                    <Scene
                    key='Edit'
                    component={Edit}
                    hideNavBar
                    />

                    <Drawer
                    key='LastScreen'
                    contentComponent={Menu}
                    drawerPosition="left"
                    drawerImage={require('./img/menu.png')}
                    drawerWidth={(width / 2 + 100)}
                    >

                        <Scene
                        key='FinalScreen'
                        component={FinalScreen}
                        hideNavBar
                        />
                    
                    </Drawer>


                </Scene>
            </Router>
        );
    }
}

const styles = {
    navBar: {
        backgroundColor: '#6704AA',
    }
}