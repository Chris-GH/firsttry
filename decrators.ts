//装饰者模式
@d1
class MClass {
    @d2
    a:number;
    @d2
    static property1:number;//先执行
    @d3
    get b(){
        return 1;
    }
    @d3
    static get c(){
        return 2    ;
    }
    @d4
    public method1(@d5 x:number,@d5 y:number){}
    @d4
    public static method2(){}


}

function d1(target:Function){
    console.log(target);
}

function d2(target:any,name:string){
    console.log(typeof target,name);
}

function d3(target:any,name:string,descriptor:PropertyDescriptor){
    console.log(typeof target,name,descriptor);
}

function d4(target:any,name:string,descriptor:PropertyDescriptor){
    console.log(typeof target,name,descriptor);
}

function d5(target:any,name:string,index:number){
    console.log(typeof target,name,index);
}