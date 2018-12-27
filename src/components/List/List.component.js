import React from 'react'
import PT from 'prop-types'
import { FlatList, StyleSheet, View } from 'react-native'
import ListItem from 'components/ListItem'

const styles = StyleSheet.create({})

export default function List({ data, onSelect, selectedItemValidator }) {
  const renderItem = ({ item }) => (
    <ListItem
      value={item.name}
      selected={selectedItemValidator(item)}
      onPress={() => onSelect(item)}
    />
  )

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  )
}

List.propTypes = {
  data: PT.arrayOf(PT.object).isRequired,
  onSelect: PT.func,
  selectedItemValidator: PT.func,
}

List.defaultProps = {
  onSelect: () => {},
  selectedItemValidator: () => false,
}
