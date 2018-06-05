<template>
  <div class="es6-wrap">
    <h4>函数参数的默认值</h4>
    <pre>
      function add(x, y = 'world') {
        console.log(x, y)
      }
      add('hello') // hello world
      add('hello', 'china') // hello china
      add('hello', '') // hello 这里是空字符串y = '' ；只有typeof y === 'undefined'的时候，才会取默认值
    </pre>
    <h4>reduce</h4>
    <p>reduce替代 map + filter </p>
    <pre>
      const numbers = [10, 20, 30, 40]
      let nums = numbers.reduce((finalList, num) => {
        num = num * 2
        if(num > 50) {
          finalList.push(num)
        }
        return finalList
      }, []) // finalList的初始值是[]
      console.log('nums:', nums)
    </pre>
    <p> 使用 reduce 检测括号是否对齐封闭</p>
    <pre>
      //Returns 0 if balanced.
      const isParensBalanced = (str) => {
        return str.split('').reduce((counter, char) => {
          if(counter 小于 0) { //matched ")" before "("
            return counter;
          } else if(char === '(') {
            return ++counter;
          } else if(char === ')') {
            return --counter;
          }  else { //matched some other char
            return counter;
          }
        }, 0); // starting value of the counter
      }
      isParensBalanced('(())') // 0  balanced
      isParensBalanced('(asdfds)') //0  balanced
      isParensBalanced('(()') // 1 not balanced
      isParensBalanced(')(') // -1 not balanced
    </pre>
    <p>使用 reduce 计算数组中的重复项</p>
    <pre>
      var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
      var carsObj = cars.reduce(function (obj, name) {
        obj[name] = obj[name] ? ++obj[name] : 1;
        return obj;
      }, {});
      carsObj; // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
    </pre>
    <h4>对象解构</h4>
    <p>移除对象的多余属性</p>
    <pre>
      let {name, ...resetObj} = {age: 20, city: 'shanghai', name: 'nick'}
      console.log(resetObj) // {age: 20, city: "shanghai"}
    </pre>
    <p>嵌套对象解构</p>
    <pre>
      var car = {
        model: 'bmw 2018',
        engine: {
          v6: true,
          turbo: true,
          vin: 12345
        }
      }
      const modelAndVIN = ({model, engine: {vin}}) => {
        console.log(`model: ${model} vin: ${vin}`);
      }
      modelAndVIN(car); // => model: bmw 2018  vin: 12345
    </pre>
    <p>合并对象</p>
    <pre>
      let object1 = { a:1, b:2,c:3 };
      let object2 = { b:30, c:40, d:50};
      let merged = {…object1, …object2}
      //spread and re-add into merged console.log(merged) // {a:1, b:30, c:40, d:50}
    </pre>
    <h4>使用 Sets 数组去重</h4>
    <pre>
      let arr = [1, 1, 2, 2, 3, 3];
      let deduped = [...new Set(arr)] // [1, 2, 3]
    </pre>
    <h4>数组解构</h4>
    <p>交换两个值</p>
    <pre>
      let param1 = 2, param2 = 3
      [param1, param2] = [param2, param1]
      console.log('param1:', param1, '; param2: ', param2)
    </pre>
    <p>从函数接受和分配多个值</p>
    <pre>
      async function getFullPost(){
        return await Promise.all([
          fetch('/post'),
          fetch('/comments')
        ]);
      }
      const [post, comments] = getFullPost();
    </pre>
    <h4>点击完成复制功能：浏览器oncopy事件</h4>
    <pre>
      function copying () {
        var el = document.getElementById('myInput')
        el.select()
        document.execCommand('copy')
      }
      document.execCommand('copy')
      document.getElementById("myInput").oncopy = function() {myFunction()};
      function myFunction() {
        alert("你拷贝了文本！");
      }
    </pre>
    <h4>referrer 属性可返回载入当前文档的文档的 URL。document.referrer</h4>
    <h4>import</h4>
    <pre>
      // 报错
      import { 'f' + 'oo' } from 'my_module';

      // 报错
      let module = 'my_module';
      import { foo } from module;

      // 报错
      if (x === 1) {
        import { foo } from 'module1';
      } else {
        import { foo } from 'module2';
      }

      import()可以放在if代码块，根据不同的情况，加载不同的模块。
      if (condition) {
        import('moduleA').then(...);
      } else {
        import('moduleB').then(...);
      }
    </pre>
  </div>
</template>
<script>
</script>
<style lang="sass" scoped>

</style>
