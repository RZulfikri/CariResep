import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/RowItemStyle'
import { Images } from '../Themes';
import moment from 'moment'

const RowItem = (props) => {
  const { name, onPress, selected, showRemove, disabled, onRemoveItem, date, data } = props
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.5} onPress={() => onPress(data)} style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={[styles.label, selected && styles.labelSelected]}>{name}</Text>
        {showRemove && <TouchableOpacity activeOpacity={0.8} onPress={onRemoveItem}>
          <Image source={Images.iconClose} style={styles.iconRemove} />
        </TouchableOpacity>}
      </View>
      {date && <Text style={styles.textDate}>{moment(date).format('DD-MM-YYYY, hh:mm')}</Text>}
    </TouchableOpacity>
  )
}

RowItem.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  showRemove: PropTypes.bool,
  onRemoveItem: PropTypes.func,
  date: PropTypes.oneOfType([PropTypes.string, null])
}

RowItem.defaultProps = {
  name: '',
  selected: false,
  onPress: () => null,
  onRemoveItem: () => null,
  disabled: false,
  date: null
}

export default RowItem
