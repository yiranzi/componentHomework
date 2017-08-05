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
            color: 'white',
        }
        let styleHover = {
            color: 'white',
        }
        let styleDefault = {
            width: '100%',
            height: '42px',
            // backgroundColor: 'blue',
            borderBottom: '1px solid black',
            color: '#6F7D9F',
        };
        let styleBox = {
            width: '100%',
            height: '100%',
        }
            return(        <AbstractBox styleBox = {styleBox}
                                        styleClick = {styleClick}
                                        styleDefault = {styleDefault}
                                        styleHover = {styleHover}

                                        status = {this.props.status}
                                        cbfClick = {this.props.cbfClick}
                                        cbfHover = {this.props.cbfHover}
                                        index = {this.props.index}
                                        arrayIndex = {this.props.arrayIndex}
            >
                {this.props.title}
            </AbstractBox>)
    }

    cbfClick() {
        console.log(arguments)
        let type = 'awake';
        this.props.cbfClibk(arguments,type)
    }
}





