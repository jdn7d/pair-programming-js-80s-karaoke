// Your code goes here...
const songsList = document.querySelector("#songs-list")
const lyricsDisplay = document.querySelector("#lyrics-display") 
const h1 = lyricsDisplay.querySelector("h1")
const cancelButton = document.querySelectorAll("#song-controls-container button")[1]
const pauseButton = document.querySelectorAll("#song-controls-container button")[0]

let currentLyric = {}
let playLyrics = {}

function parseJSON(r) {
   return r.json()  
}




function showLyrics(e, song) {
   songsList.style.display = "none"
   lyricsDisplay.style.display = "block"
   let i = {count: 0}
   const parsedLyrics = song.lyrics.split("/")
   //const lyricTime = (song.playtime/parsedLyrics.length)*1000
   const lyricTime = 1000
   playLyrics = setInterval(displayLyrics, lyricTime, parsedLyrics, i) 
  
   cancelButton.addEventListener('click', stopLyrics) 
   pauseButton.addEventListener('click', pauseLyrics)

   function displayLyrics(parsedLyrics, i) {
      h1.innerText = parsedLyrics[i["count"]]
      i["count"] +=1
      if (i["count"] > (parsedLyrics.length - 1)) {
         stopLyrics(playLyrics)
      }
   }

   function stopLyrics() {
      clearInterval(playLyrics) 
      songsList.style.display = "block"
      lyricsDisplay.style.display = "none"
      h1.innerText = "Get ready Igor"
      pauseButton.removeEventListener("click", pauseLyrics)
      pauseButton.innerText = "Pause"
   }

   function pauseLyrics(e) {
      if (e.target.innerText === "Pause") {
         currentLyric["count"] = i["count"]
         e.target.innerText = "Resume" 
         clearInterval(playLyrics)
      }
      else {
         i["count"] = currentLyric["count"]
         e.target.innerText = "Pause" 
         playLyrics = setInterval(displayLyrics, lyricTime, parsedLyrics, i) 
  
      }

   }
}


function createButton(song) {
   const button = document.createElement("button")
   button.innerText = `${song.title} by ${song.artist}`
   songsList.appendChild(button) 
   button.addEventListener('click', function(e){
      showLyrics(e, song)
   })
}

fetch("http://localhost:3000/songs")
.then(parseJSON)
.then(function(songs) {
   for (song of songs) {
      createButton(song)      
   }
}) 



