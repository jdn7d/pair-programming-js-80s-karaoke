// globals //
let songs
const URL = 'http://localhost:3000/songs'
let currentLyrics
let currentLine = 0
let lyricsInterval
let timePerLyric

// elements //
const songsList = document.querySelector('#songs-list')
const lyricsDisplay = document.querySelector('#lyrics-display')
const pauseButton = document.querySelector('#song-controls-container').children[0]
const cancelButton = document.querySelector('#song-controls-container').children[1]

const switchToSongsList = () => {
  songsList.style.display = "block"
  lyricsDisplay.style.display = "none"
}

const switchToLyricsDisplay = () => {
  songsList.style.display = "none"
  lyricsDisplay.style.display = "block"
}

const clearSong = () => {
  currentLyrics = null
  currentLine = 0
  clearInterval(lyricsInterval)
  lyricsInterval = null
  switchToSongsList()
}

const pauseSong = () => {
  pauseButton.innerText = "Resume"
  clearInterval(lyricsInterval)
  lyricsInterval = null
}

const resumeSong = () => {
  pauseButton.innerText = "Pause"
  startLyricsInterval(timePerLyric)
}

const pauseOrResumeSong = () => {
  lyricsInterval && currentLyrics ? pauseSong() : resumeSong()
}

const nextLyrics = () => {
  currentLine++
  lyricsDisplay.children[0].innerText = currentLyrics[currentLine]
  if (currentLine >= currentLyrics.length) {
    clearSong()
  }
}

const startLyricsInterval = intervalTime => {
  lyricsInterval = setInterval(nextLyrics, intervalTime)
}

const startSong = song => {
  switchToLyricsDisplay()
  currentLine = 0
  currentLyrics = song.lyrics.split("/")
  lyricsDisplay.children[0].innerText = currentLyrics[currentLine]
  timePerLyric = song.playtime / currentLyrics.length * 100
  startLyricsInterval(timePerLyric)
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

cancelButton.addEventListener("click", clearSong)
pauseButton.addEventListener("click", pauseOrResumeSong)

getSongs()
