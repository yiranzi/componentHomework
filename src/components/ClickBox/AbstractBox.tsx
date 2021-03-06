/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";


interface StateTypes {
    index: number,//设置index的接口
    status: String,//表示按钮的状态.
    cbfClick: Function,//点击事件回调接口
    cbfHover: Function,//覆盖事件上报
    cbfPress: Function,//按下事件上报
    styleBox: Object,//定义操作相应区域样式(大小)的接口
    styleClick: Object,//传入点击后的样式
    styleHover: Object,
    stylePress: Object,
    styleDefault: Object,//传入默认状态样式


}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        this.cbfHover = this.cbfHover.bind(this);
        this.cbfHoverOut = this.cbfHoverOut.bind(this);
        this.addStyleByStatus = this.addStyleByStatus.bind(this);
        this.state = {
            status: 'default',
        };
    }

    //className = {(className as any).container}

    render (){

        return(<div style={this.addStyleByStatus()}
                 onClick={this.cbfClick}
                onMouseOver={this.cbfHover}
                onMouseOut = {this.cbfHoverOut}>
                {this.props.children}
        </div>)

    }

    //默认或者直接使用上层的内容.


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

    //添加额外样式
    addStyle(originStyle, addStyle) {
        let copy1 = JSON.parse(JSON.stringify(originStyle));
        for (let style in addStyle) {
            copy1[style] = addStyle[style];
        }
        return copy1;
    }

    cbfHover() {
        //开发事件相应.
        let index = this.props.index;
        if(this.state.status==='click'){
            return
        }
        this.setState({status: 'hover'});
        // this.props.cbfHover(index)
    }

    cbfHoverOut() {
        if(this.state.status==='click'){
            return
        }
        this.setState({status: 'default'});
        // this.props.cbfHoverOut(index)
    }

    cbfClick() {
        let index = this.props.index;
        let arrayIndex = this.props.arrayIndex;
        // this.setState({
        //     currentSelect: index,
        //     status: 'click'});
        this.props.cbfClick(index,arrayIndex);
    },

    // cbfPress(index) {
    //     // this.setState({status: 'press'});
    // },

}





