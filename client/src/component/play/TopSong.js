import React, { Component } from 'react'
import ShowPlaylists from './SongPlay'
import Navbar from '../layout/Navbar'
import Axios from 'axios';

class TopSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
      search: ""
    }
  }

  componentDidMount() {
    console.log('helo')
    Axios.get("http://localhost:4000/songs/sorted")
      .then(top => {
        this.setState({ top: top.data });
        console.log(top)
        // console.log(this.state.artists)
      })
  }

  search = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { top, search } = this.state;
    const filteredSongs = top.filter(song => {
      return song.name.toLowerCase().includes(search.toLowerCase());
    })
    return (
      <main>
        <Navbar />
        <div id="songs-list">
          <div>
            <h1 className="text-success text-center" style={{ "fontFamily": 'Rye, cursive', "fontSize": "44px" }}>Sunnona</h1>
          </div>
          <div className="container">
            <input type="text" className="form-control form-control-sm" onChange={this.search} name="search" placeholder="search for songs" />
            <h3 className="text-center">Trending Songs List</h3>
          </div>
          <ShowPlaylists
            songs={filteredSongs}
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

export default TopSong;