import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addRiwayat: ['data'],
  deleteRiwayat: ['data'],
  clearRiwayat: null
})

export const RiwayatTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  listRiwayat: []
})

/* ------------- Selectors ------------- */

export const RiwayatSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const addRiwayat = (state, { data }) => {
  let listRiwayat = [...state.listRiwayat]
  listRiwayat.push({search: data, time: new Date()})
  return state.merge({ listRiwayat })
}

export const deleteRiwayat = (state, {data}) => {
  let listRiwayat = [...state.listRiwayat]
  let index = listRiwayat.findIndex(item => item.name === data)
  if (index > 0) {
    listRiwayat.splice(index, 1)
  }
  return state.merge({ listRiwayat })
}

export const clearRiwayat = state =>
  state.merge({ listRiwayat: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_RIWAYAT]: addRiwayat,
  [Types.DELETE_RIWAYAT]: deleteRiwayat,
  [Types.CLEAR_RIWAYAT]: clearRiwayat
})
