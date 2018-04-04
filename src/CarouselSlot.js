import styled from 'styled-components';

const CarouselSlot = styled.div `
  flex: 1 0 0%;
  margin-right: 2vw;
  order: ${ (props) => props.order};
  @media (max-width: 768px) {
    margin-right:0px;
  }
`
export default CarouselSlot;