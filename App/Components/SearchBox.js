import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/SearchBoxStyle'
import { Colors, Images } from '../Themes';

export default class SearchBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TextInput
            ref={'textInput'}
            style={styles.textInput}
            placeholder={'Cari bahan masakan'}
            placeholderTextColor={Colors.grey}
            selectionColor={Colors.green}
            underlineColorAndroid={'transparent'}
            onChangeText={text => this.props.onSearch(text)}
          />
          {this.props.value.length > 0 && <TouchableOpacity activeOpacity={0.8} onPress={() => {
            this.refs.textInput.clear()
            this.props.onSearch('')}}>
            <Image style={styles.iconClose} source={Images.iconClose} />
          </TouchableOpacity>}
        </View>
      </View>
    )
  }
}
