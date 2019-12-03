import React, { Component } from 'react'
import ShowPlayLanglists from './KannadaLangSongPlay'
import Navbar from '../layout/Navbar'
import Axios from 'axios'

class LangSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      songs: []
    }
  }

  componentDidMount() {
    this.getLangSong(this.props.match)
  }

  // componentDidUpdate() {
  //   this.getLangSong(this.props.match)
  // }

  getLangSong = async (lang) => {
    const result = await Axios.get(`http://localhost:4000/lang/kannada`)
    console.log(result)
    this.setState({ songs: result.data })
  }

  search = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { songs, search } = this.state;
    const filteredSongs = songs.filter(song => {
      return song.name.toLowerCase().includes(search.toLowerCase());
    })
    return (
      <main>
        <Navbar getLangSong={this.props.getLangSong} />
        <div id="songs-list">
          <div>
            <h1 className="text-success text-center" style={{ "fontFamily": 'Rye, cursive', "fontSize": "44px" }}>Sunnona</h1>
          </div>
          <div className="container">
            <input type="text" className="form-control form-control-sm" onChange={this.search} name="search" placeholder="search for songs" />
            <h3 className="text-center text-capitalize">Hindi Songs List</h3>
          </div>
          <ShowPlayLanglists
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

export default LangSongs;