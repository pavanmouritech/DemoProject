import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../redux/store/Store';
import { Album, AlbumInfo, AlbumResponseError } from '../../screens/Types';
  
  export const initialState: AlbumInfo = {
    isLoading: false,
    album: undefined,
    albumResponseError: undefined,
  };
  
  export const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
      callAlbum: state => {
        state.isLoading = true;
      },
      albumSuccess: (state, action: PayloadAction<Album>) => {
        state.album = action.payload;
        state.isLoading = false;
      },
      albumError: (state, action: PayloadAction<AlbumResponseError>) => {
        state.albumResponseError = action.payload;
        state.isLoading = false;
      },
    },
  });
  
  export const {callAlbum, albumSuccess, albumError} = albumSlice.actions;
  
 
  export const selectAlbumInfo = (state: RootState) => state.album;
  const albumReducer = albumSlice.reducer;
  export default albumReducer;