import React, { useContext } from 'react'
import PT from 'prop-types'
import { NavigationPropTypes } from 'app/prop-types'
import { StyleSheet, View } from 'react-native'
import { AppContext } from 'contexts/app.context'
import Header from 'components/Header/Header.component'
import Button from 'components/Button'

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
  },

  button: {
    marginTop: 100,
  },
})

export default function DrawResult({ onDone, personId }) {
  const [{ friends }] = useContext(AppContext)

  const person = friends.filter((friend) => friend.id === personId)[0]
  const getRandomOpener = () => ['Awesome', 'Great', 'Fantastic'][Math.floor(Math.random() * 3)]

  const drawnFriend = friends.filter((friend) => friend.id === person.drawnFriendId)[0]
  const message = `${getRandomOpener()}, ${person.name}, you drew ${drawnFriend.name}.`

  return (
    <View>
      <Header style={styles.header}>{message}</Header>
      <Button style={styles.button} label="I remember my draw." onPress={onDone} />
    </View>
  )
}

DrawResult.propTypes = {
  onDone: PT.func.isRequired,
  personId: PT.string.isRequired,
}
