import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cariResepRequest: ['data'],
  cariResepSuccess: ['payload'],
  cariResepFailure: ['error'],
  detailResepRequest: ['data'],
  detailResepSuccess: ['payload'],
  detailResepFailure: ['error'],
  getListResepRequest: ['data'],
  getListResepSuccess: ['payload'],
  getListResepFailure: ['error']
})

export const ResepTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  cariResep: {
    data: null,
    fetching: null,
    payload: null,
    error: null,
  },
  detailResep: {
    data: null,
    fetching: null,
    payload: null,
    error: null,
  },
  listResep: {
    data: null,
    fetching: null,
    payload: null,
    error: null,
  }
})

/* ------------- Selectors ------------- */

export const ResepSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const cariResepRequest = (state, { data }) =>
  state.merge({ ...state, cariResep: { ...state.cariResep, fetching: true, data, payload: null } })

export const cariResepSuccess = (state, { payload }) =>
  state.merge({ ...state, cariResep: { ...state.cariResep, fetching: false, error: null, payload } })

export const cariResepFailure = (state, { error }) =>
  state.merge({ ...state, cariResep: { ...state.cariResep, fetching: false, error, payload: null } })

export const detailResepRequest = (state, { data }) =>
  state.merge({ ...state, detailResep: { ...state.detailResep, fetching: true, data, payload: null } })

export const detailResepSuccess = (state, { payload }) =>
  state.merge({ ...state, detailResep: { ...state.detailResep, fetching: false, error: null, payload } })

export const detailResepFailure = (state, { error }) =>
  state.merge({ ...state, detailResep: { ...state.detailResep, fetching: false, error, payload: null } })

export const getListResepRequest = (state, { data }) =>
  state.merge({ ...state, listResep: { ...state.listResep, fetching: true, data, payload: null } })

export const getListResepSuccess = (state, { payload }) =>
  state.merge({ ...state, listResep: { ...state.listResep, fetching: false, error: null, payload } })

export const getListResepFailure = (state, { error }) =>
  state.merge({ ...state, listResep: { ...state.listResep, fetching: false, error, payload: null } })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CARI_RESEP_REQUEST]: cariResepRequest,
  [Types.CARI_RESEP_SUCCESS]: cariResepSuccess,
  [Types.CARI_RESEP_FAILURE]: cariResepFailure,
  [Types.DETAIL_RESEP_REQUEST]: detailResepRequest,
  [Types.DETAIL_RESEP_SUCCESS]: detailResepSuccess,
  [Types.DETAIL_RESEP_FAILURE]: detailResepFailure,
  [Types.GET_LIST_RESEP_REQUEST]: getListResepRequest,
  [Types.GET_LIST_RESEP_SUCCESS]: getListResepSuccess,
  [Types.GET_LIST_RESEP_FAILURE]: getListResepFailure,
})
