/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import BoxContain from "@/components/ClickBox/BoxContain";

//计算tabbar内的结果.上报click事件.等待更新currentIndex
interface StateTypes {
    status: String,
    //逻辑
    count: number,//按钮数量
    currentIndex: number,//当前选中的按钮
    cbfClick: Function,//按钮栏中的按钮被选中的回调

    //填充内容
    dataIcon: Array,//icon数组
    dataTitle: Array,//标题数组
    styleDefault: Object,//默认
}


export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.state = {
            currentIndex: -1,
            status: 'default',
        };
    }

    render (){
        return(<div style = {this.props.styleDefault}>
            {this.renderBars()}
        </div>)

    }

    renderBars() {
        let arr = [];
        for (let i = 0 ; i < this.props.count; i++) {
            let array = [];
            array.push(i);
            arr.push(<BoxContain
                sub = {this.props.sub}
                    key={i}
                   title = {this.props.dataTitle[i]}
                   index = {i}
                   status = {this.calcStatus(i)}
                   cbfClick={this.props.cbfClick}
                   cbfHover={this.cbfHover}
                    arrayIndex = {array}/>)
        }
        return arr;
    }

    //根据回调带来的结果,确定按钮的样式.
    calcStatus(index) {
        //如果这个index 是被点击的那个
        if(this.props.currentIndex === index && this.props.status === 'click') {
            return 'click';
        } else {
            //如果这个index 什么都没触发
            return 'default'
        }
    }
}





