/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from "react";
import * as className from "./style/StepProgressBar.less";

interface StepProgressBarPropsTypes {
    steps: Array<Object>
    width?: number
    index: number
}
/**
 * 步骤进度条组件，用于步骤提示等
 * @class StepProgressBar
 * @type ICT-UI-Component
 * @author heartblood
 * @param {number} width - [可选] 宽度(单位px) 尚未做rem兼容
 * @param {number} index - [必填] 当前进度，不能超过总step长度，可动态改变，从1开始计数
 * @param {Array<{index:number, title: String}>} steps - [必填] step内容数组，index为step步骤数字，title为下方文字说明，传入的数组须有序， title为可选
 */
export default class StepProgressBar extends React.PureComponent<StepProgressBarPropsTypes> {
    private readonly realWidth: number= (this.props.width - 32) * 4 / 3
    constructor(props: StepProgressBarPropsTypes) {
        super(props);
        this.changeCircleStyle = this.changeCircleStyle.bind(this);
        this.changeProgressStyle = this.changeProgressStyle.bind(this);
        console.log(this.realWidth)
    }
    changeCircleStyle(index: number): String {
        if (index < this.props.index) {
            return (className as any)['circle-green'];
        }
        if (index === this.props.index) {
            return (className as any)['circle-gray'];
        }
        return (className as any)['circle-white'];
    }
    changeProgressStyle(index: number) {
        if (index < this.props.index - 1) {
            return (className as any)['progress-full-line'];
        }
        if (index === this.props.index - 1) {
            return (className as any)['progress-half-line'];
        }
        return (className as any)['progress-null-line'];
    }
    get stepRenderBody() {
        return this.props.steps.map(function (value: {index:number, title: String}, index: number) {
            return (
                <div className={(className as any).stepField} key={index}>
                    <div className={(className as any).state} style={{ width: index < this.props.steps.length - 1 ? `${this.realWidth/4}px` : 'width: 32px' }}>
                        <div className={this.changeCircleStyle(index)}>
                            <span style={{display: index >= this.props.index ? "inline-block" : "none"}}>{value.index}</span>
                            <img className={(className as any).okImg} src={require("@/assets/image/StepProgressBar/ok.svg")} width="24px" height="24px" style={{display: index >= this.props.index ? "none" : "inline"}}></img>
                        </div>
                        <div className={(className as any).backline} 
                            style={{
                                width: index < this.props.steps.length-1 ? `${this.realWidth/4-32}px` : 'width: 32px',
                                display: index < this.props.steps.length-1 ? "inline-block":"none" 
                            }}>
                            <div className={this.changeProgressStyle(index)}></div>
                        </div>
                    </div>
                    <div className={(className as any)['step-title']}>
                        {value.title}
                    </div>
                </div >
            );
        }.bind(this));
    }
    render() {
        return (
            <div className={(className as any).container} >
                <div
                    className={(className as any).step}>
                    {this.stepRenderBody}
                </div>
            </div>
        );
    }
}

