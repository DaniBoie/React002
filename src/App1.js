import React from 'react';
import Card1 from './components/Card1'

let songs = [
  {
    title: 'Sunglasses at night',
    artist: 'Corey Hart',
    poster: 'https://i.scdn.co/image/ab67616d00001e02b261545058d4ec62dae2bfed'
  },
  {
    title: 'Seventeen',
    artist: 'Peach Pit',
    poster: 'https://i.scdn.co/image/ab67616d0000b273241c6f0d19ffcda38f58c7f8'
  },
  {
    title: "Don't",
    artist: 'Bryson Tiller',
    poster: 'https://i.scdn.co/image/ab67616d0000b273d5f3cea8affdca01a0dc754f'
  },
  {
    title: 'She Needs Him',
    artist: "Her's",
    poster: 'https://i.scdn.co/image/ab67616d00001e02280a001e43c93792dd1e27c7'
  },
  {
    title: 'Hesitation',
    artist: 'Hot Flash Heat Wave',
    poster: 'https://i.scdn.co/image/ab67616d00001e0253d3c1d9d7a61e05517c400e'
  },

]

function App() {
  return (
    <>
      <div className="container" style={{textAlign: 'center'}}>
      <h1>Some of My Favs:</h1>
      {
        songs.map(song => <Card1 song={song}/>)
      }
    </div>
    </>
  );
}

export default App;
