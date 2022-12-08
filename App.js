import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import  Quizz  from './data/Screens/Quizz';
import AuthStackNavigator from './data/navigators/AuthStackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
