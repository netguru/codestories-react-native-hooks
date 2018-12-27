import React, { useReducer } from 'react'
import PT from 'prop-types'
import { View, StyleSheet, FlatList } from 'react-native'
import EditableListItem from 'components/EditableListItem'

const styles = StyleSheet.create({
  container: {},
})

export default function EditableList({
  autoFocus,
  data,
  valueExtractor,
  itemCreator,
  onInputChange,
  style,
}) {
  const renderItem = ({ item, index }) => {
    const shouldFocus = (autoFocus && index === 0) || index !== 0
    const onChange = (newValue) => onInputChange({ item, newValue })
    return (
      <EditableListItem
        value={valueExtractor(item)}
        onChange={onChange}
        autoFocus={shouldFocus}
        onSubmit={itemCreator}
      />
    )
  }

  return (
    <View style={[styles.container, style]}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  )
}

EditableList.propTypes = {
  autoFocus: PT.bool,
  data: PT.arrayOf(PT.object),
  valueExtractor: PT.func.isRequired,
  itemCreator: PT.func.isRequired,
  onInputChange: PT.func,
  style: PT.object,
}

EditableList.defaultProps = {
  data: [],
  autoFocus: false,
  onInputChange: () => {},
  style: {},
}
