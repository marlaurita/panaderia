import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens";
import { colors } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";
const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
            headerStyle: {
                backgroundColor: isIOS? colors.secondary : colors.primary,
            },
            headerTintColor: isIOS ? colors.black : colors.white,
            /*headerTitleStyle: {
                fontFamily: 'nunito',
            }*/
        }}>
            <Stack.Screen name="Categorias" component={CategoriesScreen} options= {{headerShown: false}}/>
            <Stack.Screen name="Products" component={ProductsScreen} options={{title: "Pan disponible"}}/>
            <Stack.Screen name="ProductDetail" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;