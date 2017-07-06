"use strict";
/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const className = require("./style/Carousel.less");
/**
 * 滑动容器组件
 * @class Carousel
 * @type ICT-UI-Component
 * @author heartblood
 * @param {number} index - [必填] 当前显示index
 * @param {function} handleIndexChangeCallback - [可选] index改变时候会触发该回调函数，必须含有一个参数index，index为 +- 1，表明当前index改变值
 * @param {string} direction - [可选] 表明方向，vertical为垂直，horizontal为水平，默认为垂直
 * @param {string} styleTop - [可选] 顶部slot样式
 * @param {string} styleBottom - [可选] 底部slot样式
 * @param {string} styleRight - [可选] 右部slot样式
 * @param {string} styleLeft - [可选] 左部slot样式
 * @param {JSX.Element} topNode - [可选] 顶部slot
 * @param {JSX.Element} bottomNode - [可选] 底部slot
 * @param {JSX.Element} rightNode - [可选] 右部slot
 * @param {JSX.Element} leftNode - [可选] 左部slot
 */
class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.touchDistance = 10;
        this.contentBody = this.getContentBody;
        this.touchStartPoint = { screenX: 0, screenY: 0 };
        this.touchStartPointTemp = { screenX: 0, screenY: 0 };
        this.touchLock = false;
        this.animationLockCount = 0;
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }
    /**
     * 获取显示列表元素
     * @func
     * @type get
     * @return Array<JSX.Element>
     */
    get getContentBody() {
        if (Array.isArray(this.props.children)) {
            let returnElement = [];
            this.props.children.forEach((element, index) => {
                if (element.props.hasOwnProperty('data-index')) {
                    returnElement.push(element);
                }
            });
            returnElement.sort((a, b) => {
                return a.props['data-index'] - b.props['data-index'];
            });
            return returnElement;
        }
        else {
            if (this.props.children.props.hasOwnProperty('data-index')) {
                return [this.props.children];
            }
        }
    }
    style(index) {
        return {
            transform: this.props.direction === "vertical" ? `translateY(-${100 * this.props.index}%)` : `translateX(-${100 * this.props.index}%)`,
            padding: this.props.contentPadding,
            visibility: index == this.props.index || index + 1 == this.props.index || index - 1 == this.props.index ? "visible" : "hidden",
            verticalAlign: "top"
        };
    }
    handleTouchStart(event) {
        if (!this.touchLock) {
            this.touchStartPoint.screenX = event.touches[0].screenX;
            this.touchStartPoint.screenY = event.touches[0].screenY;
            this.animationLockCount = 0;
        }
        else {
            return false;
        }
    }
    handleTouchMove(event) {
        if (!this.touchLock && this.animationLockCount === 0) {
            if (this.props.direction === "vertical") {
                if (this.touchDistance + event.touches[0].screenY - this.touchStartPoint.screenY <= 0) {
                    this.touchLock = true;
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(1);
                }
                else if (this.touchDistance - event.touches[0].screenY - this.touchStartPoint.screenY <= 0) {
                    this.touchLock = true;
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(-1);
                }
            }
            else {
                if (this.touchDistance + event.touches[0].screenX - this.touchStartPoint.screenX <= 0) {
                    this.touchLock = true;
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(1);
                }
                else if (this.touchDistance - event.touches[0].screenX - this.touchStartPoint.screenX <= 0) {
                    this.touchLock = true;
                    this.animationLockCount += 1;
                    this.props.handleIndexChangeCallback && this.props.handleIndexChangeCallback(-1);
                }
            }
        }
        else {
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
        return (React.createElement("div", { className: className.container },
            React.createElement("div", { style: { flexDirection: this.props.direction === "vertical" ? "column" : "row" }, className: className.contentBody, onTouchStart: this.handleTouchStart, onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd }, this.contentBody.map((element, index) => {
                return React.createElement("div", { key: index, className: className.contentPage, style: this.style(index) }, element);
            })),
            React.createElement("div", { className: className.contentTop + ' ' + this.props.styleTop }, this.props.topNode),
            React.createElement("div", { className: className.contentBottom + ' ' + this.props.styleBottom }, this.props.bottomNode),
            React.createElement("div", { className: className.contentRight + ' ' + this.props.styleRight }, this.props.rightNode),
            React.createElement("div", { className: className.contentLeft + ' ' + this.props.styleLeft }, this.props.leftNode)));
    }
}
Carousel.defaultProps = {
    direction: "vertical",
    contentPadding: "20%"
};
exports.default = Carousel;
