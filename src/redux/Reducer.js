const initialState = {
    age: 20
}

const Reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'AGE_UP_ASYNC'){
        newState.age += action.value;
    }
    if(action.type === 'AGE_DOWN'){
        newState.age -= action.value;
    }
    return newState;
}

export default Reducer;