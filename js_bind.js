// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
// 其余参数将作为新函数的参数，供调用时使用
// bind() 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 this 值
const module = {
    x: 42,
    getX() {
        return this.x;
    }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);  //bind方法创建一个新的函数 ，this指定为传入的module参数
console.log(boundGetX());
  // expected output: 42