
import {
    MOVE_ELEVATOR,
    INSERT_FLOOR,
    REMOVE_FLOOR,
    START_MOVE,
    CLEAR_DATA,
    CHECK_ELEVATOR,
    CHECK_FLOORS_ORDER,
    OPEN_DOOR
    
}from './types'


export const moveElevator =(floor)=>{
    
    return (dispatch,getState)=>{
        dispatch({
            type:INSERT_FLOOR,
            payload:floor
        })
        dispatch({
            type:CHECK_FLOORS_ORDER,
          
        })
        if(getState().mainReducer.startElevator){
            return
        }
        dispatch({
            type:START_MOVE
        })
        
        const elevatorTimer = ()=>{
            if(getState().mainReducer.floorsList.length< 1  ||getState().mainReducer.stopElevator) {
                clearInterval(timer)
                dispatch({
                    type:CLEAR_DATA
                })
                return
            }
            dispatch({
                type:MOVE_ELEVATOR,
            })
            dispatch({
                type:REMOVE_FLOOR,
            })
            dispatch({
                type:CHECK_ELEVATOR
            })
        }
        const timer = setInterval(elevatorTimer,3000)

    }

}

export const openDoor = () =>{
    return dispatch=>{
        dispatch({
            type:OPEN_DOOR
        })
    }
    
}