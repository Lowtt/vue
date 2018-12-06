import axios from "axios"
import NotifyPrototype from "@wcjiang/notify"

export interface FaviconObject {
    Color ? : string
    BackgroundColor ? : string
    Number ? : number
    Title ? : string
}

export interface ColorObject {
    Color ? : string
    BackgroundColor ? : string
}

export interface NotifyObject {
    title ? : string
    body ? : string,
    openurl ? : string
    onclick ? : Function
    onshow ? : Function
}
declare let document: any;
class Notify {
    private _BaiDuToken: string = ""
    private Notify: any = null
    private _Config: any = {
        audio: {
            file: ""
        },
        effect: "flash",
        interval: 1000,
        updateFavicon: {
            textColor: "#fff",
            backgroundColor: "#2F9A00"
        }
    }

    constructor() {
        this.Notify = new NotifyPrototype(this._Config)
        this._getToken()
    }

    private async _getToken() {
        if ("" === this._BaiDuToken) {
            await axios.post('http://api.tansuyun.cn/Baidu/voice_token', {}).then((d: any) => {
                if (d.data.d.length > 0) {
                    this._BaiDuToken = d.data.d;
                }
            })
        } else {
            return this._BaiDuToken
        }
    }

    /**
     * 播放语音
     * @param PlayContent 播放内容
     */
    play(PlayContent: string) {
        this.Notify.stopPlay()
        this._Config.audio.file = `http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=${this._BaiDuToken}&tex=${PlayContent}&vol=9&per=0&spd=5&pit=5`
        this.Notify.player()
        return this
    }

    /**
     * 设置窗口信息标题
     * @param title 标题
     */
    setTitle(title ? : string) {
        this.Notify.setTitle(title || '标题')
        return this
    }

    /**
     * 设置窗口图标颜色
     * @param Colors ColorObject
     */
    setColor(Colors: ColorObject) {
        this.Notify.setFaviconColor(Colors.Color || '#f5ff00').setFaviconBackgroundColor(Colors.BackgroundColor || '#2F9A00')
        return this
    }

    /**
     * 修改窗口消息数量
     * @param number 消息数量
     */
    setFavicon(number ? : number) {
        this.Notify.setFavicon(number || 1)
    }

    /**
     * 修改窗口标题信息
     * @param favicon FaviconObject
     */
    favicon(favicon: FaviconObject) {
        this.setFavicon(favicon.Number)
        this.setTitle(favicon.Title)
        this.setColor({
            Color: favicon.Color,
            BackgroundColor: favicon.BackgroundColor
        })
        return this
    }

    /**
     * 重置窗口标题信息
     */
    faviconClear() {
        this.setTitle(document.querySelector('title').innerHTML)
        this.Notify.faviconClear()
        return this
    }

    /**
     * 提示弹窗
     * @param notify NotifyObject
     */
    notify(notify: NotifyObject) {
        notify.onclick ? notify.onclick : () => {
            this.faviconClear()
        }
        this.Notify.close()
        this.Notify.notify(notify)
        return this
    }
}

export default new Notify