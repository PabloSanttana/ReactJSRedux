import { all } from 'redux-saga/effects'

import reserve from './reserve/sagas'

export default function* rootSagas(){
    return yield all([
        reserve,
    ])
}