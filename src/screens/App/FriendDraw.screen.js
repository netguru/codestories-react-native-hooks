import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import Screen from 'components/Screen'
import Header from 'components/Header/Header.component'
import Text from 'components/Text'
import List from 'components/List/List.component'
import { AppContext } from 'contexts/app.context'
import { NavigationPropTypes } from 'app/prop-types'

export default function FriendDraw({ navigation }) {
  const [{ friends }] = useContext(AppContext)

  const selectPerson = (person) => {
    navigation.navigate('DrawnFriend', { personId: person.id })
  }

  return (
    <Screen>
      <Header>Draw a friend!</Header>
      <Text>Select your name from the list to draw a friend.</Text>
      <List data={friends} onSelect={selectPerson} />
    </Screen>
  )
}

FriendDraw.propTypes = {
  navigation: NavigationPropTypes.isRequired,
}
