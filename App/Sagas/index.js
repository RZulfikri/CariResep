import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { BahanTypes } from '../Redux/BahanRedux';
import { getBahan, cariBahan } from './BahanSagas';
import { ResepTypes, detailResepRequest } from '../Redux/ResepRedux';
import { cariResep, detailResep, getListResep } from './ResepSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(BahanTypes.GET_BAHAN_REQUEST, getBahan, api),
    takeLatest(BahanTypes.CARI_BAHAN_REQUEST, cariBahan, api),
    takeLatest(ResepTypes.CARI_RESEP_REQUEST, cariResep, api),
    takeLatest(ResepTypes.DETAIL_RESEP_REQUEST, detailResep, api),
    takeLatest(ResepTypes.GET_LIST_RESEP_REQUEST, getListResep, api)
  ])
}
