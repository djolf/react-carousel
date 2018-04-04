import React, {Component} from 'react';
import Swipeable from 'react-swipeable';
import {throttle} from 'lodash';

import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
import './Carousel.css'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            sliding: false
        };
        this.intervalFunc = this
            .intervalFunc
            .bind(this);
        this.timeout = this
            .timeout
            .bind(this);
    }

    componentDidMount() {
        this.timeout();
    }

    intervalFunc() {
        this.nextSlide();
        this.timeout();
    }

    timeout() {
        setTimeout(this.intervalFunc, 6000);
    }

    handleSwipe = throttle((isNext) => {
        if (isNext) {
            this.nextSlide();
        } else {
            this.prevSlide();
        }
    }, 500, {trailing: false});

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
        }, 5);
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
            <Swipeable
                onSwipingLeft={() => this.handleSwipe(true)}
                onSwipingRight={() => this.handleSwipe()}>
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
            </Swipeable>
        );
    }
}
export default Carousel;