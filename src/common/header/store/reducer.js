import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST, MOUSE_LEAVE, MOUSE_ENTER, CHANGE_LIST } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set("focused", true)
        case SEARCH_BLUR:
            return state.set("focused", false)
        case SEARCH_LIST:
            return state.merge({
                "list": action.data,
                "totalPage": action.totalPage
            })
        case CHANGE_LIST:
            return state.set("page", action.page)
        case MOUSE_ENTER:
            return state.set("mouseIn", true)
        case MOUSE_LEAVE:
            return state.set("mouseIn", false)
        default:
            break;
    }


    return state
}