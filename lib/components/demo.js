"use strict";
/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ProgressBar_1 = require("@/components/ProgressBar/ProgressBar");
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
class Greeting extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(ProgressBar_1.default, { progress: 40, buffer: 20, isLoading: true }));
    }
}
exports.Greeting = Greeting;
