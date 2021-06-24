//带元数据的装饰器log
import "reflect-metadata";
function L(type:string){
    return function(target:Function){
        Reflect.defineMetadata("type",type,target);
    }
}

function log(type?:string){
    return function (target:any,name:string,descriptor:PropertyDescriptor){
        let value = descriptor.value;
        let type = Reflect.getMetadata("type",target);
        descriptor.value = function(a:number,b:number){
            let result = value(a,b);
            let _type = type;
            if(!_type){
                if(typeof target === 'function'){
                    _type = Reflect.getMetadata('type',target);
                }
                else{
                    _type = Reflect.getMetadata("type",target.constructor);
                }
            }

            console.log("日志:",{
                type:_type,
                name,
                a,
                b,
                result
            });
        }
    }
}

@Reflect.metadata('type','storage')
class M{
    @log()
    static add(x:number,y:number){
        return x+y;
    }

}

M.add(1,2);