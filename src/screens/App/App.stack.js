import { createStackNavigator } from 'react-navigation'
import { COLOR_BG, COLOR_TEXT } from 'constants/colors'
import Home from './Home.screen'
import ListFriends from './ListFriends.screen'
import BeforeDraw from './BeforeDraw.screen'
import PersonSelect from './PersonSelect.screen'
import DrawnFriend from './DrawnFriend.screen'

const AppStack = createStackNavigator(
  {
    Home,
    ListFriends,
    BeforeDraw,
    PersonSelect,
    DrawnFriend,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLOR_BG,
      },
      headerTintColor: COLOR_TEXT,
    },
  },
)

export default AppStack
