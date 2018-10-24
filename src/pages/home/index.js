import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getHomeData, changeScroll } from './store/actionCreators';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';


class Home extends PureComponent {
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEents()
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollShow)
    }
    bindEents() {
        window.addEventListener("scroll", this.props.changeScrollShow)
    }
    handleScrollShow() {
        window.scrollTo(0, 0)
    }
    render() {
        const { showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534186297455&di=18425ac1f501ece87f6e2f66e29b9fca&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F01%2F38%2F35bc409e1b04506764beb7c9dd5a7f39.jpg" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.handleScrollShow}>回到顶部</BackTop> : null
                }

            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(["home", "showScroll"]),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(getHomeData())
        },
        changeScrollShow() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(changeScroll(true))
            } else {
                dispatch(changeScroll(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);