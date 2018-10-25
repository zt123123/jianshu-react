import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from "./style";
import { getDetails } from "./store/actionCreators";
import { connect } from 'react-redux';

class Detail extends PureComponent {
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}} />
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(["detail", "title"]),
        content: state.getIn(["detail", "content"]),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(id){
            console.log("mapDispatchToProps");
            
            dispatch(getDetails(id))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Detail)