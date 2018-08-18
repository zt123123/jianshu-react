import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST } from "./actionTypes";
import { fromJS } from "immutable"
import axios from "axios";
export const searchFocus = () => ({
    type: SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: SEARCH_BLUR
})

export const searchList = (data) => ({
    type: SEARCH_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000")
            .then(data => {
                dispatch(searchList(data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}