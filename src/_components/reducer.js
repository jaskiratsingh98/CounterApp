const counterReducer =(state={ count: 6}, action) => {
  switch (action.type) {
      case 'COUNT_UP':
        return {
            ...state,
            count: state.count+1,
        };

      case 'COUNT_DOWN':
        return {
            ...state,
            count: state.count-1,
        };

      case 'RESET': 
        return {
            ...state,
            count: 6,
        };

      default:
        return { 
          ...state,

        };
  }
}

export default counterReducer