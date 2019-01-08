/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, all } from 'redux-saga/effects'
import ResepActions from '../Redux/ResepRedux'
import RiwayatActios from '../Redux/RiwayatRedux'
// import { ResepSelectors } from '../Redux/ResepRedux'

export function* cariResep(api, action) {
  const { data } = action
  const bahan = data.bahan.map(item => item.id)
  const response = yield call(api.cariResep, { bahan: `[${bahan.join(',')}]` })

if (response.ok) {
  yield all([
    put(ResepActions.cariResepSuccess(response.data)),
    put(RiwayatActios.addRiwayat(data.bahan))
  ])
} else {
  yield put(ResepActions.cariResepFailure(response))
}
}

export function* detailResep(api, action) {
  const { data } = action
  const response = yield call(api.detailResep, data)

  if (response.ok) {
    yield put(ResepActions.detailResepSuccess(response.data))
  } else {
    yield put(ResepActions.detailResepFailure(response))
  }
}

export function* getListResep(api, action) {
  const { data } = action
  const response = yield call(api.cariResep, data)

  if (response.ok) {
    yield put(ResepActions.getListResepSuccess(response.data))
  } else {
    yield put(ResepActions.getListResepFailure(response))
  }
}

