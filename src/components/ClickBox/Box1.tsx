/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";
import AbstractBox from "./AbstractBox";


interface StateTypes {
    index: number,
    cbfClick: Function,//点击事件回调接口
    cbfHover: Function,
    cbfPress: Function,
    title: String,
    image: String,
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
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
        let styleBox = {
            width: '100%',
            height: '100%',
        }
        let userStyle = {
                width: '100px',
                height: '100px',
            }
            return(        <AbstractBox styleBox = {styleBox}
                                        styleClick = {styleClick}
                                        styleDefault = {styleDefault}
                                        styleHover = {styleHover}

                                        status = {this.props.status}
                                        cbfClick = {this.props.cbfClick}
                                        cbfHover = {this.props.cbfHover}
                                        index = {this.props.index}
                                        title = {this.props.title}>
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


}





