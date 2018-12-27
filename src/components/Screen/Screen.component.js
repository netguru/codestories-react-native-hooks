import React from 'react'
import PT from 'prop-types'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { COLOR_BG } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BG,
    padding: 10
  },
})

export default function Screen({ children, style, ...props }) {
  return (
    <SafeAreaView style={styles.container}>
      <View {...props} style={[styles.container, style]}>
      {children}
      </View>
    </SafeAreaView>
  )
}

Screen.propTypes = {
  children: PT.node.isRequired,
}
