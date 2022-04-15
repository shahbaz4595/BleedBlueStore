export const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
      return {value:action.payload, isValid: action.payload.includes('@')};
    }
    return {value:'', isValid: false}
  }
  
  
export const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
      return {value:action.payload, isValid: action.payload.trim().length > 8};
    }
    return {value:'', isValid: false}
  }

export const nameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value:action.payload, isValid: action.payload.trim().length > 0};
    }
    return {value:'', isValid: false}
}