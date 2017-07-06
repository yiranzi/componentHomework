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
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
class Greeting extends React.Component {
    constructor() {
        super();
        this.clickhandle = this.clickhandle.bind(this);
        this.state = {
            index: 1
        };
    }
    clickhandle() {
        this.setState({
            index: 2
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "ProgressBar"),
            React.createElement(ProgressBar_1.default, { progress: 40, buffer: 20, isLoading: false }),
            React.createElement("h1", null, "Spinner"),
            React.createElement(Spinner_1.default, { size: 1 }),
            React.createElement("h1", { onClick: this.clickhandle }, "StepProgressBar"),
            React.createElement(StepProgressBar_1.default, { steps: steps, current_index: this.state.index, width: 500 })));
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
