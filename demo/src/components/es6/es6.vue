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
      }, [])
      console.log('nums:', nums)
    </pre>
    <p> 使用 reduce 检测括号是否对齐封闭</p>
  </div>
</template>
<script>
</script>
<style lang="sass" scoped>

</style>
