const log = console.log;


//观察者：Observer观察者 知道Subject目标者， Subject一直保持对观察者进行记录
//发布订阅者： 发布者和订阅者不知道对方的存在 ，它们只有通过消息代理进行通信

/**
 * 观察者模式  
 * 不能对事件通知进行细分
 */

 class Subject{
     constructor(){
         this.observers = [];  //观察者列表
     }

     //添加观察者
     add(observer){
         this.observers.push(observer)
     }
     //删除
     remove(observer){
         let idx=this.observers.findIndex(item=>item===observer);
         idx>-1 && this.observers.splice(idx,1);
     }
     //通知
     notify(){
         for(let observer of this.observers){
             observer.update();
         }
     }
 }

 class Observer{
     constructor(name){
         this.name = name;
     }

     update(){
         log(`目标者通知更新了，我是：${this.name}`)
     }
 }
 

 //实例化目标者
 let subject = new Subject();

 //实例化两个观察者
 let obs1 = new Observer('前端开发者')
 let obs2 = new Observer('后端开发者')

 //向目标者添加观察者
 subject.add(obs1);
 subject.add(obs2);

 //目标者通知更新
 subject.notify();




/**
 * 发布订阅者模式
 * 订阅者各自实现不同的逻辑 ，且只接受自己订阅的事件通知 ，实现了不一样。
 */
 let pubSub = {  //事件中心 
     list:{},
     subscribe(key,fn){ //订阅
        if(!this.list[key]){ //如果订阅名不存在 则创建个空数组 ，并保存订阅方法 有存在 则添加
            this.list[key] = [];
        }
        this.list[key].push(fn);
     },

     publish(key,...args){  //发布
        for(let fn of this.list[key]){
            fn.call(this,...args)
        }
     },

     unsubscribe(key,fn){ //取消订阅
         let fnList = this.list[key]
         if(!fnList) return false;

         if(!fn){
             //不传入指定取消的订阅方法，则清空所有key下的订阅
            fnList &&(fnList.length =0);
         }else{
             fnList.forEach((item,idx)=>{
                 if(item===fn){
                     fnList.splice(idx,1);
                 }
             })
         }
     }

 }

 //订阅
 pubSub.subscribe('onwork',func1)
 pubSub.subscribe('onwork',func2)

 pubSub.subscribe('offwork',time=>{
     log(`下班了：${time}`)
 })
 
 pubSub.subscribe('launch',time=>{
     log(`吃饭了：${time}`)
 })

 //发布
 pubSub.publish('offwork','18:00:00');
 pubSub.publish('launch','12:00:00');

 //取消订阅
 pubSub.unsubscribe('onwork',func1);

 var func1 = (time)=>{
     log(`func1 ${time}`)
 }
 var func2 = (time)=>{
    log(`func2 ${time}`)
}