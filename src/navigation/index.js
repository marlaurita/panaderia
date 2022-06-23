import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './tab';


const AppNavigator = ()=> {
    return (
        //<SafeAreaView>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        //</SafeAreaView>
    )
}

export default AppNavigator;