import react from "react";
import {Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";
import OrderNavigator from "./order";
import CartNavigator from "./cart";
import { colors } from "../constants/themes/colors";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text
      style={{
        color: focused ? colors.primary : colors.secondary,
        //fontFamily: focused ? "Lato-Bold" : "Lato-Regular",
      }}
    >
      {label}
    </Text>
  );

const TabNavigator = () => {
    return(
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
          }}>
            <BottomTabs.Screen name="ShopTab" component={MainNavigator} 
            options={{tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Shop"), tabBarIcon: ({focused}) => (<IonicIcons name={focused ? 'home' : 'home-outline'} size={20} />)}}>

            </BottomTabs.Screen>


            <BottomTabs.Screen name="CartTab" component={CartNavigator} 
            options={{tabBarLabel:  ({ focused }) => LabelBottomTab(focused, "Cart"), tabBarIcon: ({focused}) => (<IonicIcons name={focused ? 'cart' : 'cart-outline'} size={20} />)}}>

            </BottomTabs.Screen>

            <BottomTabs.Screen name="OrderTab" component={OrderNavigator} 
            options={{tabBarLabel:  ({ focused }) => LabelBottomTab(focused, "Order"), tabBarIcon: ({focused}) => (<IonicIcons name={focused ? 'file-tray-full' : 'file-tray-outline'} size={20} />)}}>

            </BottomTabs.Screen>

        </BottomTabs.Navigator>
    )
}

export default TabNavigator;