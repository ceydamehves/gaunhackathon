import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/MainScreen.js';
import EmojiScreen from '../screens/EmojiScreen.js';
const AppNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen,
  },
  EmojiScreen: {
    screen: EmojiScreen,
  },
},{
  initialRouteName: 'EmojiScreen',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default createAppContainer (AppNavigator);
