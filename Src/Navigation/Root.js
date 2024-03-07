import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import SpleshScreen from '../Screens/SpleshScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
import AddtoCartScreen from '../Screens/AddtoCartScreen';
import BuynowScreen from '../Screens/BuynowScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="SpleshScreen" component={SpleshScreen} />
            <stack.Screen name="LoginScreen" component={LoginScreen} />
            <stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </stack.Navigator>
    );
};

const HomeStack = () => {
    return (

        <tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Product') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // Return the appropriate icon component
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <tab.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
            <tab.Screen name="Profile" component={ProfileScreen} />
        </tab.Navigator>

    );
};

const Root = () => {
    return (
        <NavigationContainer>

            <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <stack.Screen name="AuthStack" component={AuthStack} />
                <stack.Screen name="HomeStack" component={HomeStack} />
                <stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen} />
                <stack.Screen name='AddtoCartScreen' component={AddtoCartScreen} />
                <stack.Screen name='BuynowScreen' component={BuynowScreen} />

            </stack.Navigator>

        </NavigationContainer>
    );
};

export default Root;
;
