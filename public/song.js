function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
  var songHTML = '<li';
  if (this.isPlaying) {
    songHTML += ' class="current"';
  }
  songHTML += '>';
  songHTML += this.title;
  songHTML += ' - ';
  songHTML += this.artist;
  songHTML += '<span class="duration">';
  songHTML += this.duration;
  songHTML += '</span></li>';
  return songHTML
};
