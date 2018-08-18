import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { searchFocus, searchBlur, getList } from "./store/actionCreaters";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'


class Header extends Component {
  getAreaList() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map(item=><SearchInfoItem key={item}>{item}</SearchInfoItem>)
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
              <NavSearch className={this.props.focused ? "focused" : ''}
                onFocus={this.props.handleFocus}
                onBlur={this.props.handleBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? "iconfont focused" : 'iconfont'} >&#xe614;</i>
            {this.getAreaList()}
          </SearchWrapper>
        </Nav>
        <Addtion>
          <Button className="writting">
            <i className="iconfont">&#xe6b3;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addtion>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: () => {
      dispatch(getList())
      dispatch(searchFocus())
    },
    handleBlur: () => {
      dispatch(searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
