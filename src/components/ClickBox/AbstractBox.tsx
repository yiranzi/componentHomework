/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";


interface StateTypes {

    index: number,//设置index的接口.(设置了就不会改变的,不应该放在state中)
    status: String,//表示按钮的状态.
    cbfClick: Function,//点击事件回调接口
    // cbfHover: Function,
    // cbfPress: Function,
    //数据
    title: String,//可选标题
    image: String//背景图片
    //样式
    styleBox: Object,//定义操作相应区域样式(大小)的接口
    styleClick: Object,
    styleHover: Object,
    stylePress: Object,
    styleDefault: Object,


}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        this.cbfHover = this.cbfHover.bind(this);
        this.cbfHoverOut = this.cbfHoverOut.bind(this);
        this.addStyleByStatus = this.addStyleByStatus.bind(this);
        // this.cbfPress = this.cbfPress.bind(this);
        this.state = {
            status: 'default',
            ifPress: false,
            ifCover: false,
        };
    }

    //className = {(className as any).container}

    render (){

        return(<div style={this.addStyleByStatus()}>
            <div style = {this.props.styleBox}
                 onClick={this.cbfClick}
                onMouseOver={this.cbfHover}
                onMouseOut = {this.cbfHoverOut}>
                {this.props.title}
                {this.props.children}

            </div>
        </div>)

    },

    //这部分考虑到复用,就放在底层来写
    addStyleByStatus() {
        let originStyle = this.props.styleDefault;
        let addStyle = {}
        console.log('!!!!!!!')
        if(this.props.status === 'click') {
            addStyle = this.props.styleClick;
        } else {
            //自身判断
            if(this.state.status === 'hover') {
                addStyle = this.props.styleHover;
            }
        }
            // switch(this.props.status){
            //     case 'click':
            //         addStyle = this.props.styleClick;
            //         break;
            //     case 'hover':
            //         addStyle = this.props.styleHover;
            //         break;
            //     default:
            //         break;
            // }
        return this.addStyle(originStyle, addStyle);
    }

    addStyle(originStyle, addStyle) {
        let copy1 = JSON.parse(JSON.stringify(originStyle));
        for (let style in addStyle) {
            copy1[style] = addStyle[style];
        }
        return copy1;
    }

    cbfHover() {
        let index = this.props.index;
        if(this.state.status==='click'){
            return
        }
        this.setState({status: 'hover'});
        // this.props.cbfHover(index)
    }

    cbfHoverOut(index) {
        let index = this.props.index;
        if(this.state.status==='click'){
            return
        }
        this.setState({status: 'default'});
        // this.props.cbfHoverOut(index)
    }

    cbfClick(index) {
        let index = this.props.index;
        // this.setState({
        //     currentSelect: index,
        //     status: 'click'});
        this.props.cbfClick(index);
    },

    cbfPress(index) {
        // this.setState({status: 'press'});
    },

}





