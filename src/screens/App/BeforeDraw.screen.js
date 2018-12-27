import React from 'react'
import { StyleSheet } from 'react-native'
import Screen from 'components/Screen'
import Header from 'components/Header/Header.component'
import Text from 'components/Text'
import Button from 'components/Button'
import { NavigationPropTypes } from 'app/prop-types'

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
  },

  button: {
    marginTop: 50,
  },

  textMargin: {
    marginTop: 20,
  },
})

export default function BeforeDraw({ navigation }) {
  const onReadyPress = () => navigation.navigate('FriendDraw')

  return (
    <Screen>
      <Header style={styles.header}>Awesome.</Header>
      <Text emphasized>Now pass the phone to the first person, so they can draw a friend!</Text>
      <Text style={styles.textMargin}>Press the button below when ready.</Text>
      <Button label="Ready to draw" style={styles.button} onPress={onReadyPress} />
    </Screen>
  )
}

BeforeDraw.propTypes = {
  navigation: NavigationPropTypes.isRequired,
}
