
import styled from 'styled-components'

export default styled.div `
    height:100%;
    background-color:#B5B4B4;
    width:${props=>props.isOpen ? '5%' : '100%'};
    /* opacity: ${props=>props.isOpen ? '0' : '1'}; */
    /* transform:${props=>props.isOpen ? 'translateX(-90px)' :''  }; */
    transition:all 2s ease-in-out;
`
