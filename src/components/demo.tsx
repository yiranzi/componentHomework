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

import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";
import Loading from "@/components/Loading/Loading";
import SwipeView from "@/components/SwipeView/SwipeView";

import AbstractBox from "@/components/ClickBox/AbstractBox";
import Box1 from "@/ClickBox/BoxInner";
import AbsTabBar from "@/components/Tabbar/AbsTabBar";
import TabBar1 from "@/components/Tabbar/TabBar1";
import TabBarMaxOut from "@/components/Tabbar/TabBarMaxOut";
import TabBarTop from "@/components/Tabbar/TabBarTop";
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
        this.cbfBarClick = this.cbfBarClick.bind(this);
        this.state = {
            index: 1,
            currentIndex: 0,
            arrayIndex: 0,
        };
    }

    cbfBarClick(index,arrayIndex) {
        console.log('顶点得道点击' +index+arrayIndex);
        this.setState({
            currentIndex: index,
            arrayIndex: arrayIndex,
        });
    }


    render() {
        let count = 4;
        //定义tabbar样式
        let perBarHeight = 42;
        let defaultStyle = {
            width: '300px',
            // height: `${count*perBarHeight}px`,
            backgroundColor: '#333C60',
            // border: '1px solid green',
        };
        let content = [
            {
                content: {
                    title: '1',
                    //bg:
                    color: 'red'
                },
                eventType: {
                    click: true,
                    hover: true,
                }
            },
            {
                content: {
                    title: '2',
                    //bg:
                    color: 'green'
                },
                eventType: {
                    click: true,
                    hover: true,
                }
            },
            {
                content: {
                    title: '3',
                    //bg:
                    color: 'blue'
                },
                eventType: {
                    click: true,
                    hover: true,
                }
            },
        ]

        //定义整个数据
        let dataTitle = ['语文','数学','英语','编程'];
        let sub = [
            {
                count: 3,
                dataTitle: ['小学语文','中学语文','大学语文']
            },
            {
                count: 4,
                dataTitle: ['学前班数学','小学数学','中学数学','大学数学']
            },
            {
                count: 5,
                dataTitle: ['学前班英语','小学英语','中学英语','大学英语','研究生英语']
            },
            {
                count: 4,
                dataTitle: ['学前班编程','小学编程','中学编程','大学编程']
            }
        ];
        let sub2 = ['a','b','c','d'];
        return (<div>
                {/*<Box1 index = {0} cbfClick = {this.cbfClick}>123</Box1>*/}
                {/*<TabBar1 currentIndex = {this.state.currentIndex} count={4} dataTitle = {dataTitle} cbfClick = {this.cbfBarClick}></TabBar1>*/}
                <div>你当前选择的是{this.getValue()}</div>
                {/*<TabBarTop*/}
                    {/*content = {content}*/}
                    {/*status= {'click'}*/}
                    {/*styleDefault = {defaultStyle}*/}
                    {/*currentIndex = {this.state.currentIndex}*/}
                    {/*cbfClick = {this.cbfBarClick}>*/}
                {/*</TabBarTop>*/}

                <TabBarMaxOut
                    status= {'click'}
                    sub = {sub}
                    styleDefault = {defaultStyle}
                    currentIndex = {this.state.currentIndex}
                    count={4}
                    dataTitle = {dataTitle}
                    cbfClick = {this.cbfBarClick}>
                </TabBarMaxOut>
                {/*<TabBarMaxOut*/}
                    {/*status= {'click'}*/}
                    {/*sub = {sub2}*/}
                    {/*styleDefault = {defaultStyle}*/}
                    {/*currentIndex = {this.state.currentIndex}*/}
                    {/*count={4}*/}
                    {/*dataTitle = {dataTitle}*/}
                    {/*cbfClick = {this.cbfBarClick}>*/}
                {/*</TabBarMaxOut>*/}

                {/*<AbsTabBar count={3} cbfClick = {this.cbfBarClick} defaultStyle = {defaultStyle} clickStyle = {clickStyle}>*/}
                    {/*<div style={userStyle}>123</div>*/}
                {/*// </AbsTabBar>*/}


                {/*<AbstractBox index = {1} boxStyle={boxStyle} cbfClick={this.cbfTabClick}/>*/}
                {/*<MyTabBar currentIndex = {this.state.setIndex} tabs = {tabs} cbfTabClick = {this.cbfTabClick}/>*/}
                {/*<MyFollowBar currentIndex = {this.state.setIndex}/>*/}
            </div>

        );

    }

    getRouter() {

        let resultRouter = {
            '0':{
                name: '报告中心',
                type: 'tab-no',
                color: 'red',
                sub: {
                    '0': {
                        name: '预制报告',
                        type: 'tab-icon',
                        sub: {
                            '0': {
                                name: '浏览报告',
                                type: 'bar-small',
                            },
                            '1': {
                                name: '流量报告',
                                type: 'bar-small',
                            },
                            '2': {
                                name: '访客数据',
                                type: 'bar-small',
                            },
                        }
                    },
                    '1': {
                        name: '单一报告',
                        type: 'bar-icon',
                        sub: {
                            '0': {
                                name: '浏览报告'
                            },
                            '1': {
                                name: '流量报告'
                            },
                            '2': {
                                name: '访客数据'
                            },
                        }
                    },
                    '2': {
                        name: '自定义报告组',
                        type: 'tab-icon',
                        sub: {
                            '0': {
                                name: '报告1'
                            },
                            '1': {
                                name: '报告2'
                            },
                            '2': {
                                name: '报告3'
                            },
                        }
                    }

                }
            },
            '1':{
                name: '细分工具',
                type: 'tab',
                color: 'blue',
                sub: {
                    '0': {
                        name: '事件细分1'
                    },
                    '1': {
                        name: '事件细分2'
                    },
                    '2': {
                        name: '事件细分3'
                    },

                }
            },
            '2':{
                name: '运营工具',
                color: 'green',
                sub: {
                    '0': {
                        name: '运营工具1'
                    },
                    '1': {
                        name: '运营工具2'
                    },
                    '2': {
                        name: '运营工具3'
                    },
                }
            },
            '3':{
                name: '报告工具',
                color: 'purple',
                sub: {
                    '0': {
                        name: '运营工具1'
                    },
                    '1': {
                        name: '运营工具2'
                    },
                    '2': {
                        name: '运营工具3'
                    },
                }
            },

        }
        return resultRouter;
    }

    getValue() {
        return
        //1依次取出值
        //2根据值依次往里面遍历
        console.log('QQQQ!!!');
        let result = this.state.arrayIndex;
        let now = this.getRouter();
        for (let i = 0; i < this.state.arrayIndex.length; i++) {
            let index = result[i];
            now = now[index];
            if(now.sub) {
                now = now.sub;
            }
        }
        return 1;
    }


    //根据选中跳转路由
    getRouteResult() {
        let result1 = '';
        let result2 = ''
        switch(i) {
            case 0:
                result1 = '/报告中心';
                switch (j){
                    case 0:
                        result1 = '/报告1';
                        break;
                    default:
                }
                break;
            case 1:
                result1 = '/细分工具';
                switch (j){
                    case 0:
                        result1 = '/事件细分';
                        break;
                    case 1:
                        result1 = '/漏斗分析';
                        break;
                    case 2:
                        result1 = '/留存分析';
                        break;
                    case 3:
                        result1 = '/事件细分';
                        break;
                    default:
                }
                break;
                break;
        }
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