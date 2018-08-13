import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set("focused", true)
        case SEARCH_BLUR:
            return state.set("focused", false)
        default:
            break;
    }


    return state
}