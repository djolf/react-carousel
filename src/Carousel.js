import React, {Component} from 'react';

import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            sliding: false
        };
    }

    getOrder(itemIndex) {
        const {position} = this.state;
        const {children} = this.props;
        const numItems = children.length || 1;

        if (itemIndex - position < 0) {
            return numItems - Math.abs(itemIndex - position);
        }
        return itemIndex - position;
    }

    nextSlide() {
        const {position} = this.state;
        const {children} = this.props;
        const numItems = children.length || 1;

        this.doSliding('next', position === numItems - 1
            ? 0
            : position + 1);
    }

    prevSlide() {
        const {position} = this.state;
        const {children} = this.props;
        const numItems = children.length || 1;

        this.doSliding('prev', position === 0
            ? numItems - 1
            : position - 1);
    }

    doSliding(direction, position) {
        this.setState({sliding: true, direction, position});

        setTimeout(() => {
            this.setState({sliding: false})
        }, 20);
    }

    getOnClick(index) {
        const order = this.getOrder(index);
        if (order === 0) 
            return this.prevSlide.bind(this);
        if (order === 2) 
            return this.nextSlide.bind(this);
        }
    
    render() {
        const {children} = this.props;
        return (
            <div>
                <Wrapper>
                    <CarouselContainer
                        sliding={this.state.sliding}
                        direction={this.state.direction}>

                        {children.map((child, index) => (
                            <CarouselSlot
                                key={index}
                                order={this.getOrder(index)}
                                onClick={this.getOnClick(index)}>
                                {child}
                            </CarouselSlot>
                        ))}
                    </CarouselContainer>
                </Wrapper>
            </div>
        );
    }
}
export default Carousel;