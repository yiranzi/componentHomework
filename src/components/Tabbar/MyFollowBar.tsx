/**
 * Created by wuchuck on 7/26/17.
 */

import * as React from "react";

interface StateTypes {
    // tabs: [];
    // height: number;
    currentIndex: number;
    // cbfTabClick: boolean;
}

// export default class Tabbar extends React.PureComponent<StateTypes> {
export default class Tabbar extends React.Component<StateTypes> {
    height = 100;
    render (){
        return(<div className="MyFollowBar">
            {this.renderFlowingBar()}
        </div>)

    },

    setMoveStyle() {
        let currentIndex = this.props.currentIndex;
      return{
          transform: `translateY(${this.height * currentIndex}px)`
          transition: 'transform 2s'
      }


    },

    renderFlowingBar() {
      return(<div className="bar" style = {this.setMoveStyle()}>o</div>)
    },

    tabClick(index) {
        console.log('staet render icons');
        this.props.cbfTabClick(index);
    },

    renderIcons() {
        console.log(this.props.tabs);
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





