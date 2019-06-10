
import styled from 'styled-components'

function getFloor(floor){
    
    if(floor>0){
        let distance = floor*(-120)
        return distance
    }
}


export const ElevatorWrapper = styled.div`
    width:100px;
    height:90px;
    background-color:white;
    border:solid black 2px;
    border-radius:4px;
    margin:auto;
    margin-top:-15px;
    transform:${props=>props.animateElevator || props.restartElevator ?
            `translateY(${getFloor(props.floorToGo)}px)`
        : ''};
    transition:${props=>props.animateElevator ? 'transform 2s': ''}
    
`


