import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import LoginView from "../../view/LoginView"
import HomeView from "../../view/HomeView"
import OsListView from "../../view/OsListView"
import OsNewView from "../../view/OsNewView"



const Drawer = createDrawerNavigator()

export default menuDrawerNavigator = ()=>{



    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="home">
                <Drawer.Screen name="login" component={LoginView} 
                options={{headerTitle: ""}}/>
                <Drawer.Screen name="home" component={HomeView} 
                options={{headerTitle: ""}}/>
                <Drawer.Screen name="listOS" component={OsListView} 
                options={{headerTitle: ""}}/>
                <Drawer.Screen name="newOS" component={OsNewView} 
                options={{headerTitle: ""}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )

}