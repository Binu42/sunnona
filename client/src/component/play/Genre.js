import React, { Component } from 'react'
import ShowPlaylists from '../MusicSelect/ShowPlaylists'
import ShowAlbums from '../MusicSelect/ShowAlbums'
import Navbar from '../layout/Navbar'
import Axios from 'axios';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedArtist: null
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.clearSelectedAlbum = this.clearSelectedAlbum.bind(this)
  }

  componentDidMount() {
    Axios.get("http://localhost:4000/genres")
      .then(genres => {
        this.setState({ genres: genres.data });
        // console.log(genres)
        // console.log(this.state.artists)
      })
  }

  render() {
    return (
      <main>
        <Navbar />
        <div className="albums">
          <ShowAlbums
            media={this.state.genres}
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

export default Artist;