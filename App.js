import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateAccount, Home, SignIn, Setting, Details,Search } from './Src/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const AuthStack = createStackNavigator();   // create header
const Tabs = createBottomTabNavigator();     // create footer
const HomeStack = createStackNavigator();   // header for Home screen
const SettingStack = createStackNavigator();    // header for profile screen  optional

const HomeStackScreen = () =>{
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home}/>
      <HomeStack.Screen name='Details' component={Details}/>
    </HomeStack.Navigator>
  )
}

const SettingStackScreen = () =>{
  return(
    <SettingStack.Navigator>
      <SettingStack.Screen name='Setting' component={Setting}/>
      <SettingStack.Screen name='Search' component={Search}/>
    </SettingStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={HomeStackScreen}/>    
        <Tabs.Screen name='Setting' component={SettingStackScreen}/>
      </Tabs.Navigator>
      {/*<AuthStack.Navigator>
        <AuthStack.Screen name="Signin" component={SignIn} options={{title: 'Sign In'}} />
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title: 'Create Account'}} />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
