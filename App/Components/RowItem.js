import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/RowItemStyle'
import { Images } from '../Themes';

const RowItem = (props) => {
  const { name, onPress, selected, showRemove, disabled, onRemoveItem } = props
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.5} onPress={() => onPress(name)} style={styles.container}>
      <Text style={[styles.label, selected && styles.labelSelected]}>{name}</Text>
      {showRemove && <TouchableOpacity activeOpacity={0.8} onPress={onRemoveItem}>
        <Image source={Images.iconClose} style={styles.iconRemove} />
      </TouchableOpacity>}
    </TouchableOpacity>
  )
}

RowItem.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  showRemove: PropTypes.bool,
  onRemoveItem: PropTypes.func
}

RowItem.defaultProps = {
  name: '',
  selected: false,
  onPress: () => null,
  onRemoveItem: () => null,
  disabled: false
}

export default RowItem
