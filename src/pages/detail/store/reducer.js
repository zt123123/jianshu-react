import { GET_DETAIL_LIST } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    title: "",
    content: ""
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case GET_DETAIL_LIST:
            console.log(action)
            return state.merge(
                {
                    title: action.data.title,
                    content: action.data.content
                }
            )
        default:
            return state
    }
}