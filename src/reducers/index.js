import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Yummy', duration: '4:05' },
    { title: 'Takeaway', duration: '3:56' },
    { title: 'Blinding lights', duration: '3:05' },
    { title: 'Pray for me', duration: '4:25' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
