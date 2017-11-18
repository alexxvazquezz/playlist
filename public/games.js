function Game(title, producer, duration) {
  Media.call(this, title, duration);
  this.producer = producer;
}

Game.prototype = Object.create(Media.prototype);

Game.prototype.toHTML = function() {
  var songHTML = '<li';
  if (this.isPlaying) {
    songHTML += ' class="current"';
  }
  songHTML += '>';
  songHTML += this.title;
  songHTML += '  (';
  songHTML += this.producer;
  songHTML += ') ';
  songHTML += '<span class="duration">';
  songHTML += this.duration;
  songHTML += '</span></li>';
  return songHTML
};
