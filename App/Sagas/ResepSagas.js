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
import ResepActions from '../Redux/ResepRedux'
// import { ResepSelectors } from '../Redux/ResepRedux'

export function * cariResep (api, action) {
  const { data } = action
  const response = yield call(api.cariResep, data)

  if (response.ok) {
    yield put(ResepActions.cariResepSuccess(response.data))
  } else {
    yield put(ResepActions.cariResepFailure(response))
  }
}

export function * detailResep (api, action) {
  const { data } = action
  const response = yield call(api.detailResep, data)

  if (response.ok) {
    yield put(ResepActions.detailResepSuccess(response.data))
  } else {
    yield put(ResepActions.detailResepFailure(response))
  }
}

export function * getListResep (api, action) {
  const { data } = action
  const response = yield call(api.cariResep, data)

  if (response.ok) {
    yield put(ResepActions.getListResepSuccess(response.data))
  } else {
    yield put(ResepActions.getListResepFailure(response))
  }
}
