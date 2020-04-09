import produce from 'immer'

export default function reserve(state = [], action){
    
    switch(action.type){
        case 'ADD_RESERVE_SUCCES':
            return produce(state, draft =>{
               draft.push(action.trip)
            })
        case 'REMOVE_RESERVE':
            return produce(state, draft =>{
                const triIndex = draft.findIndex(trip => trip.id === action.id)
                
                if(triIndex >=0){
                    draft.splice(triIndex, 1)
                }else{
                   
                }

            })
        case 'UPDATE_RESERVE_SUCCES':{
            
            return produce(state, draft =>{
                const triIndex = draft.findIndex(trip => trip.id === action.id)

                if(triIndex >=0){
                 
                        draft[triIndex].amount  = Number(action.amount)
                    
                    
                }

            })
        }
           
        default:
            return state
    }
}