import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import home from '../screens/Home/home';
import profile from '../screens/Profile/profile';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

const RootBottom = () =>{
    return(
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#33cc33"
            inactiveColor="#ff3333"
            barStyle={{ backgroundColor: '#ffffb3' }}
        >
            <Tab.Screen name="Home" component={home} 
                options={{
                    tabBarIcon:({color}) =>(
                        <Icon name = 'house-user' color={color} size={26}/>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={profile}
                options={{
                    tabBarIcon:({color}) =>(
                        <Icon name ="user-circle" color ={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default RootBottom;
