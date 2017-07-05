/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from "react";
import * as className from "./style/ProgressBar.less";

interface ProgressBarPropsTypes {
    width?: string;
    progress: number;
    buffer?: number;
    isLoading?: boolean;
}
/**
 * @class ProgressBar
 * @type ICT-UI-Component
 * @author heartblood
 * @param {string} width - [可选] 宽度
 * @param {number} progress - [必填] 当前进度长度(百分比)
 * @param {number} buffer - [可选] 当前缓存进度长度(百分比)
 * @param {boolean} isLoading - [可选] 为true时候，将无视其余参数，进入加载状态动画
 */
export default class ProgressBar extends React.PureComponent<ProgressBarPropsTypes> {
    public static defaultProps: Partial<ProgressBarPropsTypes> = {
        buffer: 0,
        width: "500px"
    };
    render() {
        return (
            <div className={(className as any).container} style={{width: this.props.width}}>
                <Progress length={this.props.progress} isLoading={this.props.isLoading}/>
                <ProgressMax length={100 - this.props.buffer} isLoading={this.props.isLoading}/>
                <ProgressBuffer length={this.props.buffer} isLoading={this.props.isLoading}/>
            </div>
        );
    }
}


interface ProgressPropsTypes {
    length: number;
    isLoading: boolean;
}
const Progress = (props: ProgressPropsTypes) => {
    const style = {
        width: props.isLoading ? undefined : `${props.length}%`
    };
    return (
        <div className={props.isLoading ? (className as any).loading : (className as any).progress} style={style}></div>
    );
};

interface ProgressMaxPropsTypes {
    length: number;
    isLoading: boolean;
}
const ProgressMax = (props: ProgressMaxPropsTypes) => {
    const style = {
        width: props.isLoading ? "100%" : `${props.length}%`
    };
    return (
        <div className={(className as any).progressMax} style={style}></div>
    );
};

interface ProgressBufferPropsTypes {
    length: number;
    isLoading: boolean;
}
const ProgressBuffer = (props: ProgressBufferPropsTypes) => {
    const style = {
        width: props.isLoading ? "0" : `${props.length}%`
    };
    return (
        <div className={(className as any).progressBuffer} style={style}></div>
    );
};

