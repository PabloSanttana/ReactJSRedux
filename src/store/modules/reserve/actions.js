export function addReserveRequest(id){
    return{
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}
export function addReserveRequestSucces(trip){
    return{
        type: 'ADD_RESERVE_SUCCES',
        trip
    }
}

export function removeReserve(id){
    return{
        type: 'REMOVE_RESERVE',
        id:id
    }
}

export function updateAmountRequest(id, amount){
    return{
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount,
    }
}
export function updateAmountSucces(id, amount){
    return{
        type: 'UPDATE_RESERVE_SUCCES',
        id,
        amount,
    }
}