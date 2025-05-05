import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Participantes"
                component={ParticipantesList}
            />
            <Tab.Screen
                name="Perfil"
                component={UserProfile}
            />

        </Tab.Navigator>
    );
};

export default TabNavigator;