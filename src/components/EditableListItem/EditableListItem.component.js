import React, { useState, useEffect } from 'react'
import PT from 'prop-types'
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import Text from 'components/Text'
import { human } from 'react-native-typography'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },

  text: {
    ...human.title1White,
  },
})

export default function EditableListItem({ autoFocus, onChange, onSubmit, value }) {
  let inputRef = null

  const [isFocused, setFocus] = useState(false)

  const setFocusInput = () => setFocus(true)
  const setUnfocusInput = () => setFocus(false)

  const focusInput = () => inputRef && inputRef.focus()

  useEffect(() => {
    if (autoFocus) {
      setFocusInput()
      focusInput()
    }
  }, [])

  const renderText = () => (
    <TouchableWithoutFeedback onPress={setFocusInput}>
      <Text emphasized style={styles.text}>
        {value}
      </Text>
    </TouchableWithoutFeedback>
  )

  const renderInput = () => (
    <TextInput
      placeholder="Type a name..."
      ref={(ref) => {
        inputRef = ref
      }}
      onLayout={focusInput}
      style={styles.text}
      value={value}
      onChangeText={onChange}
      onEndEditing={setUnfocusInput}
      onSubmitEditing={onSubmit}
      returnKeyType="next"
    />
  )

  return <View style={styles.container}>{isFocused ? renderInput() : renderText()}</View>
}

EditableListItem.propTypes = {
  autoFocus: PT.bool,
  onChange: PT.func,
  onSubmit: PT.func.isRequired,
  value: PT.string.isRequired,
}

EditableListItem.defaultProps = {
  autoFocus: false,
  onChange: () => {},
}
