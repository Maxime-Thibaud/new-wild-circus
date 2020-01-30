import React from 'react';
// import './Display.css';
// import './Nicebutton.css'

function DisplayArtist(props) {
  return (
    <div>
      <h2>Les artistes</h2>
      <div>
      {/* <img src={props.artist.photo_artist} alt="artist" ></img> */}
      </div>
      <h3>{props.artist.firstname} {props.artist.lastname}</h3>
      <div>
        <p>{props.artist.description_artist}</p>
      </div>
      <button type="button" onClick={props.previousArtist}>Précédent</button>
      <button type="button" onClick={props.nextArtist}>Suivant</button>
    </div>
  )
}

export default DisplayArtist;
