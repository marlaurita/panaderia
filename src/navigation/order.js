import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens";
import { colors } from "../constants/themes/colors";
import OrderScreen from "../screens/orders";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";
const OrderNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Orders" screenOptions={{
            headerStyle: {
                backgroundColor: isIOS? colors.secondary : colors.primary,
            },
            headerTintColor: isIOS ? colors.black : colors.white,
            /*headerTitleStyle: {
                fontFamily: 'nunito',
            }*/
        }}>
            <Stack.Screen name="Orders" component={OrderScreen} options= {{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default OrderNavigator;