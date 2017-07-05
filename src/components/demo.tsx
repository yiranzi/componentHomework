/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */

import * as React from "react";
import * as className from "./style/demo.less";

import ProgressBar from "@/components/ProgressBar/ProgressBar";

/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
export class Greeting extends React.Component<{ name: String }, {}> {
    render() {
        return <div><ProgressBar progress={40} buffer={20} isLoading={true} /></div>;
    }
}

