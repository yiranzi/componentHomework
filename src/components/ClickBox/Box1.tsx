/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";
import AbstractBox from "./AbstractBox";


interface StateTypes {
    indx: number,//设置index的接口
    cbfClick: Function,//点击事件回调接口
    cbfHover: Function,
    cbfPress: Function,
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        this.cbfClick = this.cbfClick.bind(this);
        this.cbfHover = this.cbfHover.bind(this);
        this.cbfHoverOut = this.cbfHoverOut.bind(this);
        this.cbfPress = this.cbfPress.bind(this);
        this.state = {
            status: 'default',
            ifPress: false,
            ifClick: false,
            ifCover: false,
        };
    }

    render (){
        let styleClick = {
            backgroundColor: 'green',
        }
        let styleHover = {
            backgroundColor: 'blue',
        }
        let styleDefault = {
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            border: '1px solid black',
        };
        let userStyle = {
                width: '100px',
                height: '100px',
            }
            return(        <AbstractBox status = {this.props.status} cbfClick = {this.cbfClick} cbfHover = {this.cbfHover} cbfHoverOut = {this.cbfHoverOut} index = {this.props.index} styleClick = {styleClick} styleDefault = {styleDefault} styleHover = {styleHover}>
                {this.props.children}
            </AbstractBox>)

        // let index = this.props.index;
        // return(<div className = {(className as any).container} style={this.props.boxStyle}>
        //     <div className = {(className as any).boxCollider}
        //          onClick={this.cbfClick.bind(this,index)}
        //         onMouseOver={this.cbfHover.bind(this,index)}>
        //         {this.props.children}
        //     </div>
        // </div>)

    },

    cbfHover(index) {
        // this.setState({status: 'hover'});
        this.props.cbfHover(index)
    }

    cbfClick(index) {
        // this.setState({status: 'click'});
        this.props.cbfClick(index);
    },

    cbfHoverOut(index) {
        // this.setState({status: 'click'});
        this.props.cbfHoverOut(index);
    },



    cbfPress(index) {
        // this.setState({status: 'press'});
    },

}





