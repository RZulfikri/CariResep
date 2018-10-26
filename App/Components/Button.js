import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonStyle'

const Button = (props) => {
  const {style, title, onPress, titleStyle} = props
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={style}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.oneOfType([PropTypes.func, null]),
  style: PropTypes.object,
  titleStyle: PropTypes.object
}

Button.defaultProps = {
  title: '',
  onPress: null,
  style: {},
  titleStyle: {}
}

export default Button