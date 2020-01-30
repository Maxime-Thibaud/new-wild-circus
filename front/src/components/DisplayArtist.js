import React from 'react';
// import './Display.css';
// import './Nicebutton.css'

function DisplayArtist(props){

  // nextPlace() {
  //   this.setState(prevState => {
  //     return {
  //       currentPlace:
  //         (prevState.currentPlace + 1) % prevState.places.length
  //     }
  //   })
  // }

  // let url = 'http://via.placeholder.com/100x80'
  // if (props.artist.photo_artist) {
  //   url = props.artist.photo_artist;
  // if (!url.startsWith('http')) {
  //   url = `http://localhost:8000/${props.artist.photo_artist}`;
  // }}

  // let imgValues = {
  //   src: url,
  //   alt: 'profil du vacancier'
  // }

  return(
  <div id="pagePlace">
    {/* <div id="ProfilPlace">
    <img className="photoProfil" src={imgValues.src} alt={imgValues.alt} ></img>
    </div>
    <h2 className="titreProfil">{props.artist.firstname} {props.artist.lastname}</h2>
    <div className="desc">
      <p>{props.artist.description_artist}</p>
    </div>
    <button className='buttonNextVacationer'  type="button" onClick={props.nextPlace}>Suivant</button> */}
    <p>hello</p>
  </div>
  )
}

export default DisplayArtist;
