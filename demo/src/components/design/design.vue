<template>
  <div>
    <h1>单例模式</h1>
    <div>namespace</div>
    <div>在应用单例模式时，生成单例的类必须保证只有一个实例的存在，很多时候整个系统只需要拥有一个全局对象， 才有利于协调系统整体的行为。
      <br/>比如在整个系统的配置文件中，配置数据有一个单例对象进行统一读取和修改，其他对象需要配置数据的时候也统 一通过该单例对象来获取配置数据，这样就可以简化复杂环境下的配置管理。
      <br/> 单例模式的思路是：一个类能返回一个对象的引用 （并且永远是同一个）和一个获得该实例的方法（静态方法，通常使用 getInstance 名称）。那么当我们调用这个方法时，如果类持有的引用不为空就返回该引用，否者就创建该类的实例，并且将实例引用赋值给该类保持的那个引用再返回。同时将该类的构造函数定义为私有方法，避免其他函数使用该构造函数来实例化对象，只通过该类的静态方法来得到该类的唯一实例。
    </div>
    <p>1.用一个对象来规划一个命名空间</p>
    <p>2.通过单例模式来管理代码库的各个模块</p>
    <pre>
      var moduleDemo = (function name(params) {
          function bar() {};
          function foo() {};
          function map() {};

          return {
              bar: bar,
              foo: foo,
              map: map,
          }
      })();
      //访问模块内部的方法
      moduleDemo.bar();
      所以很简单就能看出，我们借助闭包实现了模块。借助这样的思路，我们可以封装一些工具方法组成一个单独的工具模块，以避免代码的重复编写。这样的比较出名的实践有 lodash, axios等。他们都是在实践中用得比较多的工具模块。
      模块化是单例模式的一种实践应用。
    </pre>
    <p>3.管理静态变量</p>
    <p>4. 惰性单例: 用到的时候执行</p>
    <pre>
      // 单例
        var LazySingle = (function() {
          // 单例实例引用
          var _instance = null
          // 单例
          function Single() {
            console.log('执行Single')
            return {
              publicMethod: function() {},
              publicProperty: '1.0'
            }
          }
          // 获取单例对象接口
          return function() {
            if (!_instance) {
              _instance = Single()
            }
            console.log('_instance:', _instance)
            // 返回单例
            return _instance
          }
        })()
        console.log('111', LazySingle, LazySingle())
        console.log(LazySingle().publicProperty)
        console.log(LazySingle().publicProperty)
    </pre>
    <h1>外观模式</h1>
    <p><a href="https://www.cnblogs.com/webFrontDev/archive/2013/03/24/2978511.html">https://www.cnblogs.com/webFrontDev/archive/2013/03/24/2978511.html</a></p>
    <pre>
      function addEvent(dom, type, fn) {
        if (document.addEventListener) {
          dom.addEventListener(type, fn, false) // dom2级的冒泡机制
        } else if (document.attachEvent) {
          dom.attachEvent('on' + type, fn)
        } else {
          dom['on' + type] = fn
        }
      }
    </pre>
    <h1>适配器模式</h1>
    <p>适配异类框架</p>
    <p>参数适配器</p>
    <p>数据适配</p>
    <p>服务器端数据适配</p>
    <h1>代理模式：由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介作用。</h1>
    <p>img 请求统计 src 可以跨域，但是只能get方式</p>
    <p>JSONP</p>
    <p>代理模板不懂</p>
    <h1>装饰者模式</h1>
    <p>在不改变原有对象的基础上，通过对其进行包装扩展(添加属性或者方法)使原有对象可以满足用户的更复杂需求。</p>
    <pre>
      var decorator = function(input, fn) {
        var input = document.getElementById(input)
        if(typeof input.onclick === 'function') {
          var oldClickFn = input.onclick
          oldClickFn()
          fn()
        } else {
          input.onclick = fn
        }
      }
    </pre>
    <h1>桥接模式</h1>
    <p>在系统沿着多个维度变化的同时，又不增加其复杂度并达到解耦</p>
    <h1>组合模式</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  create() {},
  methods: {}
}
</script>
