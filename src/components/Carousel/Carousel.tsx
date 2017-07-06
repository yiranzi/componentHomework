/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from 'react';
import * as className from './style/Carousel.less';

interface propsTypes {
    index: number
    width?: Number | String
    height?: Number | String
    contentPadding?: String
    handleIndexChangeCallback?: Function
    direction?: String
    styleTop?: String
    stylebottom?: String
    styleLeft?: String
    styleRight?: String
    topNode?: JSX.Element
    bottomNode?: JSX.Element
    rightNode?: JSX.Element
    leftNode?: JSX.Element
}


/**
 * 滑动容器组件
 * @class Carousel
 * @type ICT-UI-Component
 * @author heartblood
 * @param {number} index - [可选] 宽度(单位px) 尚未做rem兼容
 * @param {number} index - [必填] 当前进度，不能超过总step长度，可动态改变，从1开始计数
 * @param {Array<{index:number, title: String}>} steps - [必填] step内容数组，index为step步骤数字，title为下方文字说明，传入的数组须有序， title为可选
 */
export default class Carousel extends React.PureComponent<propsTypes> {
    name: "SliderView"
    private readonly touchDistance: number = 10
    private readonly contentBody = this.getContentBody
    private touchStartPoint: { screenX: number, screenY: number } = { screenX: 0, screenY: 0 }
    private touchStartPointTemp: { screenX: number, screenY: number } = { screenX: 0, screenY: 0 }
    private touchLock: Boolean = false
    private animationLockCount: number = 0
    public static defaultProps: Partial<propsTypes> = {
        direction: "vertical",
        contentPadding: "20%"
    };
    constructor(props: propsTypes) {
        super(props);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }
    /**
     * 获取显示列表元素
     * @func
     * @type - get
     */
    get getContentBody() {
        if (Array.isArray(this.props.children)) {
            let returnElement: Array<JSX.Element> = [];
            this.props.children.forEach((element: JSX.Element, index: number) => {
                if (element.props.hasOwnProperty('data-index')) {
                    returnElement.push(element);
                }
            });
            returnElement.sort((a: JSX.Element, b: JSX.Element) => {
                return a.props['data-index'] - b.props['data-index'];
            })
            return returnElement;
        } else {
            if ((this.props.children as JSX.Element).props.hasOwnProperty('data-index')) {
                return [this.props.children]
            }
        }
    }
    style(index: number) {
        return {
            transform: this.props.direction === "vertical" ? `translateY(-${100 * this.props.index}%)` : `translateX(-${100 * this.props.index}%)`,
            padding: this.props.contentPadding,
            visibility: index == this.props.index || index + 1 == this.props.index || index - 1 == this.props.index ? "visible" : "hidden",
            verticalAlign: "top"
        }
    }
    handleTouchStart(event: any) {
        if (!this.touchLock) {
            this.touchStartPoint.screenX = event.touches[0].screenX;
            this.touchStartPoint.screenY = event.touches[0].screenY;
            this.animationLockCount = 0;
        } else {
            return false
        }
    }
    handleTouchMove(event: any) {
        if (!this.touchLock && this.animationLockCount === 0) {
            if (this.props.direction === "vertical") {
                if (this.touchDistance + event.touches[0].screenY - this.touchStartPoint.screenY <= 0) {
                    this.touchLock = true;
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(1);
                } else if (this.touchDistance - event.touches[0].screenY - this.touchStartPoint.screenY <= 0) {
                    this.touchLock = true
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(-1);
                }
            } else {
                if (this.touchDistance + event.touches[0].screenX - this.touchStartPoint.screenX <= 0) {
                    this.touchLock = true;
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(1);
                } else if (this.touchDistance - event.touches[0].screenX - this.touchStartPoint.screenX <= 0) {
                    this.touchLock = true
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(-1);
                }
            }
        } else {
            return false;
        }
    }
    handleTouchEnd() {
        if (this.touchLock && this.animationLockCount === 1) {
            this.animationLockCount = 2;
            this.touchLock = false;
        }

    }
    render() {
        return (
            <div className={(className as any).container}>
                <div
                    style={{ flexDirection: this.props.direction === "vertical" ? "column" : "row" }}
                    className={(className as any).contentBody}
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}>
                    {this.contentBody.map((element, index) => {
                        return <div key={index} className={(className as any).contentPage} style={this.style(index)}>{element}</div>
                    })}
                </div>
                <div className={(className as any).contentTop + ' ' + this.props.styleTop}>{this.props.topNode}</div>
                <div className={(className as any).contentBottom + ' ' + this.props.stylebottom}>{this.props.bottomNode}</div>
                <div className={(className as any).contentRight + ' ' + this.props.styleRight}>{this.props.rightNode}</div>
                <div className={(className as any).contentLeft + ' ' + this.props.styleLeft}>{this.props.leftNode}</div>
            </div>
        );
    }
}

