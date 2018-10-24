import { HOME_LIST, ADD_HOME_LIST, CHANGE_SCROLL_SHOW } from "./actionTypes";

import axios from "axios";
import { fromJS } from "immutable";
import { API_PREFIX } from "../../../static/config";

export const homeList = (data) => ({
    type: HOME_LIST,
    data
})

export const addhomeList = (data, page) => ({
    type: ADD_HOME_LIST,
    data: fromJS(data),
    page
})

export const changeScroll = (flag) => ({
    type: CHANGE_SCROLL_SHOW,
    flag
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get(`${API_PREFIX}home`)
            .then(data => {
                dispatch(homeList(data.data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getMoreLists = (page) => {
    return (dispatch) => {
        axios.get(`${API_PREFIX}loadMore?page=${page}`)
            .then(data => {
                dispatch(addhomeList(data.data.data, page + 1))
            })
            .catch(err => {
                console.log(err);
            })
    }
}