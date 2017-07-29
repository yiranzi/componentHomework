/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbsTabBar.less";
import AbstractBox from "@/components/ClickBox/AbstractBox";

interface StateTypes {
    count: number,//外部样式
    defaultStyle: object,
    clickStyle: Object,
    releaseStyle: Object,
    coverStyle: Object,
    currentSelect: number,
    cbfClick: Function,
    cbfCover: Function,
    //你还需要传入一个children
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        this.addStyleByStatus = this.addStyleByStatus.bind(this);
        // this.cbfPress = this.cbfPress.bind(this);
        this.state = {
            ifPress: false,
            ifClick: false,
            ifCover: false,
            currentSelect: -1,
            status: 'default',
        };
    }

    render (){
        let index = this.props.index;
        return(<div>
            {this.renderList()}
        </div>)

    },

    renderList() {
        let arr = [];
        let node = this.props.children;
        // arr.push(<AbstractBox key={1} index = {1} boxStyle={boxStyle} >123</AbstractBox>)
        for (let i = 0 ; i < this.props.count; i++) {
            arr.push(<AbstractBox key={i} index = {i} boxStyle={this.addStyleByStatus(i)} cbfClick={this.cbfClick} cbfCover={this.cbfCover}>
                    {node}
            </AbstractBox>);
        }
        return arr;
    }

    cbfClick(index) {
        this.props.cbfClick(index);
    }

    addStyleByStatus(index) {
        console.log(this.props.defaultStyle);
        let originStyle = this.props.defaultStyle;
        let addStyle = {}
        if(index === this.state.currentSelect) {
            console.log(index)
            switch(this.state.status){
                case 'click':
                    addStyle = this.props.clickStyle;
                    break;
                case 'cover':
                    addStyle = this.props.coverStyle;
                    break;
            }
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

    cbfClick(index) {
        this.setState({
            status: 'click',
            currentSelect: index,
        });
        this.props.cbfClick(index);
    }

    cbfPress(index) {

    }

    cbfCover(index) {
        this.setState({
            status: 'cover',
            currentSelect: index,
        });
    }

}





