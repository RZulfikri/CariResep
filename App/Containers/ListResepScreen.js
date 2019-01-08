import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ResepActions from '../Redux/ResepRedux'

// Styles
import styles from './Styles/ListResepScreenStyle'
import Header from '../Components/Header'
import BigItem from '../Components/BigItem'
import { Colors } from '../Themes';

class ListResepScreen extends Component {
  constructor(props) {
    super(props)
    listResep = []
    input = []

    const { params } = props.navigation.state
    if (params) {
      const { meta, data } = params
      if (data) {
        listResep = data
      }

      if (meta) {
        input = meta.bahan
      }
    }

    this.state = {
      listResep,
      input,
      loading: false,
    }

    this.page = props.navigation.state.params.meta.page
    this.hasNext = true
    this.onRefreshList = this.onRefreshList.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)

    if (listResep.length === 0) {
      this.onRefreshList()
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title={'List Resep'} position={'right'} navigation={navigation} />
    }
  }

  componentWillReceiveProps(nextProps) {
    const { listGetResep } = nextProps
    let { listResep, loading } = this.state

    if (listGetResep) {
      if (!listGetResep.fetching) {
        if (listGetResep.payload) {
          if (listGetResep.payload.meta.page === 0) {
            listResep = [].concat(listGetResep.payload.data)
            this.page = listGetResep.payload.meta.page
          } else {
            if (listGetResep.payload.data.length === 0) {
              this.hasNext = false
            }
            listResep = listResep.concat(listGetResep.payload.data)
            this.page = listGetResep.payload.meta.page
          }

          // success data
        } else {
          // failure data
        }
        loading = false
      } else {
        loading = true
      }
    }

    this.setState({
      listResep,
      loading
    })
  }

  onRefreshList() {
    const { input } = this.state
    this.props.getListResep({ page: 0, bahan: `[${input.join(',')}]` })
  }

  onLoadMore() {
    const { input } = this.state
    if (this.hasNext) {
      this.props.getListResep({ page: this.page + 1, bahan: `[${input.join(',')}]` })
    }
  }

  render() {
    const { listResep, loading } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: Colors.background, paddingVertical: 5 }}
          contentContainerStyle={{ backgroundColor: Colors.background, flexGrow: 1 }}
          data={listResep}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <BigItem data={item} />
          }}
          refreshing={this.page === 0 ? loading : false}
          onRefresh={this.onRefreshList}
          onEndReached={this.onLoadMore}
          ListFooterComponent={() => {
            if (listResep.length > 0 && loading) {
              return (<View style={{ height: 40, justifyContent: 'center' }}>
                <ActivityIndicator size='large' />
              </View>)
            } else {
              return <View />
            }
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listGetResep: state.resep.listResep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListResep: (params) => dispatch(ResepActions.getListResepRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListResepScreen)
