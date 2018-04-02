import styled from 'styled-components';

const CarouselSlot = styled.div `
  max-width:100%;
  max-height:100%;
  flex: 1 0 0%;
  flex-basis: 0%;
  margin-right: 20px;
  order: ${ (props) => props.order};
`
export default CarouselSlot;