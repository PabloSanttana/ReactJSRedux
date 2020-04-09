import { call,put, all, takeLatest, select} from 'redux-saga/effects'

import { addReserveRequestSucces} from './actions'
import api from '../../../services/api'
import { updateAmountSucces} from './actions'
import history from '../../../services/history'

function* addToReserve({id}){

    const tripExists = yield select(
        state=> state.reserve.find(trip=> trip.id === id)
    )

    /// quantidades de passagem disponivel
    const myStock = yield call(api.get, `/stock/${id}`)

    const stockAmount = myStock.data.amount

    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock +1

    if(amount > stockAmount ){
        alert('Quantidade maxima de permitida.')
        return;
    }


    if(tripExists){
        //aumentar o amount...
        const amount = tripExists.amount + 1
      yield put(updateAmountSucces(id,amount ))  

    }else{
        const response = yield call(api.get, `trips/${id}`);

        const data ={
            ...response.data,
            amount: 1
        }
        // out disprar actions
        yield put(addReserveRequestSucces(data))
        // mavegar quando a requi... esta completa! api history
        history.push('/reservas')
    }

    
}
function* updateAmount({id, amount}){
    if(amount <=0) return;

    const myStock = yield call(api.get, `/stock/${id}`)

    const stockAmount = myStock.data.amount
    if(amount > stockAmount ){
        alert('Quantidade maxima de permitida.')
        return;
    }

    yield put(updateAmountSucces(id,amount))

}



export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
])