import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categorias" component={CategoriesScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;