import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../views/screens/HomeScreen'

const stackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(stackNavigator)