import React, { useContext, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationPropTypes } from 'app/prop-types'
import Screen from 'components/Screen'
import { AppContext, updateFriend } from 'contexts/app.context'
import DrawResult from 'components/DrawResult'

export default function DrawnFriend({ navigation }) {
  const [{ friends }, dispatch] = useContext(AppContext)

  const personId = navigation.getParam('personId')
  const person = friends.filter((friend) => friend.id === personId)[0]

  const drawFriend = () => {
    const drawnFriends = friends
      .map((friend) => friend.drawnFriendId)
      .filter((friend) => friend !== null)
      .map((friendId) => friends.filter((friend) => friendId === friend.id)[0].name)
    const availableFriends = friends.filter(
      (friend) => friend.id !== person.id && !drawnFriends.includes(friend.id),
    )
    const friend = availableFriends[Math.floor(Math.random() * availableFriends.length)]
    dispatch(updateFriend({ ...person, drawnFriendId: friend.id }))
  }

  useEffect(() => {
    drawFriend()
  }, [])

  const goBack = () => navigation.goBack()

  return (
    <Screen>
      {person.drawnFriendId ? (
        <DrawResult onDone={goBack} personId={personId} />
      ) : (
        <ActivityIndicator />
      )}
    </Screen>
  )
}

DrawnFriend.navigationOptions = {
  headerLeft: null,
  gesturesEnabled: false,
}

DrawnFriend.propTypes = {
  navigation: NavigationPropTypes.isRequired,
}
