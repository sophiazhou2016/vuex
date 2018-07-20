<template>
  <div class="html5-wrap">
    <canvas style="width:100%;height:100px;" ref="canvas"></canvas>
    <h3>从输入URL到页面加载发生了什么： https://segmentfault.com/a/1190000006879700</h3>
    <pre>
      DNS解析： .com -> google.com -> www.google.com  浏览器缓存-系统缓存  cdn就是dns的缓存

      TCP连接:  http -> tcp -> Ip ; https -> ssl -> tcp -> Ip

      发送HTTP请求: 请求行  请求头   请求正文

      服务器处理请求并返回HTTP报文：
      状态码
        状态码是由3位数组成，第一个数字定义了响应的类别，且有五种可能取值:

        1xx：指示信息–表示请求已接收，继续处理。
        2xx：成功–表示请求已被成功接收、理解、接受。
        3xx：重定向–要完成请求必须进行更进一步的操作。
        4xx：客户端错误–请求有语法错误或请求无法实现。
        5xx：服务器端错误–服务器未能实现合法的请求。
        平时遇到比较常见的状态码有:200, 204, 301, 302, 304, 400, 401, 403, 404, 422, 500(分别表示什么请自行查找)。

      浏览器解析渲染页面: reflow(回流) repain(重绘)
        DOM节点中的各个元素都是以盒模型的形式存在，这些都需要浏览器去计算其位置和大小等，这个过程称为reflow;
        当盒模型的位置,大小以及其他属性，如颜色,字体,等确定下来之后，浏览器便开始绘制内容，这个过程称为repain。

      连接结束
    </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // let canvas = this.$refs.canvas
    // let context = canvas.getContext('2d')
  }
}
</script>
<style lang="sass" scoped>

</style>
