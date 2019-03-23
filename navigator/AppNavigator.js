import {createStackNavigator, createAppContainer} from 'react-navigation';
import {HomeScreen} from '../screens/MainScreen';
const AppNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer (AppNavigator);
