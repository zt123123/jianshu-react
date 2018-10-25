import { GET_DETAIL_LIST } from "./actionTypes";

import axios from "axios";
import { API_PREFIX } from "../../../static/config";

export const getDetailList = (data) => ({
    type: GET_DETAIL_LIST,
    data
})

export const getDetails = (id) => {
    return (dispatch) => {
        axios.get(`${API_PREFIX}detail?id=${id}`)
            .then(data => {
                console.log("getDetails");

                dispatch(getDetailList(data.data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}