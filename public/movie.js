function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);


Movie.prototype.toHTML = function() {
  var songHTML = '<li';
  if (this.isPlaying) {
    songHTML += ' class="current"';
  }
  songHTML += '>';
  songHTML += this.title;
  songHTML += '  (';
  songHTML += this.year;
  songHTML += ') ';
  songHTML += '<span class="duration">';
  songHTML += this.duration;
  songHTML += '</span></li>';
  return songHTML
};
