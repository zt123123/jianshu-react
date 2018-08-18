import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set("focused", true)
        case SEARCH_BLUR:
            return state.set("focused", false)
        case SEARCH_LIST:
            return state.set("list", action.data)
        default:
            break;
    }


    return state
}