import "reflect-metadata"

function n(target:any){

}

function f(name:string){
    return function(target:any,propertyKey:string,descriptor:any){
        console.log('design type',Reflect.getMetadata('design:type',target,propertyKey));
        console.log('params type',Reflect.getMetadata('design:paramtypes',target,propertyKey));
        console.log('return type',Reflect.getMetadata('design:returntype',target,propertyKey));
    }
}
function m(target:any,propertyKey:string){

}

@n
class B{
    @m
    name:string;
    constructor(a:string){

    }

    @f('')
    method1(a:string,b:string){
        return 'a'
    }
}

let b = new B('test');
b.method1('a','b');