import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  toogleFav: ['data']
})

export const FavoritTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  favList: [],
  fullFavItem: []
})

/* ------------- Selectors ------------- */

export const FavoritSelectors = {
  getData: state => state.fav
}

/* ------------- Reducers ------------- */

export const toogleFav = (state, { data }) => {
  let newList = [...state.favList]
  let newFavItem = [...state.fullFavItem]

  const isInclude = newList.includes(data.id)

  if (isInclude) {
    const index = newList.findIndex((item) => item === data.id)
    newList.splice(index, 1)
    newFavItem.splice(index, 1)
  } else {
    newList.push(data.id)
    newFavItem.push(data.data)
  }

  return state.merge({ favList: newList, fullFavItem: newFavItem })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOOGLE_FAV]: toogleFav,
})
