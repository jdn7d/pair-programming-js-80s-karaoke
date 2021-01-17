# Eighties Karaoke Machine

Today we're building a basic karaoke machine featuring top hits from the 80's. The app is already styled and just needs a pair of programmers to add the functionality. There won't be any sound since that would be another technical achievement, this will instead be a more basic app that just displays the lyrics on a timer.

## Getting Started

Fork and clone the repository. Look over all the code so you understand what's already been built. Once you feel comfortable, run the mock backend with `json-server --watch db.json`. Open up `index.html` with your browser of choice.

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

When a button is clicked, the `#songs-list` is hidden and gets replaced by the `#lyrics-display`. This display shows each lyric one at a time (the lyrics have been separated by `/` in the string so you can easily split them). 

The song has a total playtime in seconds and the amount of time each lyric shows should add up to the playtime (you can show each lyric for an equal amount of time). For testing, it might be better to speed that time up a little.

## Finishing the Song

Once a song's lyrics have been displayed in full, the `#lyrics-display` is hidden again and replaced by the `#songs-list`. Be sure when you do this that any intervals / timeouts get cleared since not doing this can lead to memory leaks and bugs.

## Cancel Song Button

The `#cancel-song` button stops the song from playing (essential clearing any intervals / timeouts) and hides the `#lyrics-display` while also making the `#songs-list` visible. It essentially ends the song early.

## BONUS: Pause Song

The `#pause-song` button is tricky so tackle this one last as a bonus. Add functionality to this button that, while a song is playing, will pause the lyrics and keep them from continuing. You may need to change some of your original functionality. Using globally scoped variables can be benificial here (for example `currentLyric` can help keep track of where you left off). The button's text gets replaced by `Resume`. 

When clicked again, the lyrics start playing on the screen again from where they left off. The button changes its text back to `Pause`.

## Things to Consider

- When the buttons get loaded, how do you attach an event to them so they know which song to play? There are several ways of doing this (through function closures, datasets, or even by getting a song by name based on the name in the button).

- Based on a song's total runtime, how can you determine how much screentime each lyric gets?

- It may be easiest to have a single function that handles clearing a song when it finishes / gets cancelled rather than building two...

- It's recommended for testing that a song's playtime gets cut so you can get to the end of the song quickly.
