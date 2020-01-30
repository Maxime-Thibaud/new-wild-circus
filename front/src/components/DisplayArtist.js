import React from 'react';
// import './Display.css';
// import './Nicebutton.css'

function DisplayArtist(props) {
  return (
    <div>
      <div>
      <img src={props.artist.photo_artist} alt="artist" ></img>
      </div>
      <h2>{props.artist.firstname} {props.artist.lastname}</h2>
      <div>
        <p>{props.artist.description_artist}</p>
      </div>
      <button type="button" onClick={props.nextArtist}>Suivant</button>
      <p>hello</p>
    </div>
  )
}

export default DisplayArtist;
