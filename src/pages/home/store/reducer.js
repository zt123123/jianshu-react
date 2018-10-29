import { HOME_LIST, ADD_HOME_LIST, CHANGE_SCROLL_SHOW } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [{
        id: 1,
        imgUrl: "7.png"
    },
    {
        id: 2,
        imgUrl: "30.png"
    },
    {
        id: 3,
        imgUrl: "jianquan.png"
    },
    {
        id: 4,
        imgUrl: "xuetang.png"
    },
    {
        id: 5,
        imgUrl: "youxian.png"
    }],
    articlePage: 1,
    showScroll: false
})

const homeList = (state, action) => {
    return state.merge({
        "topicList": fromJS(action.data.topicList),
        "articleList": fromJS(action.data.articleList),
        // "recommendList": fromJS(action.data.recommendList)
    })
}

const addHomeList = (state, action) => {
    return state.merge({
        articlePage: action.page,
        articleList: state.get("articleList").concat(action.data)
    })
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case HOME_LIST:
            return homeList(state, action)
        case ADD_HOME_LIST:
            return addHomeList(state, action)
        case CHANGE_SCROLL_SHOW:
            return state.set("showScroll", action.flag)
        default:
            return state
    }
}