import React, { Component } from 'react'
import ShowPlaylists from './FavPlay'
import Navbar from '../layout/Navbar'
import Axios from 'axios';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: [],
      selectedAlbum: null
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.clearSelectedAlbum = this.clearSelectedAlbum.bind(this)
  }

  componentDidMount() {
    Axios.get("http://localhost:4000/get/favourites")
      .then(favourite => {
        this.setState({ favourite: favourite.data });
        // console.log(this.state.artists)
      })
  }

  render() {
    return (
      <main>
        <Navbar />
        <div className="container text-center p-2">
          <ShowPlaylists
            songs={this.state.favourite}
            playlist={this.props.playlist}
            updatePlaylist={this.props.updatePlaylist}
            playlistIsPlaying={this.props.playlistIsPlaying}
            currentSongIndex={this.props.currentSongIndex} />
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