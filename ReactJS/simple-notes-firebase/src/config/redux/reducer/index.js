
const initState = {
    popup: false,
    isLogin: false
}


const reducer = (state=initState , action) => {
    if(action.type === 'CHANGE_POPUP'){
        return{
            ...state,
            popup: action.value
        }
    }
    if(action.type === 'CHANGE_ISLOGIN'){
        return{
            ...state,
            islogin: action.value
        }
    }
    return state;
}

export default reducer;