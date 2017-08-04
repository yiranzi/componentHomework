/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbsTabBar.less";
import AbstractBox from "@/components/ClickBox/AbstractBox";
import Box1 from "@/../ClickBox/BoxInner";

interface StateTypes {
    //逻辑
    count: number,//按钮数量
    currentIndex: number,//当前选中的按钮
    cbfClick: Function,//按钮栏中的按钮被选中的回调

    //填充内容
    dataIcon: Array,//icon数组
    dataTitle: Array,//标题数组
    // //定义样式
    // status: String,//表示tabbar所处的状态
    // styleBox: Object,//操作区域
    // styleClick: Object,//选中
    // styleHover: Object,//移动
    // stylePress: Object,//按下的时候
    styleDefault: Object,//默认
}


export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        this.cbfHover = this.cbfHover.bind(this);
        // this.cbfHoverOut = this.cbfHoverOut.bind(this);
        // this.calcStatus = this.calcStatus.bind(this);
        // this.cbfPress = this.cbfPress.bind(this);
        this.state = {
            currentIndex: -1,
            currentFire: -1,
            status: 'default',
        };
    }

    render (){
        let index = this.props.index;
        return(<div style = {this.props.styleDefault}>
            {this.renderList()}
        </div>)

    }

    renderList() {
        console.log('!!!!!!!');
        let arr = [];
        // arr.push(<AbstractBox key={1} index = {1} boxStyle={boxStyle} >123</AbstractBox>)
        for (let i = 0 ; i < this.props.count; i++) {
            let titleNode = <span>{this.props.dataTitle[i]}</span>
            arr.push(<Box1 key={i} index = {i} status = {this.calcStatus(i)}
                                  cbfClick={this.cbfClick}
                                  cbfHover={this.cbfHover}
                           cbfHoverOut = {this.cbfHoverOut}>
                    {titleNode}
            </Box1>);
        }
        return arr;
    }

    //根据回调带来的结果,确定按钮的样式.
    calcStatus(index) {
        //如果这个index 是被点击的那个
        if(this.state.currentIndex === index) {
            return 'click';
        }
        //如果这个index 是被覆盖的那个
        if(this.state.currentFire === index) {
            return 'hover';
        }
        //如果这个index 什么都没触发
        return 'default'
    }

    //接受点击的回调
    cbfClick(index) {
        this.setState({
            status: 'click',
            currentIndex: index,
            currentFire: index,
        });
        this.props.cbfClick(index);
    }

    //接受覆盖的回调
    cbfHover(index) {
        this.setState({
            status: 'hover',
            currentFire: index,
        })
    }
    // cbfHoverOut(index) {
    //     console.log('cbfHoverOut');
    // }
    //
    // cbfPress(index) {
    //
    // }

}





