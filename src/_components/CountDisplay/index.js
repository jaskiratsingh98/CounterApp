import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { Typography } from '@material-ui/core';

class CountDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 5
        }

        this.handleCountUp = this.handleCountUp.bind(this);
        this.handleCountDown = this.handleCountDown.bind(this);
        this.handleCountReset = this.handleCountReset.bind(this);
    }

    handleCountUp() {
        let value = this.state.text;
        this.setState({ text: value + 1 })
    };

    handleCountDown() {
        let value = this.state.text;
        this.setState({ text: value - 1 })
    }

    handleCountReset() {
        this.setState({ text: 5 })
    }


    render() {
        let colorVal = 'red'
        if (this.state.text % 2 === 0) {
            colorVal = 'blue'
        }

        return <div>
            <div >
                <Typography variant="h5" noWrap>
                    Count Value:
                </Typography>
                <h1 style={{ color: colorVal }}>{this.state.text}</h1>
            </div>
            <div style={{margin: '50px'}}>
                <ButtonGroup
                    orientation="vertical"
                    variant="text"
                    aria-label="outlined secondary button group vertical">
                    <Button onClick={this.handleCountUp}>Count Up</Button>
                    <Button onClick={this.handleCountDown}>Count Down</Button>
                    <Button onClick={this.handleCountReset}>Reset Counter</Button>
                </ButtonGroup>
            </div>
        </div>
    }
}

export default CountDisplay;