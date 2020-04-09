import React from 'react'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import {useSelector, useDispatch} from 'react-redux'

import {removeReserve, updateAmountRequest} from '../../store/modules/reserve/actions'
import './styles.css'

export default function Reservas() {
    const reserves = useSelector(state => state.reserve)
    const dispatch = useDispatch()



    function handleRemove(id){
        dispatch(removeReserve(id))
    }

    function decrementAmount(trip){
        dispatch(updateAmountRequest(trip.id, trip.amount -1))
    }
    function incrementAmount(trip){
        dispatch(updateAmountRequest(trip.id, trip.amount + 1))
    }
    
    return (
        <div>
           <h1 className='title'>Você solicitou {reserves.length} reservas</h1>

            {reserves.map(reserve=>(
                <div className="reservas" key={reserve.id}>
                <img 
                src={reserve.image} 
                alt={reserve.title}
                />
                <strong>{reserve.title}</strong>
                
                <div id="amount">
                    <button type='button' onClick={()=> decrementAmount(reserve)}>
                        <MdRemoveCircle size={23} color='#191919'/>
                    </button>

                    <span>Qt: {reserve.amount}</span>

                    <button type='button' onClick={()=>incrementAmount(reserve)}>
                        <MdAddCircle size={23} color='#191919'/>
                    </button>
                </div>
                 


                <button type='button' onClick={()=>handleRemove(reserve.id)}>
                <MdDelete size={20} color='#191919'/>
                </button>
            </div>
            ))}
            

            <footer>
                <button type="button" >
                    Solicitar Reservas
                </button>
            </footer>


        </div>
    )
}
