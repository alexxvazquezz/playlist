function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

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
