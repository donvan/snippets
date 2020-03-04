//ES5原型链继承
function a() {
    this.name = 'a';
}
a.prototype.getName = function getName() {
    return this.name
}
function b() { }
b.prototype = new a();  //函数指向一个实例对象
console.log(b.prototype.__proto__ === a.prototype); // true
console.log(b.__proto__ === a); // false
console.log(b.__proto__); // [Function]


//ES6
class A {
    constructor(a) {
      this.name = a;
    }
    getName() {
      return this.name;
    }
  }
  
  class B extends A{
    constructor() {
      super();
    }
  }
  
  console.log(B.prototype.__proto__ === A.prototype); // true
  console.log(B.__proto__ === A); // true
  console.log(B.__proto__); // [Function: A]

  //ES5 的子类和父类一样，都是先创建好，再实现继承的,所以子类和父类的prototype都是[Function]
  //ES6 的继承是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this