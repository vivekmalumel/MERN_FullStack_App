import {GET_ITEMS,ADD_ITEM,DELETE_ITEM, ITEMS_LOADING} from '../actions/types'
import axios from 'axios'

export const getItems=()=>dispatch=>{
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res=>dispatch({
            type:GET_ITEMS,
            payload:res.data
        }))
    }

    export const addItem=(item)=>dispatch=>
    {
        dispatch(setItemsLoading());
        axios
            .post('/api/items',item)
            .then(res=>dispatch({
                type:ADD_ITEM,
                payload:res.data.item
            }))
    }

    export const deleteItem=(itemId)=>dispatch=>{
        dispatch(setItemsLoading());
    axios
        .delete(`/api/items/${itemId}`)
        .then(res=>dispatch({
            type:DELETE_ITEM,
            payload:itemId
        }))
}


export const setItemsLoading=()=>{
    return{
        type:ITEMS_LOADING,
    }
}