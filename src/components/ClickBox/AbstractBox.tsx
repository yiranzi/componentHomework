/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";


interface StateTypes {
    boxStyle: Object,//外部样式
    indx: number,
    cbfClick: Function,
    cbfCover: Function,
    cbfPress: Function,
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
        return(<div className = {(className as any).container} style={this.props.boxStyle}>
            <div className = {(className as any).boxCollider} onClick={this.cbfClick.bind(this,index)}></div>
        </div>)

    },

    cbfClick(index) {
        console.log('ab box click');
        console.log(index);
        this.props.cbfClick(index);
    },

    cbfPress(index) {

    },

}





