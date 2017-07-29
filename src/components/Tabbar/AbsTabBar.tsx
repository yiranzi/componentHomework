/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbsTabBar.less";
import AbstractBox from "@/components/ClickBox/AbstractBox";
import Box1 from "@/components/ClickBox/Box1";

interface StateTypes {
    count: number,//外部样式
    defaultStyle: object,
    clickStyle: Object,
    releaseStyle: Object,
    coverStyle: Object,
    currentIndex: number,
    cbfClick: Function,
    cbfCover: Function,
    //你还需要传入一个children
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        this.cbfHover = this.cbfHover.bind(this);
        this.cbfHoverOut = this.cbfHoverOut.bind(this);
        this.calcStatus = this.calcStatus.bind(this);
        // this.cbfPress = this.cbfPress.bind(this);
        this.state = {
            ifPress: false,
            ifClick: false,
            ifCover: false,
            currentIndex: -1,
            currentFire: -1,
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
        // arr.push(<AbstractBox key={1} index = {1} boxStyle={boxStyle} >123</AbstractBox>)
        for (let i = 0 ; i < this.props.count; i++) {
            arr.push(<Box1 key={i} index = {i} status = {this.calcStatus(i)}
                                  cbfClick={this.cbfClick}
                                  cbfHover={this.cbfHover}
                           cbfHoverOut = {this.cbfHoverOut}>
                    {this.props.children}
            </Box1>);
        }
        return arr;
    }

    calcStatus(index) {
        console.log("!!!!!!!!!!!!!111111")
        if(this.state.currentIndex === index) {
            return 'click';
        }
        console.log("!!!!!!!!!!!!!")
        console.log(index);
        if(this.state.currentFire === index) {
            return 'hover';
        }
        return 'default'
    }

    cbfClick(index) {
        this.setState({
            status: 'click',
            currentIndex: index,
            currentFire: index,
        });
        this.props.cbfClick(index);
    }

    cbfHover(index) {
        console.log('!!!!!!');
        this.setState({
            status: 'hover',
            currentFire: index,
        })
    }
    cbfHoverOut(index) {
        console.log('cbfHoverOut');
    }

    cbfPress(index) {

    }

}





