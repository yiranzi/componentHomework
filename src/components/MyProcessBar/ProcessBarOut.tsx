/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
//processbar out

interface StateTypes {
    index: number,//设置index的接口.(设置了就不会改变的,不应该放在state中)
    status: String,//表示按钮的状态.
    styleDefault: Object,
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
    }

    //className = {(className as any).container}

    render (){
        return(<div style={this.props.styleDefault}>
            {this.props.children}
        </div>)

    }
}





