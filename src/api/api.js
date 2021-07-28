import * as axios from "axios";

let instance = axios.create({
    baseURL: 'http://tmgwebtest.azurewebsites.net/api/textstrings/',
    headers: {"TMG-Api-Key": "0J/RgNC40LLQtdGC0LjQutC4IQ=="}
})
export const textApi = {
    requestText(id) {
        //отправлем get запрос на сервер
        return instance.get(id).then(response => {
            return response
        })
    }
}