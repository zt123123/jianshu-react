import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { searchFocus, searchBlur, getList, mouseEnter, mouseLeave, changeList } from "./store/actionCreaters";
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
    const { focused, list, page, totalPage,mouseIn, handleMouseEnter, handleMouseLeave, changeList } = this.props
    const newList = list.toJS()
    const pageList = [];
    console.log(page);

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    console.log(pageList);

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => changeList(page, totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    const { focused, handleFocus, handleBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch className={focused ? "focused" : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? "iconfont focused" : 'iconfont'} >&#xe614;</i>
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
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
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
    },
    changeList: (page, totalPage) => {
      if (page < totalPage) {
        dispatch(changeList(page + 1))
      } else {
        dispatch(changeList(1))
      }
    },
    handleMouseEnter: () => {
      dispatch(mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(mouseLeave())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
