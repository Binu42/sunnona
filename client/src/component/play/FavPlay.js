import React from 'react'

const ShowPlaylists = (props) => {
  const pointerStyles = { cursor: 'pointer' }
  console.log(props)
  return (
    <React.Fragment>
      <div className="px-4">
        <div className="row mt-2 mx-5">
          <div className="col-md-12">
            <div>
              <h1 className="text-success text-center" style={{ "fontFamily": 'Rye, cursive', "fontSize": "50px" }}>Sunnona</h1>
            </div>
            <h3 className="text-center">Your Favourites Songs</h3>
            {props.songs.map((song, index) => (
              <div key={`songname-${index}`} className="playlist-song" onClick={() => props.updatePlaylist(props.songs, index)}>
                {(JSON.stringify(props.playlist) === JSON.stringify(props.songs.map(song => song.src)) && props.playlistIsPlaying && props.currentSongIndex === index)
                  ? (<i className="fa fa-pause" style={pointerStyles} />)
                  : (<i className="fa fa-play" style={{ paddingLeft: '3px', ...pointerStyles }} />)}
                <span style={pointerStyles}>{song.name}</span>
                <span className="ml-auto">{song.artistName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ShowPlaylists