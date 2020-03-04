//回调函数写法
function f1(val,callback){
    ++val;
    setTimeout(function(){
        console.log(++val);
    },1000)
}
f1(0); 


//Promise写法
function f2(val){
    return new Promise((resolve,reject)=>{
        setTimeout(function(callback){
            resolve(++val);
        },1000)
    })
}

f2(0).then(value=>{
    console.log(value)
}).catch(err=>{
    console.log(err)
})

// Promise.all
// Promise.all(iterable) 方法返回一个 Promise 实例,必须参数的promise都resolve 才完成
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values); //[3,42,'foo']
});

//Generator函数 yield  next()
//是将函数分步骤阻塞 ，只有主动调用next()才能进行下一步
const fs = require("fs");
const read = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
};
function * show(){
    yield read('1.txt');
    yield read('2.txt');
    yield read('3.txt');
}
const s = show();
s.next().value.then(res => {
    console.log(res.toString());
    return s.next().value;
}).then(res => {
    console.log(res.toString());
    return s.next().value;
}).then(res => {
    console.log(res.toString());
});


// Async/await 
// 可以理解成自动执行的Generator函数

const fs = require("fs");
const read = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
};
async function readByAsync(){
    let a1;
    let a2;
    let a3;
    try{
        a1 = await read('1.txt');
        a2 = await read('2.txt');
        a3 = await read('3.txt');
    }catch(e){
        //TODO handle the exception
    }
    console.log(a1.toString());
    console.log(a2.toString());
    console.log(a3.toString());
}
readByAsync();
