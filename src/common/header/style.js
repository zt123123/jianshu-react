import styled from 'styled-components';
import logo from '../../static/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height:56px;
	border: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
	href: "/"
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logo});
	background-size:contain;
`

export const Nav = styled.div`
	width:960px;
	padding-right:70px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin:0 auto;
	height:100%;
`

export const NavItem = styled.div`
	height: 56px;
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color: #969696;
	}
	&.active{
		color:#ea6f5a;
	}
`

export const SearchWrapper = styled.div`
	float:left;
	position:relative;

	.iconfont{
		position:absolute;
		bottom:5px;
		right:5px;
		border-radius:15px;
		width:30px;
		height:30px;
		line-height:30px;
		text-align:center;
		&.focused{
			background:#777;
			color:#fff;
		}
	}
`

export const SearchInfo = styled.div`
	position:absolute;
	left:0;
	top:56px;
	width:240px;
	padding:0 20px;
	background:#fff;
	box-shadow:0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
`
export const SearchInfoSwitch = styled.span`
	float:right;
	font-size:13px;
`
export const SearchInfoList = styled.div`
	overflow:hidden;
`
export const SearchInfoItem = styled.a`
	display:block;
	float:left;
	line-height:20px;
	padding:0 5px;
	margin-right:10px;
	margin-bottom:15px;
	font-size:12px;
	border:1px solid #ddd;
	color:#333;
	border-radius:2px;
`

export const NavSearch = styled.input.attrs({
	placeholder: "搜索",
})`
	&.slide-enter{
		width:160px;
		transition:all 0.2s ease-out;
	}
	&.slide-enter-active{
		width:240px;
	}
	&.slide-exit{
		width:240px;
		transition:all 0.2s ease-out;
	}
	&.slide-exit-active{
		width:160px;
	}
	width: 160px;
	height: 38px;
	padding: 0 35px 0 20px;
	margin-top:9px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	background-color: #eee;
	border:none;
	outline:none;
	color:#777;
	border-radius: 19px;
	font-size: 14px;
	&::placeholder{
		color: #999;
	}
	&.focused{
		width:240px;
	}
`

export const Addtion = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	font-size:14px;
	&.reg{
		color:#ec6149;
	}
	&.writting{
		color:#fff;
		background:#ec6149;
	}
`


