/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";


interface StateTypes {
    boxStyle: Object,//定义样式的接口
    indx: number,//设置index的接口
    ifClick: Boolean
    cbfClick: Function,//点击事件回调接口
    cbfHover: Function,
    cbfPress: Function,
    styleClick: Object,
    styleHover: Object,
    stylePress: Object,
    styleDefault: Object,
    status: String,
    title: String,//可选标题
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
            ifClick: false,
            ifCover: false,
        };
    }

    render (){
        if(this.props.ifClick === false) {

        }
        let index = this.props.index;
        return(<div className = {(className as any).container} style={this.addStyleByStatus()}>
            <div className = {(className as any).boxCollider}
                 onClick={this.cbfClick.bind(this,index)}
                onMouseOver={this.cbfHover.bind(this,index)}
                onMouseOut = {this.cbfHoverOut.bind(this,index)}>
                {this.props.children}
            </div>
        </div>)

    },


    addStyleByStatus(index) {
        console.log('111111')
        let originStyle = this.props.styleDefault;
        let addStyle = {}
            switch(this.props.status){
                case 'click':
                    addStyle = this.props.styleClick;
                    break;
                case 'hover':
                    addStyle = this.props.styleHover;
                    break;
                default:
                    break;
            }
        return this.addStyle(originStyle, addStyle);
    }

    addStyle(originStyle, addStyle) {
        let copy1 = JSON.parse(JSON.stringify(originStyle));
        for (let style in addStyle) {
            copy1[style] = addStyle[style];
        }
        return copy1;
    }

    cbfHover(index) {
        // if(this.state.status==='click'){
        //     return
        // }
        // this.setState({status: 'hover'});
        this.props.cbfHover(index)
        console.log(index)
    }

    cbfHoverOut(index) {
        // if(this.state.status==='click'){
        //     return
        // }
        // this.setState({status: 'default'});
        this.props.cbfHoverOut(index)
    }

    cbfClick(index) {
        // this.setState({
        //     currentSelect: index,
        //     status: 'click'});
        this.props.cbfClick(index);
    },

    cbfPress(index) {
        // this.setState({status: 'press'});
    },

}





