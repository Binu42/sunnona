import React, { Component } from 'react'
import ShowPlaylists from '../MusicSelect/ShowPlaylists'
import ShowAlbums from '../MusicSelect/ShowAlbums'
import axios from 'axios'
import './styles.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      media: [],
      selectedAlbum: null
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.clearSelectedAlbum = this.clearSelectedAlbum.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:4000/albums')
      .then(album => {
        this.setState({ media: album.data });
        console.log(album)
      })
    console.log(this.state.media)
  }

  render() {
    return (
      <main>
        <div className="albums">
          {/* {!this.state.selectedAlbum
            ? <ShowPlaylists
              clearSelectedAlbum={this.clearSelectedAlbum}
              selectedAlbum={this.state.selectedAlbum}
              playlist={this.props.playlist}
              updatePlaylist={this.props.updatePlaylist}
              playlistIsPlaying={this.props.playlistIsPlaying}
              currentSongIndex={this.props.currentSongIndex} />
            : <ShowAlbums
              media={this.state.media}
              selectAlbum={this.selectAlbum}
              updatePlaylist={this.props.updatePlaylist}
              currentSongIndex={this.props.currentSongIndex}
              playlist={this.props.playlist}
              playlistIsPlaying={this.props.playlistIsPlaying} />} */}
          <ShowAlbums
            media={this.state.media}
            selectAlbum={this.selectAlbum}
            updatePlaylist={this.props.updatePlaylist}
            currentSongIndex={this.props.currentSongIndex}
            playlist={this.props.playlist}
            playlistIsPlaying={this.props.playlistIsPlaying} />
        </div>
        <div className="details text-center p-2">
          {
            this.state.selectedAlbum ?
              <ShowPlaylists
                clearSelectedAlbum={this.clearSelectedAlbum}
                selectedAlbum={this.state.selectedAlbum}
                playlist={this.props.playlist}
                updatePlaylist={this.props.updatePlaylist}
                playlistIsPlaying={this.props.playlistIsPlaying}
                currentSongIndex={this.props.currentSongIndex} />
              : ""
          }

        </div>
        <hr></hr>
      </main>
    )
  }

  selectAlbum(selectedAlbum) {
    this.setState({ selectedAlbum })
  }

  clearSelectedAlbum() {
    this.setState({ selectedAlbum: null })
  }
}
