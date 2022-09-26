

const initialState = {
  comics: [],
  searchText: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FILTER_COMICS': {
      const comics = action.payload;
      return {
        ...state,
        comics,
      };
    }
    case 'SET_TEXT': {
      const searchText = action.payload;
      return {
        ...state,
        searchText,
      };
    }
    default:
      return state;
  }
}