import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../pages';
import {createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
