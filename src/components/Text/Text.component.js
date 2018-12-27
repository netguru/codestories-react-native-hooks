import React from 'react'
import PT from 'prop-types'
import { Text as RNText, StyleSheet } from 'react-native'
import { iOSUIKit } from 'react-native-typography'

const styles = StyleSheet.create({
  text: {
    ...iOSUIKit.bodyWhite,
  },

  textEmphasized: {
    ...iOSUIKit.bodyEmphasizedWhite,
  },
})

export default function Text({ children, emphasized, style, ...props }) {
  const textStyles = [emphasized ? styles.textEmphasized : styles.text, style]

  return (
    <RNText {...props} style={textStyles}>
      {children}
    </RNText>
  )
}

Text.propTypes = {
  ...RNText.propTypes,
  emphasized: PT.bool,
}

Text.defaultProps = {
  emphasized: false,
}
