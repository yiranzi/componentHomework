/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";
import * as className from "./style/AbstractBox.less";
import ProcessBarOut from "@/components/MyProcessBar/ProcessBarOut";
import ProcessBarInner from "@/components/MyProcessBar/ProcessBarInner";


import TabBarTop from "@/components/MyProcessBar/TabBarTop";

//设置currentIndex(bar点击)
//处理拉伸表色(title点击)

interface StateTypes {
    //tabbar
    content: Object,//内容
    status: String,//tabbar状态(用于确认tabbar是否为当前选中的分支.只有tabbar为click 才能有效)
    currentIndex: number,//当前选中的按钮
    cbfClick: Function,//按钮栏中的按钮被选中的回调
    styleDefault: Object,//设置容器必要样式.
}


// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    constructor() {
        super();
        // this.cbfTitleTabClick = this.cbfTitleTabClick.bind(this);
        // this.cbfInnerBarClick = this.cbfInnerBarClick.bind(this);
        // this.state = {
        //     currentIndex: -1,
        //     isSubShow: false,
        //     foldHeight: 0,
        // };
    }

    render (){
        return(<div style= {this.props.styleDefault}>
            {/*{this.renderUpStreamBox()}*/}
            {this.renderTabBarTop()}
            {this.renderProcessBarOut()}
        </div>)

    }

    //渲染上面的tabbar
    renderTabBarTop() {
        let fatherContent = this.props.content;
        let defaultStyle2 = {
            backgroundColor: `${fatherContent[this.props.currentIndex].content.color}`,
            display: 'flex',
            flexWrap: 'no-wrap',
            alignItems: 'flex-end',
        };
        return(
            <TabBarTop
                content = {fatherContent}
                status= {'click'}
                styleDefault = {defaultStyle2}
                currentIndex = {this.props.currentIndex}
                cbfClick = {this.props.cbfClick}>
            </TabBarTop>
        )
    }

    //渲染下面的processbar
    renderProcessBarOut() {
        //processOut的样式
        let styleDefault = {
            height: '5px',
            backgroundColor: 'red',
            display: 'flex',
            flexWrap: 'no-wrap',
            alignItems: 'center',
        }
        let arr = [];
        arr.push(<ProcessBarOut styleDefault = {styleDefault}>
            {/*渲染process内部的bar*/}
            {this.renderBoxInner()}
        </ProcessBarOut>);
        return( arr)
    }

    renderBoxInner() {
        let arr = [];
        arr.push(<ProcessBarInner
            myWidth = {102}
            startIndex = {this.props.currentIndex}
        />)
        return arr
    }




    //接收到点击
    // cbfTitleTabClick(index,arrayIndex) {
    //     // this.props.cbfClick(this.props.index,arrayIndex);
    //     this.state.isSubShow = !this.state.isSubShow
    //     this.setState({isSubShow: this.state.isSubShow})
    // }


    //接收到子组件点击
    // cbfInnerBarClick(subIndex,arrayIndex) {
    //     let index = this.props.index;
    //     //默认上报.
    //     this.setState({currentIndex: subIndex})
    //     this.props.cbfClick(index,arrayIndex);
    // }

}





