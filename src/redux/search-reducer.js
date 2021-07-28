import {textApi} from "../api/api";

let initialState = {
    text: [{id: 1, text: 'Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание форм развития.'},
        {id: 2, text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий.'},
        {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 4, text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
    id: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET-TEXT':
            //Записвыем полученный текст с сервера в state
            return {...state, text: action.text}
        case 'SET-ID':
            //Записвыем введенные ID строк в State
            const uniqueId = [...new Set(action.id)]
            return {...state, id: uniqueId}
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
    //Отправляем запрос на сервер и ждем ответ, после записываем данные в state
    let response = await textApi.requestText(id);
    dispatch(setText(response));
}
