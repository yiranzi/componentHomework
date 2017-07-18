import WxSdk from "@/assets/js/jweixin";
import fetch from "@/isomorphic/fetch";

import config from "./bridgeConfig";



/**
 * 初始化微信api授权、签名等
 * @func InitWxApi
 */
const InitWxApi = () => {
    _isWeiXin() && _signWxApi().then(() => {
        (WxSdk as any).config(config);
    });
};

// todo api token
const _signWxApi = () => {
    return fetch("", {
        method: "POST",
        body: JSON.stringify({ "url": location.href }),
        headers: {
            "Accept": "application/json",
            "X-iChangTou-Json-Api-Token": "",
            "Content-Type": "application/json;charset=utf-8"
        }
    });
};

const _isWeiXin = (): boolean => {
    let ua = navigator.userAgent.toLowerCase();
    if ( ua.match(/MicroMessenger/i) !== null && ua.match(/MicroMessenger/i)[0] === "micromessenger" ) {
        return true;
    } else {
        return false;
    }
};

export default InitWxApi;