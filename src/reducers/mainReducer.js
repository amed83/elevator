
import {
    MOVE_ELEVATOR,
    INSERT_FLOOR,
    REMOVE_FLOOR,
    START_MOVE,
    CLEAR_DATA,
    CHECK_ELEVATOR,
    CHECK_FLOORS_ORDER,
    OPEN_DOOR
}from '../actions/types'

const orderUp = [0,1,2,3,4]
const orderDown = [4,3,2,1,0]

const initialState={
    startElevator:false,
    floorToGo:0,
    floorsList:[],
    stopElevator:false,
    restartElevator:false,
    direction:'UP',
    whereIsElevator:[0],
    newFloorsOrder:'',
    doorOpen:false
}

const print = (text, x)=>{
    console.log(`${text}` , x)
}

const mainReducer = (state=initialState,action)=>{

    switch(action.type){
        
        case INSERT_FLOOR : 
            return{
                ...state,
                floorsList:[...state.floorsList,action.payload],
                stopElevator:false
            }
        
        case CHECK_FLOORS_ORDER :
            let cloneList=''
            if(state.floorsList.length>1){
                cloneList= [...state.floorsList]
                let parameter = state.whereIsElevator<state.floorsList[0] ? orderUp : orderDown
                
                    const findIndex = parameter.indexOf(state.whereIsElevator[0])
                    const nextFloor  = parameter[findIndex+1]  

                    if(state.floorsList.indexOf(nextFloor)!==-1 && findIndex!==0) {
                        
                        const indexOfEl = state.floorsList.indexOf(nextFloor)
                        let spliced = cloneList.splice(indexOfEl,1)
                        print('spliced ', spliced[0])
                        cloneList.splice(0,0,spliced[0])
                    }
                    print('cloneList ', cloneList)
                return {
                ...state,
                    floorsList:cloneList
                }
            }

            return {
                ...state,
                
            }    

        case START_MOVE:
            return{
                ...state,
                startElevator:true,
            }
        
        case MOVE_ELEVATOR:
            let direction;
        
            return{
                ...state,
                floorToGo:state.floorsList[0],
                direction
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
                restartElevator:true,
                startElevator:false
            }
            
        case REMOVE_FLOOR:
            const cloneFloors = [...state.floorsList]
            let elevatorIsHere = cloneFloors.splice(0,1)
            return {
                ...state,
                floorsList:cloneFloors,
                whereIsElevator:elevatorIsHere
            }
        
        case OPEN_DOOR:
            return {
                ...state,
                doorOpen:!state.doorOpen
            }
        
        default:
        return state
    }
    
    
}


export default mainReducer