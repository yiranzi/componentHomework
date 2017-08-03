/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";
import BoxTitle from "@/components/ClickBox/BoxTitle";
import TabBarInner from "@/components/Tabbar/TabBarInner";

//设置currentIndex(bar点击)
//处理拉伸表色(title点击)

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
            currentIndex: -1,
            isSubShow: false,
            foldHeight: 0,
        };
    }

    render (){
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

            cbfClick={this.cbfTitleTabClick}
            arrayIndex = {this.props.arrayIndex}/>)

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
        let perBarHeight = 42;
        let styleDefault = {
            // width: '100px',
            height: `${renderCount*perBarHeight}px`,
            // backgroundColor: 'gray',
            // border: '1px solid green',
            // height: 'auto',
            overflow: 'hidden',
            transition: 'height 0.4s'
        };
        // if(!this.state.isSubShow) {
        //     styleDefault['height'] = 0;
        // }
        return(
            <TabBarInner
                status = {this.props.status}

                arrayIndex = {this.props.arrayIndex}
                styleDefault = {styleDefault}
                currentIndex = {this.state.currentIndex}
                count={count}
                dataTitle = {dataTitle}
                cbfClick = {this.cbfInnerBarClick}></TabBarInner>
        )
    }

    //接收到点击
    cbfTitleTabClick(index,arrayIndex) {
        // this.props.cbfClick(this.props.index,arrayIndex);
        this.state.isSubShow = !this.state.isSubShow
        this.setState({isSubShow: this.state.isSubShow})
    }


    //接收到子组件点击
    cbfInnerBarClick(subIndex,arrayIndex) {
        let index = this.props.index;
        //默认上报.
        this.setState({currentIndex: subIndex})
        this.props.cbfClick(index,arrayIndex);
    }

}





