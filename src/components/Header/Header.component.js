import React from 'react'
import { StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'

import Text from 'components/Text'

const styles = StyleSheet.create({
  text: {
    ...iOSUIKit.largeTitleEmphasizedWhite,
  },
})

export default function Header({ children, style, ...props }) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  )
}
