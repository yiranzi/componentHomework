/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";

interface StateTypes {
    boxStyle: {},//外部样式
    indx: number,
    cbfClick: function,
    cbfCover: function,
    cbfPress: function,
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
        return(<div classname = {(className as any).container} style={this.props.boxStyle}>
            <div onClick={this.cbfClick.bind(this,index)}></div>
        </div>)

    },

    cbfClick(index) {
        console.log(index);
        this.props.cbfTabClick(index);
    },

}





