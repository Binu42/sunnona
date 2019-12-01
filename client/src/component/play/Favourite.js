import React, { Component } from 'react'
import ShowPlaylists from './FavPlay'
import Navbar from '../layout/Navbar'
import Axios from 'axios';

class Favourite extends Component {
  constructor(props) {
    super(props);
    let loggedInUser = localStorage.getItem('userName')
    this.state = {
      favourite: [],
      loggedInUser
    }
  }

  componentDidMount() {
    const loggedInUser = this.state.loggedInUser;
    Axios.post("http://localhost:4000/get/favourites", { loggedInUser })
      .then(favourite => {
        this.setState({ favourite: favourite.data });
        // console.log(this.state.artists)
      })
  }

  render() {
    return (
      <main>
        <Navbar />
        <div id="song-list">
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
}

export default Favourite;