// This is a constructor function that can later be used to instantiate new Playlist objects.
// Basically it's like `constructor` function for classes.
// `this` refers to the new object being created
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

// prototypes using `this` it refers to the specific instance calling the method

// basic function pushing a songTitle to the songs array
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

// if there are songs then the first song in the songs array becomes the currentSong
// Then a console log of the variable
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

// assuming there is more than one song so a song skip can even happen
// the array is shifted so the 2nd item becomes the first
// then that song being the first index now becomes currentSong
// then console log for both if cases
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// basic function logging the name
// and a printed list of songs separated by a comma
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// test cases for the code
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
