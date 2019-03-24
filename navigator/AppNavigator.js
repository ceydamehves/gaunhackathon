import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/MainScreen.js';
import EmojiScreen from '../screens/EmojiScreen.js';
import EmotionScreen from '../screens/EmotionSearch.js';
import ThanksScreen from '../screens/ThanksScreen.js';
import PlaceScreen from '../screens/PlaceScreen.js';
const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: HomeScreen,
    },
    EmojiScreen: {
      screen: EmojiScreen,
    },
    EmotionSearch: {
      screen: EmotionScreen,
    },
    ThanksScreen: {
      screen: ThanksScreen,
    },
    PlaceScreen: {
      screen: PlaceScreen,
    },
  },
  {
    initialRouteName: 'EmojiScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer (AppNavigator);
