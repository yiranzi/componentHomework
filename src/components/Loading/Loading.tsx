/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from "react";
import * as className from "./style/Loading.less";

interface LoadingPropsTypes {
    type?: string
}
/**
 * 多种Loading样式
 * @class Loading
 * @type ICT-UI-Component
 * @author heartblood
 * @param {string} type - [可选] 选择种类，默认为type1
 */
export default (props: LoadingPropsTypes) => {
    return (
        <div>
            <i className={(className as any).type_one_circleOne}></i>
            <i className={(className as any).type_one_circleTwo}></i>
            <i className={(className as any).type_one_circleThree}></i>
        </div>
    );
}
