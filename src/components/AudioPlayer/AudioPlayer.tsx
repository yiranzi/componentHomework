/**
 * ict主淫部门统一UI库
 * @module ICT-UI
 */

import * as React from "react";
import * as className from "./style/AudioPlayer.less";
import * as howler from "howler";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
interface AudioPlayerPropsTypes {
    src: string;
    progress?: number;
    buffer?: number;
    length?: number;
    onPlay?: boolean;
}

/**
 * 音频播放器
 * @class AudioPlayer
 * @type ICT-UI-Component
 * @author heartblood
 * @param {number} width - [可选] 宽度(单位px) 尚未做rem兼容
 * @param {number} index - [必填] 当前进度，不能超过总step长度，可动态改变，从0开始计数
 * @param {Array<{index:number, title: String}>} steps - [必填] step内容数组，index为step步骤数字，title为下方文字说明，传入的数组须有序， title为可选
 */
export default class AudioPlayer extends React.PureComponent<AudioPlayerPropsTypes> {
    private audioSprite: any = null;
    private lock: boolean = true;
    private SpriteId: number = null;
    constructor(props: AudioPlayerPropsTypes) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.audioSprite = new howler.Howl({
            src: [this.props.src],
        });
    }
    handleButtonClick() {
        if (this.lock && this.SpriteId === null) {
            this.SpriteId = this.audioSprite.play();
            this.lock = false;
        } else if (!this.lock && this.SpriteId !== null) {
            this.audioSprite = this.audioSprite.pause(this.SpriteId);
            this.lock = true;
            this.SpriteId = null;
        }
    }
    render() {
        return (
            <div className={(className as any).container} >
                <ProgressBar progress={40} buffer={20} isLoading={false} />
                <button onTouchStart={this.handleButtonClick} style={{width: "200px", height: "200px", marginTop: "200px"}}>点我</button>
            </div>
        );
    }
}

