import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { getMoreLists } from '../store/actionCreators';

class List extends Component {

    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img className="pic" src={item.get("imgUrl")} alt="" />
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(["home", "articleList"]),
        page: state.getIn(["home", "articlePage"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(getMoreLists(page))
        }
    }
}

export default connect(mapState, mapDispatch)(List)