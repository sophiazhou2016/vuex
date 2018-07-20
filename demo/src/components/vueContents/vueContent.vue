<template>
  <div class="wrapVue">
    <h2>vue-router</h2>
    <h2>vue 使用心得</h2>
    <h4>1.改变store里面的值不能直接=赋值去改变</h4>
    <h4>2.改变vue data 里面的数组，需要Vue.set(arr, index, 值A)；A 可以是复制的arr[index],做出改变，再set</h4>
    <h4>3.v-if  v-else-if  v-else : 注意只有一种结果的时候，必须使用 v-else-if；这次侥幸判断条件，导致线上bug</h4>
    <h2>需要只在安卓系统下面，引入css,import 不能写在 if 判断条件之内，但是可以用动态的写法</h2>
    <h2>动画里面的百分比参数需要从js获取，js跟scss不能交互，参考链接 <a href="https://segmentfault.com/q/1010000002561714">https://segmentfault.com/q/1010000002561714</a></h2>
    <h4>思路：百分比js获取，js设置动态的keyframes</h4>
    <h2>斜角的进度条，实现思路：三角块绝对定位，再对其进行位移</h2>
    <h2>Vue的无缝滚动插件：实现思路纯css3，但是觉得对数据量多的不友好。希望后期扩展</h2>
    <h2>文案转成html用nodepad++工具，且很多文章集合写到单独的js文件</h2>
    <h4>已经确认过网站打开慢不是因为这个js文件太大，而且vue里面的组件都是异步加载，import进来一个文件，浏览器里面会加载这个文件</h4>
    <h2>代码的技术优化：什么是Node中间层？</h2>
    <h4>tab切换保存tab各自滑动的位置（获取页面的滚动位置兼容移动端）</h4>
    <h4>获取页面的滚动位置：</h4>
    <pre>
      document.documentElement.scrollTop
      document.body.scrollTop
      window.scrollY
      window.pageYOffset (兼容性最好)
    </pre>
    <h2>一个浮窗滑动隐藏，停止滑动显示， 思路：时刻监测scrollTop，newValue跟oldValue相等即停止滑动，取消监听；否则在滑动，继续监听</h2>
    <h2>es6，数组的map方法，() => {if() {return xxx}} 如果不满足if条件的，就会返回undefined，这个数组的length不会变化，且需要重新赋值<br/>
      按照情况用filter方法代替
    </h2>
    <h2>js splice(index, 0, 'xx') 第二个参数是0的时候表示添加，是1表示替换</h2>
  </div>
</template>
<script>
</script>
<style src="./vueContent.scss" scoped></style>
