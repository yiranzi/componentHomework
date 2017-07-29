/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";

interface StateTypes {
    tabs: [];
    barCount: number;//数量
    currentIndex: number;//当前选中
    cbfTabClick: boolean;//点击后的回调
    styleOff: object;//离开
    stlyeOn: object;//选中
}

// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    render (){
        return(<div className="tabbar" style={this.props.}>
            {this.renderSubBar()}
            {this.renderIcons()}
        </div>)

    },

    tabClick(index) {
        console.log('staet render icons');
        console.log(index);
        this.props.cbfTabClick(index);
    },

    renderIcons() {
        let arr =[];
        let tabs = this.props.tabs;
        for (let i = 0; i < tabs.length; i++) {
            let result = 0;
            if(this.props.currentIndex === i){
                result = 1;
            } else {
                result = 0;
            }
            arr.push(<div key={i} onClick={this.tabClick.bind(this,i)} className="tabbar-icon">
                <img className="icon" src={tabs[i][result]}/>
            </div>)
        }
        return arr;
    },

}





