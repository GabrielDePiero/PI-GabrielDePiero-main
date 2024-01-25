const initialState = {
  myFavorites: [],
  allCharacter: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacter: action.payload
      };
      
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacter: state.allCharacter // Mantén inalterado el array 'allCharacter'
      };
      
    case "FILTER":
      const allCharacterFiltered = state.allCharacter.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: allCharacterFiltered
      };

    case "ORDER":
      const allCharacterCopy = [...state.allCharacter]; // Corregir aquí
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharacterCopy.sort((a, b) => a.id - b.id)
            : allCharacterCopy.sort((a, b) => b.id - a.id)
      };

    default:
      return state;
  }
};

export default reducer;