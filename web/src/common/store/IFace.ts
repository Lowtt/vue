import { cloneDeep } from "lodash";

/**
 * 搜索结果对象
 */
export interface SearchResult {
    L:any, 
    P:number, 
    N:number, 
    T:number, 
    R:any
}

/**
 * 搜索条件对象
 */
export interface SearchWhere {
    Keyword?:string, 
    W?:any, 
    P?:number, 
    N?:number, 
    Sort?:string
}

/**
 * 对象State接口
 */
export interface ObjectState {
    Where?:SearchWhere, 
    Result?:SearchResult, 
    AddData?:any, 
    EditData?:any, 
    ShowAddModal?:boolean, 
    ShowEditModal?:boolean, 
}

/**
 * 登录
 */
 export interface LoginObject {
     // 登录账号
     Account:string
     // 登录密码
     PWD:string
 }

const DefaultSearchWehre:SearchWhere =  {
    Keyword:'', 
    W: {}, 
    P:1, 
    N:10
}
const DefaultSearchResult:SearchResult =  {
    L:[], 
    P:1, 
    N:10, 
    T:0, 
    R: {}
}
export function clone(Obj:any):any {
    return cloneDeep(Obj)
}
const DefaultObjectState:ObjectState =  {
    Where:clone(DefaultSearchWehre), 
    Result:clone(DefaultSearchResult), 
    AddData: {}, 
    EditData: {}, 
}
export {
    DefaultObjectState, DefaultSearchResult, DefaultSearchWehre
}