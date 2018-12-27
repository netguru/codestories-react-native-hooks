import React, { useContext, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationPropTypes } from 'app/prop-types'
import Screen from 'components/Screen'
import Header from 'components/Header/Header.component'
import { AppContext, updateFriend } from 'contexts/app.context'

export default function DrawnFriend({ navigation }) {
  const [{ friends }, dispatch] = useContext(AppContext)

  const personId = navigation.getParam('personId')
  const person = friends.filter((friend) => friend.id === personId)[0]

  const getRandomOpener = () => ['Awesome', 'Great', 'Fantastic'][Math.floor(Math.random() * 3)]
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

  const drawnFriend = friends.filter((friend) => friend.id === person.drawnFriendId)[0]

  return (
    <Screen>
      {drawnFriend ? (
        <Header>
          {getRandomOpener()}, {person.name}, you drew {drawnFriend.name}.
        </Header>
      ) : (
        <ActivityIndicator />
      )}
    </Screen>
  )
}

DrawnFriend.propTypes = {
  navigation: NavigationPropTypes.isRequired,
}
