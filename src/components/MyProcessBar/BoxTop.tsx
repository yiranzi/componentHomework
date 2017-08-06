/**
 * Created by wuchuck on 7/26/17.
 */

//tabbar的bar

import * as React from "react";
import AbstractBox from "@/components/ClickBox/AbstractBox";


interface StateTypes {
    index: number,//bar编号
    cbfClick: Function,//点击事件回调接口
    content: Object,//内容包
    status: String,//操作状态
    arrayIndex: Array,//返还的数据包
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
    }

    render (){
        let styleClick = {
            color: 'white',
            height: '52px',
        }
        let styleHover = {
            color: 'white',
        }
        let styleDefault = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px',
            height: '42px',
            // backgroundColor: 'blue',
            border: '1px solid black',
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
}





