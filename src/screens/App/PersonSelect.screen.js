import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Screen from 'components/Screen'
import Header from 'components/Header/Header.component'
import Text from 'components/Text'
import List from 'components/List/List.component'
import { AppContext, removeEmptyFriends } from 'contexts/app.context'
import { NavigationPropTypes } from 'app/prop-types'
import Button from 'components/Button'

const styles = StyleSheet.create({
  list: {
    marginTop: 100,
  },

  button: {
    marginTop: 100,
  },
})

export default function PersonSelect({ navigation }) {
  const [{ friends }, dispatch] = useContext(AppContext)

  useEffect(() => {
    dispatch(removeEmptyFriends())
  }, [])

  const selectPerson = (person) => {
    navigation.navigate('DrawnFriend', { personId: person.id })
  }

  const friendsWithoutDraw = friends.filter((friend) => friend.drawnFriendId === null)

  const renderDrawList = () => (
    <>
      <Header>Draw a friend!</Header>
      <Text>Select your name from the list to draw a friend.</Text>
      <List style={styles.list} data={friendsWithoutDraw} onSelect={selectPerson} />
    </>
  )

  const goToStart = () => navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0)

  const renderAllDrawnInfo = () => (
    <>
      <Header>All done!</Header>
      <Text emphasized>Everyone has their draw. Have fun!</Text>
      <Button style={styles.button} label="Start again" onPress={goToStart} />
    </>
  )

  return <Screen>{friendsWithoutDraw.length ? renderDrawList() : renderAllDrawnInfo()}</Screen>
}

PersonSelect.propTypes = {
  navigation: NavigationPropTypes.isRequired,
}
