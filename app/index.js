let songs
const URL = 'http://localhost:3000/songs'
const songsList = document.querySelector('#songs-list')
const lyricsDisplay = document.querySelector('#lyrics-display')
const pauseButton = document.querySelector('#song-controls-container').children[0]
const cancelButton = document.querySelector('#song-controls-container').children[1]

const startSong = song => {
  songsList.style.display = "none"
  lyricsDisplay.style.display = "block"
  console.log(song);
}

const renderSongsList = songs => {
  songs.forEach(song => {
    const newButton = document.createElement('button')
    newButton.innerText = `${song.title} by ${song.artist}`
    songsList.append(newButton)
    newButton.addEventListener("click", () => startSong(song))

  })
}

const getSongs = () => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    songs = data
    renderSongsList(data)
  })
}

getSongs()
