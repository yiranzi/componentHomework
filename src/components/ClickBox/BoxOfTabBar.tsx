/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import TabBarInner from "@/components/Tabbar/TabBarInner";
import AbstractBox from "@/components/ClickBox/AbstractBox";

//.渲染box
//接受tabbar的click.create tabbar
interface StateTypes {
    index: number,//设置index的接口
    cbfClick: Function,//点击事件回调接口
    cbfHover: Function,
    cbfPress: Function,
    title: String,//可选标题
    image: String,//可选背景图
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
    }

    render (){
        let barHeight = 100;
        let styleClick = {
            backgroundColor: 'green',
        }
        let styleHover = {
            backgroundColor: 'blue',
        }
        let styleDefault = {
            width: '100px',
            height: '100px',
            backgroundColor: 'purple',
            border: '1px solid black',
        };
        let styleBox = {
            width: '100%',
            height: '100%',
        }

        return(<AbstractBox
            styleBox = {styleBox}
            styleClick = {styleClick}
            styleDefault = {styleDefault}
            styleHover = {styleHover}

            title = {this.props.title}
            index = {this.props.index}
            status = {this.props.status}
            cbfClick = {this.props.cbfClick}
            cbfHover = {this.props.cbfHover}>
        </AbstractBox>)
        //     <TabBar1
        // {/*这个需要多少个小bar*/}
        // count = {this.props.count}
        // {/*当前选中的是哪个*/}
        // currentIndex = {this.props.currentIndex}
        // cbfClick = {this.props.cbfClick}
        // {/*这一组的名称是啥*/}
        // dataIcon = {this.props.subDataIcon}
        // dataTitle = {this.props.subDataTitle}></TabBar1>

    }




}





