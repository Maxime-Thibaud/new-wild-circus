import React from 'react';
import './DisplayArtist.css'
// import './Display.css';
// import './Nicebutton.css'

function DisplayArtist(props) {
  return (
    <div>
      <h2 className="artist-title">Les artistes</h2>
      <div className="artist-card">
        <img className="artist-image" src={props.artist.photo_artist} alt="artist" ></img>
        <h3>{props.artist.firstname} {props.artist.lastname}</h3>
        <p className="artist-description">{props.artist.description_artist}</p>
        <div>
          <button type="button" onClick={props.previousArtist}>Précédent</button>
          <button type="button" onClick={props.nextArtist}>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default DisplayArtist;
