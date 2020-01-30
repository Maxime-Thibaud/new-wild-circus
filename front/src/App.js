import React from 'react';
import Presentation from './components/Presentation';
import DisplayArtist from './components/DisplayArtist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places : [],
      currentPlace: 0,
    }
    // this.nextPlace = this.nextPlace.bind(this)
  }

  // nextPlace() {
  //   this.setState(prevState => {
  //     return {
  //       currentPlace:
  //         (prevState.currentPlace + 1) % prevState.places.length
  //     }
  //   })
  // }

  // componentDidMount() {
  //   axios
  //     .get('http://localhost:8000/api/artists')
  //     .then(response => response.data)
  //     .then(data => {
  //       this.setState({
  //         artists: data
  //       })
  //     })
  // }

  // componentDidUpdate() {
  //   axios
  //     .get('http://localhost:8000/api/places')
  //     .then(axios.spread((places)=>{
  //       this.setState({
  //         places: places.data,
  //       })
  //     }))
  //   }

  render() {
    return(
      <div>
      <Presentation />
      {/* {this.state.places && (
        <DisplayArtist 
          place={this.state.places[this.state.currentPlace]}
          nextPlace={this.nextPlace}
        />
      )} */}
      <DisplayArtist />
      </div>
    )
  }
}

export default App;
