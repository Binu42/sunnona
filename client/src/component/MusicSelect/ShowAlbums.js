import React from 'react'

const ShowAlbums = (props) => {
  const pointerStyles = { cursor: 'pointer' }

  return (
    <div>
      <div>
        <h1 className="text-success text-center" style={{ "fontFamily": 'Rye, cursive', "fontSize": "55px" }}>Sunnona</h1>
      </div>
      <h2 className="text-center">Albums</h2>
      <hr></hr>
      <div className="grid">{props.media.map((playlist, index) => (
        <div className="playlist-square" style={pointerStyles} onClick={() => props.selectAlbum(playlist)} key={`playlist-${index}`}>
          <img src={playlist.albumArtwork} alt={playlist.albumName} className="img-fluid rounded" />
          <p className="text-center text-uppercase mt-2">{playlist.albumName}</p>
          <div className="play-button" onClick={(e) => { e.stopPropagation(); props.updatePlaylist(playlist.songs) }}>
            {(JSON.stringify(props.playlist) === JSON.stringify(playlist.songs.map(song => song.src)) && props.playlistIsPlaying)
              ? (<i className="fa fa-pause" />)
              : (<i className="fa fa-play" style={{ paddingLeft: '3px' }} />)}
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default ShowAlbums