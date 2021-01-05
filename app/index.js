let songs
const URL = 'http://localhost:3000/songs'
const songsList = document.querySelector('#songs-list')
const lyricsDisplay = document.querySelector('#lyrics-display')
const pauseButton = document.querySelector('#song-controls-container').children[0]
const cancelButton = document.querySelector('#song-controls-container').children[1]

const renderSongsList = songs => {
  for (var song in songs) {
    console.log(song)
    const newButton = document.createElement('button')
    newButton.innerText = `${song.title} by ${song.artist}`
    songsList.append(newButton)
  }
}

const getSongs = () => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    songs = data
    renderSongsList(data)
  })
}
