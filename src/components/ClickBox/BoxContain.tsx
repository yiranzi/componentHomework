/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";
import BoxTitle from "@/components/ClickBox/BoxTitle";
import TabBarInner from "@/components/Tabbar/TabBarInner";

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
        this.cbfTitleTabClick = this.cbfTitleTabClick.bind(this);
        this.cbfInnerBarClick = this.cbfInnerBarClick.bind(this);
        this.state = {
            currentIndex: 0,
            isSubShow: false,
            foldHeight: 0,
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
        let styleBox = {
            width: '100%',
            height: '100%',
        }
        let userStyle = {
            width: '100px',
            height: '100px',
        }

        return(<div>
            {this.renderUpStreamBox()}
            {this.renderTabBarInner()}
        </div>)

        // let index = this.props.index;
        // return(<div className = {(className as any).container} style={this.props.boxStyle}>
        //     <div className = {(className as any).boxCollider}
        //          onClick={this.cbfClick.bind(this,index)}
        //         onMouseOver={this.cbfHover.bind(this,index)}>
        //         {this.props.children}
        //     </div>
        // </div>)

    }

    renderUpStreamBox() {
        return(        <BoxTitle
            sub = {this.props.sub}
            title = {this.props.title}
            index = {this.props.index}
            status = {this.props.status}
            cbfHover={this.props.cbfHover}

            cbfClick={this.cbfTitleTabClick}/>)

    }

    calcFoldHeight() {
        if( this.state.isSubShow) {
            return
        } else {
            return 0
        }
    }


    renderTabBarInner() {


        // if(!this.state.isSubShow) {
        //     return
        // }
        console.log('show');
        let count = this.props.sub[this.props.index].count;
        let renderCount = this.state.isSubShow ? count : 0;
        let dataTitle = this.props.sub[this.props.index].dataTitle;
        console.log(dataTitle)
        let perBarHeight = 100;
        let styleDefault = {
            width: '100px',
            height: `${renderCount*perBarHeight}px`,
            backgroundColor: 'gray',
            border: '1px solid green',
            overflow: 'hidden',
            transition: 'height 0.4s'
        };
        return(
            <TabBarInner
                styleDefault = {styleDefault}
                currentIndex = {this.state.currentIndex}
                count={count}
                dataTitle = {dataTitle}
                cbfClick = {this.cbfInnerBarClick}></TabBarInner>
        )
    }

    //接收到点击
    cbfTitleTabClick(index) {
        console.log('title ' + this.props.index);
        this.props.cbfClick(this.props.index);
        this.state.isSubShow = !this.state.isSubShow
        this.setState({isSubShow: this.state.isSubShow})
    }



    cbfInnerBarClick(index) {
        console.log('sub ' + this.props.index + ' get' + index);
        // this.props.cbfSubTabClick(10 * this.props.index + index);
    }

}





