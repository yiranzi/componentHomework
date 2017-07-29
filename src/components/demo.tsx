/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */
//1
import * as React from "react";
import * as className from "./style/demo.less";

import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Spinner from "@/components/Spinner/Spinner";
import StepProgressBar from "@/components/StepProgressBar/StepProgressBar";
import SnackBar from "@/components/SnackBar/SnackBar";
import Carousel from "@/components/Carousel/Carousel";
import MyTabBar from "@/components/Tabbar/MyTabBar";
import MyFollowBar from "@/components/Tabbar/MyFollowBar";
import AbstractBox from "@/components/ClickBox/AbstractBox";
import AbsTabBar from "@/components/Tabbar/AbsTabBar";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";
import Loading from "@/components/Loading/Loading";
import SwipeView from "@/components/SwipeView/SwipeView";
interface StateTypes {
    index: number;
    Carouselindex: number;
    onplay: boolean;
}
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
export class Greeting extends React.Component<{ name: String }, StateTypes> {
    constructor() {
        super();
        this.clickhandle = this.clickhandle.bind(this);
        this.SnackBarClick = this.SnackBarClick.bind(this);
        this.handleIndexChangeCallback = this.handleIndexChangeCallback.bind(this);
        this.cbfBarClick = this.cbfBarClick.bind(this);
        this.state = {
            index: 1,
            Carouselindex: 0,
            onplay: true,
            setIndex: 0,
        };
    }
    clickhandle() {
        this.setState({
            index: 2
        });
    }
    SnackBarClick() {

    }
    handleIndexChangeCallback(index: number) {
        if (this.state.Carouselindex + index > -1 && this.state.Carouselindex + index < 5) {
            this.setState((prevState, props) => ({
                Carouselindex: prevState.Carouselindex + index
            }));
        }
    }
    handleTap() {
        this.setState((prevState, props) => ({
           onPlay: prevState.onplay
        }));
    }

    cbfBarClick(index) {
        console.log('顶点得道点击' +index);
        this.setState({
            setIndex: index,
        });
    }


    render() {
        // let boxStyle = {
        //     width: '100px',
        //     height: '100px',
        //     backgroundColor: 'red',
        //     border: '1px solid black',
        // }
        let clickStyle = {
            backgroundColor: 'green',
        }
        let defaultStyle = {
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            border: '1px solid black',
        };
        let userStyle = {
                width: '100px',
                height: '100px',
        }
        // let tabs = [
        //     ['./assetsPlus/image/home/tabbar0_0.png','./assetsPlus/image/home/tabbar0_1.png'],
        //     ['./assetsPlus/image/home/tabbar1_0.png','./assetsPlus/image/home/tabbar1_1.png'],
        //     ['./assetsPlus/image/home/tabbar1_0.png','./assetsPlus/image/home/tabbar1_1.png'],
        // ];
        return (<div>
                <AbsTabBar count={3} cbfClick = {this.cbfBarClick} defaultStyle = {defaultStyle} clickStyle = {clickStyle}>
                    <div style={userStyle}>123</div>
                </AbsTabBar>
                {/*<AbstractBox index = {1} boxStyle={boxStyle} cbfClick={this.cbfTabClick}/>*/}
                {/*<MyTabBar currentIndex = {this.state.setIndex} tabs = {tabs} cbfTabClick = {this.cbfTabClick}/>*/}
                {/*<MyFollowBar currentIndex = {this.state.setIndex}/>*/}
            </div>

            // <div style={{ height: "100%" }}>
            //     <Carousel
            //         index={this.state.Carouselindex}
            //         contentPaddingTop={"20%"}
            //         handleIndexChangeCallback={this.handleIndexChangeCallback} direction={"vertical"}
            //         bottomNode={<StepProgressBar steps={steps} index={this.state.Carouselindex} width={250} />}>
            //         <div data-index="11" style={{ height: "100%" }}>
            //             <Avatar shape={"square"}>ZT</Avatar>
            //         </div>
            //         <div data-index="12" style={{ height: "100%" }}>
            //             <Loading />
            //         </div>
            //         <div data-index="6" style={{ height: "100%" }}>
            //             <Button />
            //         </div>
            //         <div data-index="5" style={{ height: "100%" }}>
            //             <h1>ProgressBar</h1>
            //             <div style={{width: "100%"}}><ProgressBar progress={40} buffer={20} isLoading={false} /></div>
            //         </div>
            //         <div data-index="2" style={{ height: "100%" }}>
            //             <h1>Spinner</h1>
            //             <Spinner size={1} />
            //         </div>
            //         <div data-index="3" style={{ height: "100%" }}>
            //             <h1 onClick={this.clickhandle}>StepProgressBar</h1>
            //             <StepProgressBar steps={steps} index={this.state.index} width={250} />
            //         </div>
            //         <div data-index="4" style={{ height: "100%" }}>
            //             <h1>SnackBar</h1>
            //             <button onClick={this.SnackBarClick}></button>
            //             <SnackBar active={true}></SnackBar>
            //         </div>
            //     </Carousel>
            // </div>
        );
    }
}
//
// let steps = [{
//     index: '1',
//     //title: 'step 1'
// }, {
//     index: '2',
//     //title: 'step 2'
// }, {
//     index: '3',
//     //title: 'step 3'
// }, {
//     index: '4',
//     //title: 'step 4'
// }, {
//     index: '5',
//     //title: 'step 4'
// }];