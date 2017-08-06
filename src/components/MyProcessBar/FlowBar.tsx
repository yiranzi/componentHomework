/**
 * Created by wuchuck on 7/26/17.
 */

//原来想修改的abs

import * as React from "react";


interface StateTypes {
    //问题
    //需要一个变量,来控制它需要的事件相应
    //结论 单一状体. 所有子组件的改变理论上可以通过父组件统一进行处理.
    //类似于 覆盖之类的事件
    //事件的上报 和 样式的改变 也许可以分离开

    index: number,//设置index的接口.(设置了就不会改变的,不应该放在state中)
    status: String,//表示按钮的状态.
    cbfClick: Function,//点击事件回调接口
    // cbfHover: Function,
    // cbfPress: Function,
    //数据
    content: Object,//暂时保存有对于事件冒泡的处理方式.
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

    addStyle(originStyle, addStyle) {
        let copy1 = JSON.parse(JSON.stringify(originStyle));
        for (let style in addStyle) {
            copy1[style] = addStyle[style];
        }
        return copy1;
    }
}





