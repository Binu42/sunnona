import React, { Component } from 'react'
import ShowPlaylists from '../MusicSelect/ShowPlaylists'
import Navbar from '../layout/Navbar'
import Axios from 'axios';
import Show from '../MusicSelect/Show';

class Mixed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      albums: [],
      artists: [],
      selectedArtist: null
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.clearSelectedAlbum = this.clearSelectedAlbum.bind(this)
  }

  componentDidMount() {
    Axios.get("http://localhost:4000/genres")
      .then(genres => {
        this.setState({ genres: genres.data });
      })
    Axios.get("http://localhost:4000/artists")
      .then(artists => {
        this.setState({ artists: artists.data });
      })
    Axios.get("http://localhost:4000/albums")
      .then(albums => {
        this.setState({ albums: albums.data });
      })
  }

  render() {
    return (
      <main>
        <Navbar />
        <div className="albums">
          <Show
            genre={this.state.genres}
            album={this.state.albums}
            artist={this.state.artists}
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

export default Mixed;