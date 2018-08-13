import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { searchFocus,searchBlur } from "./store/actionCreaters";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch className={props.focused ? "focused" : ''}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i className={props.focused ? "iconfont focused" : 'iconfont'} >&#xe614;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.get("focused")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: () => {
      dispatch(searchFocus())
    },
    handleBlur: () => {
      dispatch(searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
