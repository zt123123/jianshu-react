import { HOME_LIST } from "./actionTypes";
import axios from "axios";

export const homeList = (data) => ({
    type: HOME_LIST,
    data
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/api/home")
            .then(data => {
                dispatch(homeList(data.data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}