import React, {Component} from 'react';
import './App.css';
import Carousel from './Carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images1: [],
      images2: []
    }
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/1wqfa').then(response => {
      return response.json();
    }).then(data => {
      let images = data.map((img) => {
        return (<img src={img.image.large} key={img.id} alt=''/>)
      });
      let images1 = images.slice(0, 5);
      let images2 = images.slice(5);
      this.setState({images1, images2});
    }).catch(error => console.error(error));
  }

  render() {
    return (
      <div className='container'>
        <Carousel>
          {this.state.images1}
        </Carousel>
        <Carousel>
          {this.state.images2}
        </Carousel>
      </div>

    );
  }
}

export default App;
