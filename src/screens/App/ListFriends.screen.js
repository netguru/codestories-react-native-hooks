import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import uniqueId from 'lodash.uniqueid'
import Screen from 'components/Screen'
import EditableList from 'components/EditableList'
import Header from 'components/Header/Header.component'
import Text from 'components/Text'
import HeaderButton from 'components/HeaderButton/HeaderButton.component'
import { addFriend, AppContext, updateFriend } from 'contexts/app.context'

const styles = StyleSheet.create({
  screen: {},

  list: {
    marginTop: 50,
  },
})

export default function ListFriends() {
  const [{ friends }, dispatch] = useContext(AppContext)

  const emptyFriendCreator = () =>
    dispatch(addFriend({ id: uniqueId('friend_'), name: '', drawnFriendId: null }))

  if (!friends.length) {
    emptyFriendCreator()
  }

  const onChange = ({ item, newValue }) => {
    dispatch(updateFriend({ ...item, name: newValue }))
  }

  return (
    <Screen style={styles.screen}>
      <Header>Okay, who will participate in the draw?</Header>
      <Text>Don't forget to add yourself!</Text>
      <EditableList
        style={styles.list}
        data={friends}
        valueExtractor={(friend) => friend.name}
        autoFocus
        itemCreator={emptyFriendCreator}
        onInputChange={onChange}
      />
    </Screen>
  )
}

ListFriends.navigationOptions = ({ navigation }) => ({
  headerRight: <HeaderButton title="Next" onPress={() => navigation.navigate('BeforeDraw')} />,
})
