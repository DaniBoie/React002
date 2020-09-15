import Card1 from './components/Card1'
import React, { Component } from 'react'


let songi = [
  {
    title: 'Sunglasses at night',
    artist: 'Corey Hart',
    img: 'https://i.scdn.co/image/ab67616d00001e02b261545058d4ec62dae2bfed'
  },
  {
    title: 'Seventeen',
    artist: 'Peach Pit',
    img: 'https://i.scdn.co/image/ab67616d0000b273241c6f0d19ffcda38f58c7f8'
  },
  {
    title: "Don't",
    artist: 'Bryson Tiller',
    img: 'https://i.scdn.co/image/ab67616d0000b273d5f3cea8affdca01a0dc754f'
  },
  {
    title: 'She Needs Him',
    artist: "Her's",
    img: 'https://i.scdn.co/image/ab67616d00001e02280a001e43c93792dd1e27c7'
  },
  {
    title: 'Hesitation',
    artist: 'Hot Flash Heat Wave',
    img: 'https://i.scdn.co/image/ab67616d00001e0253d3c1d9d7a61e05517c400e'
  },

]

class App extends Component {

  state = {
    song: '',
    artist: '',
    img: '',
    songs: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


  handleAddItem = event => {
    event.preventDefault()
    let newSongs = JSON.parse(JSON.stringify(this.state.songs))
    console.log(newSongs)

    newSongs.push({
      title: this.state.song,
      artist: this.state.artist,
      img: this.state.img
    })

    this.setState({ songs: newSongs, song: '', artist: '', img: '' })

  }

  render() {
    return (
      <>
        

        

        <div className="container" style={{ textAlign: 'center' }}>
          <form>
            <label htmlFor="item">Song Name:</label>
            <input
              type="text"
              name="song"
              value={this.state.song}
              onChange={this.handleInputChange}
            />
            <label htmlFor="item">Artist:</label>
            <input
              type="text"
              name="artist"
              value={this.state.artist}
              onChange={this.handleInputChange}
            />
            <label htmlFor="item">Image Link:</label>
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleAddItem}>Add Item</button>
          </form>

          <ul>
            {
              this.state.songs.map(song => <Card1 song={song} />)
            }
          </ul>

          <h1>Some of My Favs:</h1>
          {
            songi.map(song => <Card1 song={song} />)
          }
        </div>
      </>
    )
  }
}

export default App;
