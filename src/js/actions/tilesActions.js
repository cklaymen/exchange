export function addTile(value, date) {
  return {
    type: "ADD_TILE",
    payload: {
      value,
      date
    }
  }
}
