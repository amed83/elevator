
import {
    MOVE_ELEVATOR,
    INSERT_FLOOR,
    REMOVE_FLOOR,
    START_MOVE,
    CLEAR_DATA,
    CHECK_ELEVATOR
}from '../actions/types'

const initialState={
    startElevator:false,
    floorToGo:0,
    floorsList:[],
    floorsIndex:0,
    stopElevator:false
}


const mainReducer = (state=initialState,action)=>{

    switch(action.type){
        
        case INSERT_FLOOR : 
        return{
            ...state,
            floorsList:[...state.floorsList,action.payload],
            stopElevator:false
        }
        
        case START_MOVE:
        return{
            ...state,
            startElevator:true,
        }
        
        case MOVE_ELEVATOR:
        return{
            ...state,
            floorsIndex:state.floorsIndex+1,
            floorToGo:state.floorsList[0]
        }
        
        case CHECK_ELEVATOR:
        if(state.floorsList.length<1){

            return{
                ...state,
                stopElevator:true,
                
            }
        } 
        
        return {
            ...state
        }
        
        case CLEAR_DATA:
        return{
            ...state,
            floorsIndex:0,
            // floorToGo:0,
            // startElevator:false
        }
        
        case REMOVE_FLOOR:
        const cloneFloors = [...state.floorsList]
        cloneFloors.splice(0,1)
        return {
            ...state,
            floorsList:cloneFloors
        }
        
        
        default:
        return state
    }
    
    
}


export default mainReducer