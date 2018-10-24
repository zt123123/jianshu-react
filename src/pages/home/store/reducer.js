import { HOME_LIST, ADD_HOME_LIST } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case HOME_LIST:
            console.log(action);

            return state.merge({
                "topicList": fromJS(action.data.topicList),
                "articleList": fromJS(action.data.articleList),
                "recommendList": fromJS(action.data.recommendList)
            })
        case ADD_HOME_LIST:
            return state.merge({
                articlePage: action.page,
                articleList: state.get("articleList").concat(action.data)
            })
        default:
            return state
    }
}