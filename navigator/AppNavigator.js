import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/MainScreen.js';
import EmojiScreen from '../screens/EmojiScreen.js';
import ThanksScreen from '../screens/ThanksScreen.js';
const AppNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen,
  },
  EmojiScreen: {
    screen: EmojiScreen,
  },
  ThanksScreen: {
    screen: ThanksScreen,
  },
},{
  initialRouteName: 'EmojiScreen',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default createAppContainer (AppNavigator);
