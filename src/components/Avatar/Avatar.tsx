/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from "react";
import * as className from "./style/Avatar.less";

interface AvatarPropsTypes {
    size?: string
    shape?: string
    src?: string,
    style?: Object,
    children ?: JSX.Element | string
}
const defaultProps: Partial<AvatarPropsTypes> = {
    size: "32px",
    style: {},
    shape: "circle",
    src: null
};
/**
 * 头像组件
 * @class Avatar
 * @type ICT-UI-Component
 * @author heartblood
 * @param {string} size - [可选] 小大比例,默认值为 32px, 单位可为px | rem 
 * @param {Enum{ 'circle', 'square' }} shape - [可选] 头像形状，默认为circle，若参数填错误仍返回circle
 * @param {string} src - 头像 图片 | svg 地址
 * @param {object} style - 自定义style样式，用于背景颜色，borderRadius的细节微调
 * @param {JSX.Element} children - 组件可以包含文字，若src不存在时候，会显示该文字
 */
export default (props: AvatarPropsTypes) => {
    let arr = props.size ? props.size.split("r") : defaultProps.size.split("r");
    let size: string, unit: string;
    if (arr.length === 2) {
        size = arr[0];
        unit = "r" + arr[1];
    } else {
        arr = props.size ? props.size.split("p") : defaultProps.size.split("p")
        if (arr.length === 2) {
            size = arr[0];
            unit = "p" + arr[1];
        }
    }
    if (props.shape === "square") {
        return (
            <span style={Object.assign({}, props.style, { width: size + unit, height: size + unit, borderRadius: parseFloat(size)/8 + unit })} className={(className as any).avatar + " " + (className as any).square}>
                {props.src ? <img src={props.src} style={{width: "100%", height: "100%"}}></img> : <span style={{width: "100%", height: "100%"}}>{props.children}</span>}
            </span>
        );
    }
    return (
        <span style={Object.assign({}, props.style, { width: size + unit, height: size + unit, borderRadius: parseFloat(size)/2 + unit })} className={(className as any).avatar + " " + (className as any).circle}>
            {props.src ? <img src={props.src} style={{width: "100%", height: "100%"}}></img> : <span style={{width: "100%", height: "100%"}}>{props.children}</span>}
        </span>
    );
}

