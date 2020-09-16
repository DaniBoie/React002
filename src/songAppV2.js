import React, { useState, useEffect } from 'react';
import Card1 from './components/Card1'
import axios from 'axios'

const App = () => {

  const [songState, setSongState] = useState({
    song: '',
    artist: '',
    img: '',
    songs: []
  })

  songState.handleSearch = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${songState.song}`)
      .then(({ data }) => {
        setSongState({ songs: data, song: '' })
      })
      .catch(err => console.error(err))
  }

  songState.handleInputChange = event => {
    setSongState({...songState, [event.target.name]: event.target.value })
  }

  songState.handleAddItem = event => {
    event.preventDefault()
    let newSongs = JSON.parse(JSON.stringify(songState.songs))
    console.log(newSongs)

    newSongs.push({
      title: songState.song,
      artist: songState.artist,
      img: songState.img
    })

    setSongState({...songState, songs: newSongs, song: '', artist: '', img: '' })

  }

  // RUNS directly after page load
  useEffect(() => {
    console.log('HI')
  }, [])

  return (
    
      <div className="container" style={{ textAlign: 'center' }}>
        <form>
          <label htmlFor="item">Song Name:</label>
          <input
            type="text"
            name="song"
            value={songState.song}
            onChange={songState.handleInputChange}
          />
          <label htmlFor="item">Artist:</label>
          <input
            type="text"
            name="artist"
            value={songState.artist}
            onChange={songState.handleInputChange}
          />
          <label htmlFor="item">Image Link:</label>
          <input
            type="text"
            name="img"
            value={songState.img}
            onChange={songState.handleInputChange}
          />
          <button onClick={songState.handleAddItem}>Add Item</button>
        {/* <button onClick={songState.handleSearch}>Search for movies</button> */}

        </form>

        <ul>
          {
            songState.songs.map(song => <Card1 song={song} />)
          } 
        </ul>
      </div>
    

  )
}

export default App;
