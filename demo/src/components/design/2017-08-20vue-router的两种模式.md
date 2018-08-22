# Vue-router有两种mode: hash、histrory
## hash: onhashchange事件触发，页面不会重新加载，hash值改变的时候
## history: onpopstate事件触发
## history模式生产环境需要配置ngix
  > 原理：服务端请求返回index.html，vue-router.js内部路由显示正确路由