import React from 'react'
import PT from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from 'components/Text'

const styles = StyleSheet.create({
  container: {
    marginRight: 10
  }
})

export default function HeaderButton({ style, title, ...props }) {
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

HeaderButton.propTypes = {
  title: PT.string.isRequired,
}
