export default function tilesReducer(state={
  tiles: []
}, action) {
  switch (action.type) {
    case "GET_TILES":
    break;

    case "ADD_TILE":
    state = {...state, tiles: [...state.tiles, action.payload]}
    break;
  }
  return state;
}
