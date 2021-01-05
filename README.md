# Eighties Karaoke Machine

Today we're building a basic karaoke machine that gets served over the web.

## Getting Started

Fork and clone the repository. Look over all the code so you understand what's already been built. Once you feel comfortable, run the json server with `json-server --watch db.json`. Also open up the `index.html` with your browser of choice.

## List All Songs

Your first deliverable is to list all the karaoke songs in the `#songs-list` element. Ideally, these will be buttons that a user can then click to load their song of choice:

```
<div id="songs-list">

  <button>Take On Me by A-Ha</button>
  <button>Billie Jean by Michael Jackson</button>
  <button>Under Pressure by David Bowie</button>
  <button>Like A Virgin by Madonna</button>
  <!-- and so on... -->

</div>
```

## Playing the Song

When a button is clicked, the `#songs-list` disappears and gets replaced by the `#lyrics-display`. This display shows each lyric one at a time (the lyrics have been separated by `/` in the string). The song has a total playtime in seconds and the amount of time each lyric shows should add up to the playtime (you can show each lyric for an equal amount of time).

Additionally, when a song starts to play the header's text ought to get replaced with the song's title.

## Finishing the Song

Once a song's lyrics have been displayed in full, the `#lyrics-display` is hidden again and replaced by the `#songs-list`. Be sure when you do this that any intervals / timeouts get cleared since not doing this can lead to memory leaks.

Additionally, the header's text ought to revert back to "Welcome to 80's Karaoke!"

## Cancel Song Button

The `#cancel-song` button hides stops the song from playing (essential clearing any intervals / timeouts) and hides the `#lyrics-display` while also making the `#songs-list` visible. It essentially ends the song early.

Additionally, the header's text ought to revert back to "Welcome to 80's Karaoke!"

## BONUS: Pause Song

The `#pause-song` button is tricky so tackle this one last as a bonus. Add functionality to this button that, while a song is playing, will pause the lyrics and keep them from continuing. The button's text gets replaced by `Play Song` and when clicked again, starts the lyrics playing on the screen again from where they left off.

## Things to Consider

- When the buttons get loaded, how do you attach an event to them so they know which song to play? There are several ways of doing this (through function closures, datasets, or even by getting a song by name based on the name in the button).

- Based on a song's total runtime, how can you determine how much screentime each lyric gets?

- It may be easiest to have a single function that handles clearing a song when it finishes / gets cancelled rather than building two...

- It's recommended for testing that a song's playtime gets cut so you can get to the end of the song quickly.
