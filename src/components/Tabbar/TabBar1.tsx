/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import AbsTabBar from "@/components/Tabbar/AbsTabBar";

interface StateTypes {
    //逻辑
    count: number,//按钮数量
    currentIndex: number,//当前选中的按钮
    cbfClick: Function,//按钮栏中的按钮被选中的回调
    //填充内容
    dataIcon: Array,//icon数组
    dataTitle: Array,//标题数组
    //定义样式

}


export default class Tabbar1 extends React.Component<StateTypes> {
    constructor() {
        super();
    }

    render (){
        let barHeight = 100;
        let styleBox = {
            width: '100%',
            height: '100%',
        }
        let styleClick = {

        }
        let styleHover = {

        }
        let stylePress = {

        }
        let styleDefault = {
            width: '200px',
            height: `${barHeight * this.props.count}`,
            backgroundColor: 'purple',
        }

        return(<AbsTabBar
            count = {this.props.count}
            currentIndex = {this.props.currentIndex}
            cbfClick = {this.props.cbfClick}
            dataIcon = {this.props.dataIcon}
            dataTitle = {this.props.dataTitle}/>)
    };
}





