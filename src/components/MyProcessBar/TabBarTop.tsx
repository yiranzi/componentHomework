/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import BoxTop from "@/components/MyProcessBar/BoxTop";

//tabbar组件.里面有很多小的bar
//计算tabbar内的结果.上报click事件.等待更新currentIndex
interface StateTypes {
    content: Object,//内容
    status: String,//tabbar状态
    currentIndex: number,//当前选中的按钮
    cbfClick: Function,//按钮栏中的按钮被选中的回调
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

    //渲染内部组件
    renderBars() {
        let arr = [];
        for (let i = 0 ; i < this.props.content.length; i++) {
            //获取
            let subContent = this.props.content[i];
            arr.push(<BoxTop
                    content = {subContent}
                    key={i}
                    index = {i}
                    status = {this.calcStatus(i)}
                    cbfClick={this.props.cbfClick}
                    arrayIndex = {this.recordIndex(i)}/>)
        }
        return arr;
    }

    //经过一个tabbar,记录子节点的编号到数组里.
    recordIndex(index) {
        let array = [];
        array.push(index);
        return array
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





