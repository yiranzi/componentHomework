"use strict";
/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ProgressBar_1 = require("@/components/ProgressBar/ProgressBar");
const Spinner_1 = require("@/components/Spinner/Spinner");
const StepProgressBar_1 = require("@/components/StepProgressBar/StepProgressBar");
const SnackBar_1 = require("@/components/SnackBar/SnackBar");
const Carousel_1 = require("@/components/Carousel/Carousel");
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
class Greeting extends React.Component {
    constructor() {
        super();
        this.clickhandle = this.clickhandle.bind(this);
        this.SnackBarClick = this.SnackBarClick.bind(this);
        this.handleIndexChangeCallback = this.handleIndexChangeCallback.bind(this);
        this.state = {
            index: 1,
            Carouselindex: 0
        };
    }
    clickhandle() {
        this.setState({
            index: 2
        });
    }
    SnackBarClick() {
    }
    handleIndexChangeCallback(index) {
        if (this.state.Carouselindex + index > -1 && this.state.Carouselindex + index < 4) {
            this.setState((prevState, props) => ({
                Carouselindex: prevState.Carouselindex + index
            }));
        }
    }
    render() {
        return (React.createElement("div", { style: { height: "100%" } },
            React.createElement(Carousel_1.default, { index: this.state.Carouselindex, handleIndexChangeCallback: this.handleIndexChangeCallback, direction: "" },
                React.createElement("div", { "data-index": "1", style: { height: "100%" } },
                    React.createElement("h1", null, "ProgressBar"),
                    React.createElement(ProgressBar_1.default, { progress: 40, buffer: 20, isLoading: false })),
                React.createElement("div", { "data-index": "2", style: { height: "100%" } },
                    React.createElement("h1", null, "Spinner"),
                    React.createElement(Spinner_1.default, { size: 1 })),
                React.createElement("div", { "data-index": "3", style: { height: "100%" } },
                    React.createElement("h1", { onClick: this.clickhandle }, "StepProgressBar"),
                    React.createElement(StepProgressBar_1.default, { steps: steps, index: this.state.index, width: 500 })),
                React.createElement("div", { "data-index": "4", style: { height: "100%" } },
                    React.createElement("h1", null, "SnackBar"),
                    React.createElement("button", { onClick: this.SnackBarClick }),
                    React.createElement(SnackBar_1.default, { active: true })))));
    }
}
exports.Greeting = Greeting;
let steps = [{
        index: '1',
        title: 'step 1'
    }, {
        index: '2',
        title: 'step 2'
    }, {
        index: '3',
        title: 'step 3'
    }, {
        index: '4',
        title: 'step 4'
    }];
