import { HOME_LIST, ADD_HOME_LIST, CHANGE_SCROLL_SHOW } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [{
        id: 1,
        imgUrl: "https://static.nodeveloper.top/img/7_day.png"
    },
    {
        id: 2,
        imgUrl: "https://static.nodeveloper.top/img/30_day.png"
    },
    {
        id: 3,
        imgUrl: "https://static.nodeveloper.top/img/banquan.png"
    },
    {
        id: 4,
        imgUrl: "https://static.nodeveloper.top/img/youxian.png"
    },
    {
        id: 5,
        imgUrl: "https://static.nodeveloper.top/img/xuetang.png"
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