declare module "vue"{
    export default class v{
        $msg:Function
        $emit:Function
        $store:any
        $refs:any
        $router:any
        $route:any
        $confirm:Function
        $nextTick:Function
        public static use:Function        
        constructor(opts?:any)
    }
}

declare module "@wcjiang/notify" {
    const a:any; 
    export default a; 
}

declare module 'async-validator'{
    const a:any
    export default a
}