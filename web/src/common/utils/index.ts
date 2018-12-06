import * as _ from 'lodash'
import * as moment from 'moment'
import vuex from '../store'
// import {G_USER_PERMISSIONS }from '../store/base/Login'
import { RouterPath }from '../config'; 
import axios from 'axios';

//本地存储
const store = window.localStorage; 
export function cache(key:string, value?:any) {
    if (null === value) {
        //如果值为空,清除键名对应的数据
        store.removeItem(key); 
    }else {
        if ( ! _.isUndefined(value)) {
            store.setItem(key, JSON.stringify(value))
        }else {
            try {
                let p:any = store.getItem(key); 
                return _.isString(p)?JSON.parse(p):''; 
            }catch (error) {

            }
            return ''
        }
    }
}
/**
 * 仿造php的array_columns函数
 * @param arr
 * @param column
 * @returns {Array}
 */
export function array_columns(arr:any | Array < any > , column:string, unique = false) {
    let a:any[] = []; 
    _.forOwn(arr, (v:any) =>  {
        if (unique) {
            if (a.indexOf(v[column]) == -1) {
                a.push(v[column])
            }
        }else {
            a.push(v[column])
        }
    })
    return a; 
}
export function array_sum(v:any) {
    let money = 0; 
    v.forEach((p:any) =>  {
        money += Number(p)
    }); 
    return money; 
}
export function array_key_set(array:Object | Object[], k:string, r:boolean = false) {
    let o:any =  {}; 
    _.forOwn(array, (v:any) =>  {
        if (r) {
            if (_.isUndefined(o[v[k]]))o[v[k]] = []; 
            o[v[k]].push(v)
        }else {
            o[v[k]] = v; 
        }
    })
    return o; 
}
export function array_keys(o:Object | Object[]) {
    try {
        return Object.keys(o)
    }catch (e) {
        return []; 
    }finally {
        return []; 
    }
}
/**
 * 权限判定
 * @param PermissionName
 */
// export function hasPermission(PermissionName:any, tip:boolean = true, redirect:RouterPath | any = false) {
//     //return true;
//     let p = vuex.getters[G_USER_PERMISSIONS][PermissionName.Code]
//     if ( ! p && tip) {
//         // error('抱歉，您不具有该操作权限');
//         // if (redirect) {
//         //     router.push(redirect)
//         // }
//     }
//     return p; 
// }
/**
 * 时间处理
 * @param time  时间
 * @param format 时间格式
 */
export function date(time?:Date, format:string = "YYYY-MM-DD HH:mm") {
    return moment(time?time:new Date()).format(format)
}

/**
 * 日期加法
 * @param time 时间
 * @param hours 小时
 * @param format 时间格式
 */
export function dateAddition(time?:Date, hours:number = 8, format:string = "YYYY-MM-DD HH:mm:ss") {
    return moment(time?time:new Date).add(hours, 'hours').format(format)
}

/**
 * 时间减法
 * @param time 时间
 * @param hours 小时
 * @param format 时间格式
 */
export function dateSubtract(time?:Date, hours:number = 8, format:string = "YYYY-MM-DD HH:mm:ss") {
    return moment(time?time:new Date()).subtract(hours, 'hours').format(format)
}

export function uuid() {
    var s:any = []; 
    var hexDigits = "0123456789abcdef"; 
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1); 
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010 
s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01 
s[8] = s[13] = s[18] = s[23] = "-"; 

    var uuid = s.join(""); 
    return uuid; 
}

/**
 * 检查数组中的对象某个键等于传入值的总数
 * @param arry 检查的数组
 * @param kay 对象的键
 * @param value 对象的值
 * @returns 返回总数
 */
export function getSum(arry:Array < any > , kay:any, value:any) {
    let number:number = 0
    for (let i = 0; i < arry.length; i++) {
      if (arry[i][kay] == value) {
          number++
      }
    }
    return number
}
