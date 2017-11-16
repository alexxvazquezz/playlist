function Playlist() {
  this.songs = [];
  this.songsIndex = 0;
};

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.songsIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.songsIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.songsIndex++;
  if (this.songsIndex === this.songs.length) {
    this.songsIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = ' ';
  for (var i = 0; i < this.songs.length; i++) {
     list.innerHTML += this.songs[i].toHTML();
  }
};
