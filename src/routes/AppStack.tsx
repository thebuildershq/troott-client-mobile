import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/Home";
import Search from "../screens/tabs/Search";
import Library from "../screens/tabs/Library";
import Profile from "../screens/tabs/Profile";
import { palette } from "../designSystem/theme/palette";
import Icon from "react-native-vector-icons/FontAwesome";
import Explore from "../screens/tabs/Explore";
import { fonts } from "../designSystem/theme/font";
import { padding } from "../designSystem/theme/padding";
import { sizing } from "../designSystem/theme/sizing";

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: palette.baseWhite,
        tabBarActiveTintColor: palette.baseGreen,
        tabBarStyle: {
          backgroundColor: palette.baseGrey,
          fontFamily: fonts.family.matterMedium,
          borderColor: "transparent",
          position: "absolute",
          height: sizing.hundred,
          paddingTop: padding.ten,
          bottom: padding.none, 
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 12,
          fontFamily: fonts.family.matterRegular, 
          color: palette.baseWhite,
          textAlign: "center"
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Search") iconName = "search";
          else if (route.name === "Explore") iconName = "compass";
          else if (route.name === "Library") iconName = "book";
          else if (route.name === "Profile") iconName = "user";

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}

        options={{ tabBarLabel: "Home", headerShown: false }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarLabel: "Search" }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ tabBarLabel: "Explore" }}
      />

      <Tab.Screen
        name="Library"
        component={Library}
        options={{ tabBarLabel: "Library" }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}

export default AppStack;
