/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";
import AbstractBox from "./AbstractBox";


interface StateTypes {
    index: number,
    cbfClick: Function,//点击事件回调接口
    content: Object,
    status: String,
    arrayIndex: Array,
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
    }

    render (){
        let styleClick = {
            width: '100%',
            height: '50px',
            borderBottom: '1px solid black',
            color: 'white',
            backgroundColor: this.props.content.content.color,
        }
        let styleHover = {
            color: 'white',
        }
        let styleDefault = {
            width: '100%',
            height: '42px',
            // backgroundColor: 'blue',
            borderBottom: '1px solid black',
            color: 'black',
            backgroundColor: this.props.content.content.color,
        };
            return(<AbstractBox
                                styleClick = {styleClick}
                                styleDefault = {styleDefault}
                                styleHover = {styleHover}

                                status = {this.props.status}
                                cbfClick = {this.props.cbfClick}
                                index = {this.props.index}
                                content = {this.props.content}
                                arrayIndex = {this.props.arrayIndex}>
                {this.renderContent()}
            </AbstractBox>)

    }

    //在这里处理可以完全负责内部样式.
    renderContent() {
        console.log(this.props.content.content);
        //根据内容包
        let title = this.props.content.content.title;
        return (<span>{title}</span>)
    }

    cbfClick() {
        console.log(arguments)
        let type = 'awake';
        this.props.cbfClibk(arguments,type)
    }
}





