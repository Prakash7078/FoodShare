// import 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import DonatorsScreen from './src/screens/DonatorsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UpdateData from './src/Components/UpdateData';

const Stack = createNativeStackNavigator();
const App=gestureHandlerRootHOC(()=>{
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Donars" component={DonatorsScreen}/>
          <Stack.Screen name="update" component={UpdateData}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
});
export default App;
