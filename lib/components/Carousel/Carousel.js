"use strict";
/**
 * this is a module demo, it is create by heartblood
 *
 * @module GYI-UI
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const className = require("./style/Carousel.less");
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
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
     * @type - get
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
            transform: this.props.direction === "vertical" ? `translateY(-${100 * parseInt(this.props.index)}%)` : `translateX(-${100 * parseInt(this.props.index)}%)`,
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
            React.createElement("div", { className: className.contentBottom + ' ' + this.props.stylebottom }, this.props.bottomNode),
            React.createElement("div", { className: className.contentRight + ' ' + this.props.styleRight }, this.props.rightNode),
            React.createElement("div", { className: className.contentLeft + ' ' + this.props.styleLeft }, this.props.leftNode)));
    }
}
Carousel.defaultProps = {
    direction: "vertical",
    contentPadding: "20%"
};
exports.default = Carousel;
