/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */

import * as React from "react";
import * as className from "./style/demo.less";

import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Spinner from "@/components/Spinner/Spinner";
import StepProgressBar from "@/components/StepProgressBar/StepProgressBar";

interface StateTypes {
    index: number
}
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
export class Greeting extends React.Component<{ name: String }, StateTypes> {
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
        })
    }
    render() {
        return (
            <div>
                <h1>ProgressBar</h1>
                <ProgressBar progress={40} buffer={20} isLoading={false} />
                <h1>Spinner</h1>
                <Spinner size={1}/>
                <h1 onClick={this.clickhandle}>StepProgressBar</h1>
                <StepProgressBar steps={steps} current_index={this.state.index} width={500}/>
            </div>
        );
    }
}

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