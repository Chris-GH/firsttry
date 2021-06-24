function log(callback:Function){
    return function(target:Function,type:string,descriptor:PropertyDescriptor){//返回一个装饰器就行了
        let value = descriptor.value;
        descriptor.value = function(a:number,b:number){//需要参数？？？
            let result = value(a,b);
            callback({
                type,
                a,
                b,
                result
            });
            return result;
        }
    }
}

class M{
    @log(function(result:any){
        console.log("日志:",result);
    })
    static add(x:number,y:number){
        return x+y;
    }
}

M.add(1,2);