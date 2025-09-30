import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GenerateScreen from '../screens/GenerateScreen';
import OutputScreen from '../screens/OutputScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GenerateScreen" component={GenerateScreen} />
        <Stack.Screen name="OutputScreen" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
