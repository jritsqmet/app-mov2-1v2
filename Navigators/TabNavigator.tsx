import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import WelcomeScreen from "../screens/WelcomeScreen";
import GaleriaScreen from "../screens/GaleriaScreen";

const Tab= createMaterialBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={ WelcomeScreen}/>
            <Tab.Screen name= 'Galeria' component={ GaleriaScreen} 
                options={{
                    tabBarLabel: 'Imágenes',
                    tabBarIcon: ()=>(
                        <MaterialCommunityIcons name="skull-crossbones-outline" size={29} color="#2c3e50" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function BottomTabNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}