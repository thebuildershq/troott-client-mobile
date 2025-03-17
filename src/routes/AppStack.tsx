import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/Home";
import Search from "../screens/tabs/Search";
import Library from "../screens/tabs/Library";
import Profile from "../screens/tabs/Profile";
import { palette } from "../designSystem/theme/palette";
import Icon from "react-native-vector-icons/FontAwesome";
import Explore from "../screens/tabs/Explore";
import { fonts } from "../designSystem/theme/font";

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: palette.baseGreen,
        tabBarInactiveTintColor: palette.baseWhite,
        tabBarStyle: {
          backgroundColor: palette.baseGrey,
          borderColor: "transparent",
          position: "absolute",
          height: 100,
          paddingTop: 10,
          bottom: 0, 
          fontFamily: fonts.family.matterMedium,
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
        options={{ tabBarLabel: "Home" }}
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
