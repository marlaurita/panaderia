import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens";
import { colors } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";
const CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Cart" screenOptions={{
            headerStyle: {
                backgroundColor: isIOS? colors.secondary : colors.primary,
            },
            headerTintColor: isIOS ? colors.black : colors.white,
            /*headerTitleStyle: {
                fontFamily: 'nunito',
            }*/
        }}>
            <Stack.Screen name="Cart" component={CartScreen} options= {{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default CartNavigator;