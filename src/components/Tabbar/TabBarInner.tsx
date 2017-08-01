/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import BoxInner from "@/components/ClickBox/BoxInner";

//计算tabbar内的结果.上报click事件
interface StateTypes {
    status: String,//tabbar底层的bar需要这个status来决定状态.这里直接用到了status数值.没传给替曾
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
        // this.cbfClick = this.cbfClick.bind(this);
        // this.cbfHover = this.cbfHover.bind(this);
        // this.state = {
            // currentIndex: -1,
            // currentFire: -1,
            // status: 'default',
        // };
    }

    render (){
        console.log(this.props.styleDefault)
        return(<div style = {this.props.styleDefault}>
            {this.renderBars()}
        </div>)

    }

    renderBars() {
        let arr = [];
        console.log(this.props.arrayIndex);
        for (let i = 0 ; i < this.props.count; i++) {
            let array = this.props.arrayIndex.slice();
            array.push(i);
            arr.push(<BoxInner
                arrayIndex={array}
                key={i}
                index = {i}
                status = {this.calcStatus(i)}
                cbfClick={this.props.cbfClick}
                cbfHover={this.cbfHover}
                title = {this.props.dataTitle[i]}/>)
        }
        return arr;
    }

    //根据回调带来的结果,确定按钮的样式.
    calcStatus(index) {
        //如果这个index 是被点击的那个
        console.log('!!!!!!!!!!!!!!!')
        if(this.props.currentIndex === index && this.props.status === 'click') {
            return 'click';
        } else {
            //如果这个index 什么都没触发
            return 'default'
        }
        //如果这个index 是被覆盖的那个
        // if(this.state.currentFire === index) {
        //     return 'hover';
        // }
        //如果这个index 什么都没触发
        return 'default'
    }

    //接受点击的回调
    // cbfClick(index,arrayIndex) {
    //     let
    //     this.props.cbfClick(this.props.index,arrayIndex,index);
        // if(type === 'choose') {
        //     this.setState({
        //         currentIndex: index,
        //     });
        //     this.props.cbfClick(this.props.index,arrayIndex,type);
        // }
        // else if(type === 'awake') {
        //     this.setState({
        //         status: 'click',
        //     });
        // }
    // }

    //接受覆盖的回调
    // cbfHover(arrayIndex) {
    //     let index = arrayIndex
    //     this.setState({
    //         status: 'hover',
    //         currentFire: index,
    //     })
    // }
}





