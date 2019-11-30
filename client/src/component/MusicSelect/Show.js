import React from 'react'

const Show = (props) => {
  const pointerStyles = { cursor: 'pointer' }

  return (
    <div>
      <div className="p-2">
        <h2 className="text-center">Albums</h2>
        <hr></hr>
        <div className="grid">{props.album.map((playlist, index) => (
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

      <div className="p-4">
        <h2 className="text-center">Artists</h2>
        <hr></hr>
        <div className="grid">{props.artist.map((playlist, index) => (
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

      <div className="p-4">
        <h2 className="text-center">Genre</h2>
        <hr></hr>
        <div className="grid">{props.genre.map((playlist, index) => (
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
    </div>
  )
}

export default Show