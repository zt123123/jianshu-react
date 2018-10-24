import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RecommendWrapper, RecommendItem } from '../style';

 class Recommend extends PureComponent {

    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")}></RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>

        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(["home", "recommendList"])
    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(Recommend)