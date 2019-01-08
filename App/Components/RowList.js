import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import styles from './Styles/RowListStyle'
import { ApplicationStyles } from '../Themes';
import Button from './Button'
import SmallItem from './SmallItem'
import { withNavigation } from 'react-navigation'

class RowList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
    this.onPressButton = this.onPressButton.bind(this)
  }

  onPressButton() {
    this.props.navigation.navigate('ListResepScreen', this.state.data)
  }

  render() {
    const { data } = this.state
    return (
      <View style={{ width: '100%', marginVertical: 10 }}>
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={styles.textLabelInfo}>{data.meta.bahan.length} Bahan masakan dipilih :</Text>
          <Text style={styles.textLabelBahan}>{data.bahan.map(item => item.tag).join(', ')}</Text>
        </View>
        <FlatList
          horizontal
          data={data.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <SmallItem data={item} />}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Button onPress={this.onPressButton} style={ApplicationStyles.whiteButtonContainer} titleStyle={ApplicationStyles.whiteButtonTittle} title={'Lihat Semua Resep'} />
        </View>
      </View>
    )
  }
}

export default withNavigation(RowList)
