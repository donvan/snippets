//构造函数、实例、原型 
function MVue({ methods }) {
    for (let key in methods) {
        this[key] = methods[key];
    }
}

//原型添加个方法
MVue.prototype.$alert = () => { console.log('hello MVue') }

//实例化MVue
window.mvue = new MVue({
    methods: {
        hello() {
            this.$alert();
        }
    }
})

mvue.hello();

/**
 * Vue的插件是一个对象, 就像Element.
 * 插件对象必须有install字段.
 * install字段是一个函数.
 * 初始化插件对象需要通过Vue.use().
 * Vue.use()调用必须在new Vue之前.
 * 同一个插件多次使用Vue.use()也只会被运行一次
 */
