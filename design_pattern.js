const log = console.log;

/**
 * 构造函数模式
 * 属性绑定到this上，公用方法绑定在prototype上
 */
function People(name = 'human') {
    this.name = name;
}

People.prototype.walk = function () {
    log('walk')
}

let xiaohong = new People('xiaohong');

/**
 * 工厂模式
 * return一个对象 ，创建不同的引用类型  每个实例都有单独的方法
 */
function createPerson(name = 'human') {
    //定义工厂
    let person = {
        name: name,
        walk() {
            log('walk')
        }
    }

    return person;
}

let xiaoming = createPerson('xiaoming');


/**
 * 单例模式  只允许实例化一次的对象类
 * 产生一个类的唯一实例，节约内存。
 */

let Singleton = (() => {
    let _instance = null;

    function _module() {
        this.name = 'dongfang';
        this.getSingleton = () => {
            return this.name
        }

        this.setSingleton = (name) => {
            this.name = name
        }
    }

    return {
        getInstance() {
            if (!_instance) {
                _instance = new _module();
            }

            return _instance;
        }
    }
})();

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();
s1 === s2  //true
s1.getSingleton() //'dongfang'
s1.setSingleton('abc')
s1.setSingleton() //  abc
s2.setSingleton()  //abc