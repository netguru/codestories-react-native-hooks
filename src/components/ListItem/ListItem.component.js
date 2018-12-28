import React, { useEffect } from 'react'
import PT from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from 'components/Text'
import { human } from "react-native-typography";

const styles = StyleSheet.create({
  text: {
    ...human.title1White,
    textAlign: 'center',
  },
})

export default function ListItem({ onPress, value }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  onPress: PT.func,
  value: PT.string.isRequired,
}

ListItem.defaultProps = {
  onPress: () => {},
}
