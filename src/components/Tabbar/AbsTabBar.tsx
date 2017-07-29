/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbsTabBar.less";
import * as AbstractBox from "@/components/ClickBox/AbstractBox";

interface StateTypes {
    count: number,//外部样式
    pressAddStyle: Object,
    releaseAddStyle: Object,
    coverAddStyle: Object,
    currentSelect: number,
    cbfClick: Function,
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        // this.cbfCover = this.cbfCover.bind(this);
        // this.cbfPress = this.cbfPress.bind(this);
        this.state = {
            ifPress: false,
            ifClick: false,
            ifCover: false,
        };
    }

    render (){
        let index = this.props.index;
        return(<div>
            <div>123</div>
            {/*<AbstractBox key={1} index = {1}>123</AbstractBox>*/}
            {/*{this.renderList()}*/}
        </div>)

    },

    renderList() {
        let boxStyle = {
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
        };
        let arr = [];
        let node = this.props.children;
        console.log(arr);
        // arr.push(<AbstractBox key={1} index = {1} boxStyle={boxStyle} >123</AbstractBox>)
        for (let i = 0 ; i < this.props.count; i++) {

            // arr.push(<div key={i} style={this.addStyleByStatus()}>{node}</div>);
            //这部分用凹槽暴露给外面
            // arr.push(node);

            // arr.push(<AbstractBox key={i} index = {i} boxStyle={boxStyle} cbfClick={this.cbfClick}>123</AbstractBox>);
            // arr.push(<div>i</div>)
        }
        console.log(arr);
        return arr;
    }

    cbfClick(index) {
        console.log('bar' + index);
        this.props.cbfClick(index);
    }

    addStyleByStatus() {
        return {
            color: 'red'
        }
        // switch()
    },

    cbfClick(index) {
        console.log(index);
        this.props.cbfClick(index);
    },

    cbfPress(index) {

    },

}





