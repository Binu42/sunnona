import React from 'react'
import Axios from 'axios';

const ShowPlaylists = (props) => {
  const pointerStyles = { cursor: 'pointer' }
  const userName = localStorage.getItem('userName');
  let loggedIn = false;
  const token = localStorage.getItem('token');
  if (token) {
    loggedIn = true;
  }
  const addFav = (userId, trackId, albumId) => {
    Axios.post('http://localhost:4000/add/favourite', ({ userId, trackId, albumId }))
      .then(result => {
        console.log(result);
      })
  }

  return (
    <React.Fragment>
      <div className="album">
        <span style={pointerStyles} onClick={props.clearSelectedAlbum}>‹ Back to Soundtracks</span>
        <div className="album-meta mt-2">
          {props.selectedAlbum ?
            <span className="d-flex justify-content-center align-items-center flex-column">
              <img src={props.selectedAlbum.albumArtwork} alt={props.selectedAlbum.albumName} className="img-fluid rounded" />
              <br></br>
              <span>{props.selectedAlbum.albumName}</span>
            </span>
            : ""}
          {/* <span>{props.selectedAlbum.albumArtist}</span> */}
        </div>
        <div className="album-playlist mt-4 mx-4">
          {props.selectedAlbum.songs.map((song, index) => (
            <div key={`songname-${index}`} className="playlist-song" onClick={() => props.updatePlaylist(props.selectedAlbum.songs, index)}>
              {(JSON.stringify(props.playlist) === JSON.stringify(props.selectedAlbum.songs.map(song => song.src)) && props.playlistIsPlaying && props.currentSongIndex === index)
                ? (<i className="fa fa-pause" style={pointerStyles} />)
                : (<i className="fa fa-play" style={{ paddingLeft: '3px', ...pointerStyles }} />)}
              {loggedIn ? <a onClick={() => addFav(userName, song.id, props.selectedAlbum.albumId)}><i style={{ "zIndex": "10", cursor: 'pointer' }} className="fas fa-heart"></i></a> : ""}
              {/* <span>{song.id} {props.selectedAlbum.albumId}</span> */}
              <span style={pointerStyles}>{song.name}</span>
              <span className="ml-auto">{song.artistName}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ShowPlaylists