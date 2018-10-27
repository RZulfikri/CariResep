import { put, select } from 'redux-saga/effects'
// import GithubActions, { GithubSelectors } from '../Redux/GithubRedux'
// import { is } from 'ramda'

// exported to make available for tests
// export const selectAvatar = GithubSelectors.selectAvatar

import BahanActions, { BahanSelectors } from '../Redux/BahanRedux'
import RiwayatActions from '../Redux/RiwayatRedux'
export const selectBahan = BahanSelectors.getData

// process STARTUP actions
export function* startup(action) {

  const listBahan = yield select(selectBahan)

  if (listBahan.fetching === null) {
    yield put(BahanActions.getBahanRequest())
    // yield put(RiwayatActions.clearRiwayat())
  }
}
