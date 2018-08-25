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
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, changeList } = this.props
    const newList = list.toJS()
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch
              onClick={() => changeList(page, totalPage, this.spin)}
            >
              <i ref={spin => this.spin = spin} className="iconfont spin">&#xe851;</i>
              换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    const { focused, handleFocus, handleBlur, list } = this.props
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
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? "iconfont zoom focused" : 'iconfont zoom'} >&#xe614;</i>
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
    handleFocus: (list) => {
      (list.size === 0) && dispatch(getList());
      dispatch(searchFocus())
    },
    handleBlur: () => {
      dispatch(searchBlur())
    },
    changeList: (page, totalPage, spin) => {
      let angle = spin.style.transform.replace(/[^0-9]/ig, "")
      if (!angle) {
        angle = 0
      } else {
        angle = parseInt(angle, 10)
      }
      console.log(angle);
      
      spin.style.transform = "rotate(" + (angle+360) + "deg)"

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
