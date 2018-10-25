import { combineReducers } from "redux-immutable";

import headerReducer from "../common/header/store"
import homeReducer from "../pages/home/store/reducer"
import DetailReducer from "../pages/detail/store/reducer"

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: DetailReducer,
})

export default reducer