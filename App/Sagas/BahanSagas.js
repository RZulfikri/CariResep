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

import { call, put } from 'redux-saga/effects'
import BahanActions from '../Redux/BahanRedux'
// import { BahanSelectors } from '../Redux/BahanRedux'

export function * getBahan (api, action) {
  const { data } = action
  const response = yield call(api.getBahan, data)

  // success?
  if (response.ok) {
    yield put(BahanActions.getBahanSuccess(response.data))
  } else {
    yield put(BahanActions.getBahanFailure(response))
  }
}

export function * cariBahan (api, action) {
  const { data } = action
  const response = yield call(api.getBahan, data)

  // success?
  if (response.ok) {
    yield put(BahanActions.cariBahanSuccess(response.data))
  } else {
    yield put(BahanActions.cariBahanFailure(response))
  }
}
