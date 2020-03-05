//箭头函数没有this, 是外层代码块的this 是固定的。

var id=10;
function foo(){
    setTimeout(function(){  //window.setTimeout this是window
        console.log(this.id)
    },1000)
}

foo();  //10
foo.call({id:11})  //10

function bar(){
    setTimeout(()=>{
        console.log(this.id)  
    },1000)
}

bar();  //10
bar.call({id:11})    //11


var person = {
    name:'dongfang',
    func:function(){
        console.log(this)
    }
}

person.func();  //this是person, 谁调用this指向谁

var person2 = {
    name:'dongfang',
    func:()=>{
        console.log(this)  //this是window 不会再改变
    }
}

person2.func();