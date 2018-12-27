import React, { useEffect } from 'react'
import PT from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from 'components/Text'

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },

  selectedText: {
    opacity: 0.8,
  },
})

export default function ListItem({ onPress, selected, value }) {
  console.log(value, selected)
  let textStyles = [styles.text]
  if (selected) textStyles.push(styles.selectedText)

  useEffect(() => {}, [selected])

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyles}>{value}</Text>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  onPress: PT.func,
  selected: PT.bool,
  value: PT.string.isRequired,
}

ListItem.defaultProps = {
  onPress: () => {},
  selected: false,
}
