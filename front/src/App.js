import React from 'react';
import axios from 'axios';
import Presentation from './components/Presentation';
import DisplayArtist from './components/DisplayArtist';
import Menu from './components/Menu';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artists : null,
      currentArtist: 0,
    }
    this.nextArtist = this.nextArtist.bind(this)
    this.previousArtist = this.previousArtist.bind(this)
  }

  nextArtist() {
    this.setState(prevState => {
      return {
        currentArtist:
          (prevState.currentArtist + 1) % prevState.artists.length
      }
    })
  }

  previousArtist() {
    this.setState(prevState => {
      return {
        currentArtist:
          (prevState.currentArtist - 1) % prevState.artists.length
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
        <h1>The Wild Circus</h1>
        <Menu />
        <Presentation />
        {this.state.artists && (
          <DisplayArtist 
            artist={this.state.artists[this.state.currentArtist]}
            nextArtist={this.nextArtist}
            previousArtist={this.previousArtist}
          />
        )}
      </div>
    )
  }
}

export default App;
