import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen, Quizz } from '../Screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Quiz" component={Quizz} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;