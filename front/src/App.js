import React from 'react';
import axios from 'axios';
import Presentation from './components/Presentation';
import DisplayArtist from './components/DisplayArtist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artists : null,
      currentArtist: 0,
    }
    this.nextArtist = this.nextArtist.bind(this)
  }

  nextArtist() {
    this.setState(prevState => {
      return {
        currentArtist:
          (prevState.currentArtist + 1) % prevState.artists.length
      }
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/artists/')
      .then(response => response.data)
      .then(data => {
        this.setState({
          artists: data
        })
      })
  }

  render() {
    return(
      <div>
      <Presentation />
      {this.state.artists && (
        <DisplayArtist 
          artist={this.state.artists[this.state.currentArtist]}
          nextArtist={this.nextArtist}
        />
      )}
      </div>
    )
  }
}

export default App;
