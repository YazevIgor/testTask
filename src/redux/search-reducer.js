import {textApi} from "../api/api";

let initialState = {
    text: [{id: 1, text: 'Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание форм развития.'},
        {id: 2, text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий.'},
        {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 4, text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
    id: [],
    requestData: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET-TEXT':
            return {...state, text: action.text}
        case 'SET-ID':
            return {...state, id: action.id}
        default:
            return state;
    }
}

const setText = (text) => {
    return {type: 'SET-TEXT', text}
}
export const setId = (id) => {
    return {type: 'SET-ID', id}
}


export const getText = (id) => async (dispatch) => {
    let response = await textApi.requestText(id);
    debugger;
    dispatch(setText(response));
}
