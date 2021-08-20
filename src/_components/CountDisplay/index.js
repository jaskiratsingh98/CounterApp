import React from 'react';
import { connect } from "react-redux";
import { Button, ButtonGroup } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {handleCountUp, handleCountDown, handleCountReset} from '../actions'

class CountDisplay extends React.Component {

    render() {
        let colorVal = 'red'
        if (this.props.counter.count % 2 === 0) {
            colorVal = 'blue'
        }
        // console.log(this.props)
        return <div>
            <div >
                <Typography variant="h5" noWrap>
                    Count Value:
                </Typography>
                <h1 style={{ color: colorVal }}>{this.props.counter.count}</h1>
            </div>
            <div style={{margin: '50px'}}>
                <ButtonGroup
                    orientation="vertical"
                    variant="text"
                    aria-label="outlined secondary button group vertical">
                    <Button onClick={this.props.handleCountUp}>Count Up</Button>
                    <Button onClick={this.props.handleCountDown}>Count Down</Button>
                    <Button onClick={this.props.handleCountReset}>Reset Counter</Button>
                </ButtonGroup>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        // testForCombined: state.testForCombined
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        handleCountUp: () => dispatch(handleCountUp()),
        handleCountDown: () => dispatch(handleCountDown()),
        handleCountReset: () => dispatch(handleCountReset())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CountDisplay);