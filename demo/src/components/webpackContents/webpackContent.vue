<template>
  <div class="wrap-webpack">

    <h2>webpack参考文档：</h2>
    <a href="http://www.ferecord.com/webpack-summary.html">http://www.ferecord.com/webpack-summary.html</a>
    <h3>1. webpack.base.conf.js</h3>
    <h4>a) entry-用来定义入口文件</h4>
    <h4>b) output-用于定义构建后的文件的输出，是个对象。有path和filename</h4>
    <p>__dirname:当前的文件目录位置；path.join()方法拼接路径，并返回该路径</p>
    <p>如:path.join(__dirname,'aa','main.js'): 当前路径\aa\main.js</p>
    <h4>c) module-用来配置加载器loaders：loaders, preloaders, postLoaders</h4>
    <p>webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换</p>
    <p>test: 一个匹配loaders所处理的文件的拓展名的正则表达式（必须）。如/\.vue$/ 是vue格式文件</p>
    <p>loader: loader的名称（必须）</p>
    <p>include/exclude: 手动添加必须处理的文件/文件夹，或屏蔽不需要处理的文件/文件夹（可选）</p>
    <p>query: 为loaders提供额外的设置选项（可选）</p>
    <h4>d) resolve-用来配置文件路径的指向。可以定义文件跟模块的默认路径及后缀等，节省 webpack 搜索文件的时间、优化引用模块时的体验</h4>
    <p>常用的包括alias、extensions、root、modulesDirectories属性</p>
    <p>alias： 别名。是个对象，把资源路径重定向到另一个路径。</p>
    <p>extensions:</p>
  </div>
</template>
<script>
</script>
<style lang="scss" src="./webpack.scss" scoped></style>
