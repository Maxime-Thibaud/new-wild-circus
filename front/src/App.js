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
      </div>
    )
  }
}

export default App;
