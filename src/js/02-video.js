import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 2000));

function onTimeUpdate(evt) {
    const time = evt.seconds
    localStorage.setItem(CURRENT_TIME_KEY, time);
}

const saveCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);

if (saveCurrentTime) {
  player.setCurrentTime(saveCurrentTime);
}