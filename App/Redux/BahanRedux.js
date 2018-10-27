import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getBahanRequest: ['data'],
  getBahanSuccess: ['payload'],
  getBahanFailure: ['error'],
  cariBahanRequest: ['data'],
  cariBahanSuccess: ['payload'],
  cariBahanFailure: ['error']
})

export const BahanTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  getBahan: {
    data: null,
    fetching: null,
    payload: null,
    error: null
  },
})

/* ------------- Selectors ------------- */

export const BahanSelectors = {
  getData: state => state.bahan.getBahan
}

/* ------------- Reducers ------------- */

export const getBahanRequest = (state, { data }) =>
  state.merge({ ...state, getBahan: { ...state.getBahan, fetching: true, data, payload: null } })

export const getBahanSuccess = (state, { payload }) =>
  state.merge({ ...state, getBahan: { ...state.getBahan, fetching: false, error: null, payload } })

export const getBahanFailure = (state, { error }) =>
  state.merge({ ...state, getBahan: { ...state.getBahan, fetching: false, error, payload: null } })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_BAHAN_REQUEST]: getBahanRequest,
  [Types.GET_BAHAN_SUCCESS]: getBahanSuccess,
  [Types.GET_BAHAN_FAILURE]: getBahanFailure
})
