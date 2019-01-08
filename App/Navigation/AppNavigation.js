import { createStackNavigator } from 'react-navigation'
import ArsipResepScreen from '../Containers/ArsipResepScreen'
import RiwayatPencarianScreen from '../Containers/RiwayatPencarianScreen'
import DetailResepScreen from '../Containers/DetailResepScreen'
import ListResepScreen from '../Containers/ListResepScreen'
import KonfirmBahanScreen from '../Containers/KonfirmBahanScreen'
import PilihBahanScreen from '../Containers/PilihBahanScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const horizontalTrasition = () => ({
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps
    const { index } = scene
    const width = layout.initWidth

    return {
      opacity: position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1, 1]
      }),
      transform: [{
        translateX: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        })
      }]
    }
  },
  headerTitleInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps
    const { index } = scene
    const width = layout.initWidth
    return {
      opacity: position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1, 1]
      }),
      transform: [{
        translateX: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        })
      }]
    }
  }
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ArsipResepScreen: { screen: ArsipResepScreen },
  RiwayatPencarianScreen: { screen: RiwayatPencarianScreen },
  DetailResepScreen: { screen: DetailResepScreen },
  ListResepScreen: { screen: ListResepScreen },
  KonfirmBahanScreen: { screen: KonfirmBahanScreen },
  PilihBahanScreen: { screen: PilihBahanScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
    // Default config for all screens
    // headerMode: 'none',
    initialRouteName: 'HomeScreen',
    transitionConfig: horizontalTrasition,
    // navigationOptions: {
    //   gesturesEnabled: false
    // }
  })

export default PrimaryNav
