import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import Text from 'components/Text'
import { centerVH } from 'styles'
import { COLOR_BLACK, COLOR_PRIMARY } from '../../constants/colors'
import {COLOR_WHITE} from "constants/colors";


const styles = StyleSheet.create({
  container: {
    ...centerVH,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 10,
    // borderColor: COLOR_WHITE,
    // borderWidth: 1,
    shadowColor: COLOR_BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    width: '100%',
  },

  label: {
    ...iOSUIKit.title3EmphasizedWhite,
  },
})

export default function Button({ label, style, ...props }) {
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
