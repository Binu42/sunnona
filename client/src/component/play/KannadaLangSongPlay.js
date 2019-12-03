import React from 'react'

const ShowPlayLanglists = (props) => {
  const pointerStyles = { cursor: 'pointer' }
  console.log(props)
  return (
    <React.Fragment>
      <div className="px-5 text-custom" id="playlist">
        <div className="row mx-5">
          <div className="col-sm-12 mx-4">
            <div id="playlist-songs">
              {props.songs.map((song, index) => (
                <div key={`songname-${index}`} className="playlist-song d-flex justify-content-center align-items-center" onClick={() => props.updatePlaylist(props.songs, index)}>
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
      </div>
    </React.Fragment>
  )
}

export default ShowPlayLanglists