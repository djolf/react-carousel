import styled from 'styled-components';

const CarouselContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    margin: 0 0 20px 0px;
    transition: ${ (props) => props.sliding
    ? 'none'
    : 'transform 1s ease'};
    transform: ${ (props) => {
        if (!props.sliding) 
            return 'translateX(calc(-75vw ))'
        if (props.direction === 'prev') 
            return 'translateX(calc(2* (-75vw )))'

        return 'translateX(0%)'}};
    
        @media (max-width: 768px) {
            transform: ${ (props) => {
            if (!props.sliding) 
                return 'translateX(calc(-100vw ))'
            if (props.direction === 'prev') 
                return 'translateX(calc(2* (-100vw )))'

            return 'translateX(0%)'}};
        } 
`

            export default CarouselContainer;
