/**
 * Created by wuchuck on 7/26/17.
 */

//processbar的bar

import * as React from "react";
import AbstractBox from "@/components/ClickBox/AbstractBox";


interface StateTypes {
    myWidth: number,//宽度
    startIndex: number,//绘制起点
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
    }

    render (){
        let styleDefault = {
            transform: `translateX(${this.props.myWidth * this.props.startIndex}px)`,
            width: `${this.props.myWidth}`,
            height: '100%',
            backgroundColor: 'orange',
            transition: 'transform 1s'
        };
        return(<AbstractBox
            styleClick = {}
            styleDefault = {styleDefault}
            styleHover = {}

            status = {}
            cbfClick = {}
            index = {}
            content = {}
            arrayIndex = {}>
        </AbstractBox>)

    }

}





