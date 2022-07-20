import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import TabNavigator from './tab';
import AuthNavigator from './auth';


const AppNavigator = ()=> {
    const userId = useSelector((state) => state.auth.userId);
    return (
        //<SafeAreaView>
            <NavigationContainer>
                {userId ? <TabNavigator /> : <AuthNavigator/>}
            </NavigationContainer>
        //</SafeAreaView>
    )
}

export default AppNavigator;