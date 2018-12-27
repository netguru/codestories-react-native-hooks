import React from 'react'
import { StyleSheet, View } from 'react-native'

import Screen from 'components/Screen'
import Button from 'components/Button'
import Header from 'components/Header/Header.component'
import Text from 'components/Text'
import { centerVH } from 'styles'
import { NavigationPropTypes } from 'app/prop-types'

const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
  },

  startButton: {
    marginTop: 50,
  },

  buttonWrapper: {
    ...centerVH,
  },
})

export default function Home({ navigation }) {
  const onStartPress = () => navigation.navigate('ListFriends')

  return (
    <Screen style={styles.screen}>
      <Header>Secret Santa!</Header>
      <Text emphasized>
        Gather your friends and draw your secret santa. Just press Start and follow the
        instructions.
      </Text>
      <View style={styles.buttonWrapper}>
        <Button style={styles.startButton} label="Start" onPress={onStartPress} />
      </View>
    </Screen>
  )
}

Home.propTypes = {
  navigation: NavigationPropTypes.isRequired,
}
