import styled from 'styled-components';

const CarouselContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    margin: 0 0 20px 20px;
    transition: ${ (props) => props.sliding
    ? 'none'
    : 'transform 1s ease'};
    transform: ${ (props) => {
        if (!props.sliding) 
            return 'translateX(calc(-72vw - 20px))'
        if (props.direction === 'prev') 
            return 'translateX(calc(2* (-72vw - 20px)))'

        return 'translateX(0%)'}};
`

        export default CarouselContainer;
