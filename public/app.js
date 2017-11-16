let playlist = new Playlist();
let song1 = new Song('Cuando No Estas', 'Andres Calamaro', '4:32');
let song2 = new Song('Lithium', 'Nirvana', '5:43');
let song3 = new Song('La Flac', 'Jarabe al Palo', '3:43');
playlist.add(song1);
playlist.add(song2);
playlist.add(song3);

playlist.play();

let songList = document.getElementById('playlist');

playlist.renderInElement(songList);


// Make Buttons works

let playButton = document.getElementById('play');
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(songList);
}
let nextButton = document.getElementById('next');
nextButton.onclick = function() {
  playlist.next()
  playlist.renderInElement(songList)
}
let stopButton = document.getElementById('stop');
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(songList)
}
