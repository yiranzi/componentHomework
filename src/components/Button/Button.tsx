/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from "react";
import * as className from "./style/Button.less";

interface SpinnerPropsTypes {
    size?: number
}
/**
 * 转菊花组件，更好看的转菊花
 * @class Spinner
 * @type ICT-UI-Component
 * @author heartblood
 * @param {number} size - [可选] 小大比例
 */
export default (props: SpinnerPropsTypes) => {
    return (
        <a className={(className as any).a}>Push</a>
    );
}
