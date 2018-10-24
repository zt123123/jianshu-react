import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST, MOUSE_LEAVE, MOUSE_ENTER, CHANGE_LIST } from "./actionTypes";
import { fromJS } from "immutable"
import axios from "axios";
import { API_PREFIX } from "../../../static/config";

const searchList = (data) => ({
    type: SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})


export const searchFocus = () => ({
    type: SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: SEARCH_BLUR
})

export const changeList = (page) => ({
    type: CHANGE_LIST,
    page
})

export const mouseEnter = () => ({
    type: MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: MOUSE_LEAVE
})

export const getList = () => {
    return (dispatch) => {
        axios.get(`${API_PREFIX}tag`)
            .then(data => {
                dispatch(searchList(data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
