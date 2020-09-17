import React, { useState } from 'react';
import GifCard from './components/gifCard'
import axios from 'axios'

const App = () => {

  const [gifState, setGifState] = useState({
    keyword: '',
    search: []
  })

  gifState.handleSearch = event => {
    console.log(gifState.keyword)
    event.preventDefault()
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${gifState.keyword}&api_key=f3lKJ52za9QKZQIXqSu3zXNo5Q1r34ag&limit=1`)
      .then(function ({data}) {
        
        let gifs = data.data
         
        console.log("success got data", gifs);
         
         gifs.forEach(gif => {
           
          let gifData = {
            keyword: gifState.keyword,
            title: gif.title,
            img_url: gif.images.original.url
           }

           let newSearch = JSON.parse(JSON.stringify(gifState.search))
           newSearch.push(gifData)
           setGifState({ ...gifState, search: newSearch, keyword: '' })
      
          });
      
        })
      .catch(err => console.error(err))
  }

  gifState.handleInputChange = event => {
    setGifState({ ...gifState, [event.target.name]: event.target.value })
  }
    return(
      <>
        <input type="text" name="keyword" onChange={gifState.handleInputChange}/>
        <button onClick={gifState.handleSearch}>Search for Gif's</button>
        <ul>
          {
            gifState.search.map(gif => <GifCard gif={gif} />)
          } 
        </ul>
      </>
    )
}

export default App;