export const initialState = {
  user: null,
  //   REMOVE after finished developing
  token: null,
  // token:
  //   "BQBfcLcf3tYJaw9P52I_XAKk_VAUlUAXxozVBdZuZVEus06GUxzyI8WnRV6LlD9EXa-0n97R9KkXg9ykN4gTijXPeHpkxl26uvVW0d3z0-kkg0cC-ewpZZaIeyVOX7pJe_fEnpp_o82V9leGYTBIonzbDDU6OFdD7TqBUvzXvxQashUPin24Brq8Axxl3AFKC1SsX4y6pt-w5hisn--twG4JuXL-o_asEvcMe_2F-rkIFs7Czx1gvya5J2E-GsFscAxRW62sCx2KHGe2LdQell5DdfohIPz6XWzkb5gsGo27",
  playlists: [],
  playing: "",
  playlist: null,
  selectedPlaylistId: "1FgcbRuXs4AWxjK4XGJNbx",
  playerState: false,
};

export const reducer = (state, action) => {
  // console.log(action);
  // Action -> type , [payload]
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_PLAYING":
      return { ...state, playing: action.playing };
    case "SET_PLAYLIST":
      return { ...state, playlist: action.playlist };
    case "SET_PLAYLIST_ID":
      return { ...state, selectedPlaylistId: action.selectedPlaylistId };
    case "SET_PLAYER_STATE":
      return { ...state, playerState: action.playerState };
    default:
      return state;
  }
};
