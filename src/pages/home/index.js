import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from './store/actionCreators';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

class Home extends Component {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534186297455&di=18425ac1f501ece87f6e2f66e29b9fca&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F01%2F38%2F35bc409e1b04506764beb7c9dd5a7f39.jpg" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }

}

const mapStateToProps = (state) => {
    return {
        list: "",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData: () => {
            dispatch(getHomeData())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);