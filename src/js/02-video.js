import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = "videoplayer-current-time";
const player = new Player('vimeo-player');

player.on('timeupdate', throttle((data) =>
  localStorage.setItem(KEY, data.seconds), 500)
);

const savedTime = localStorage.getItem(KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}
