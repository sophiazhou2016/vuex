<template>
  <div class="wrapVue">
    <h2>vue-router</h2>
    <h2>vue 使用心得</h2>
    <h4>1.改变store里面的值不能直接=赋值去改变</h4>
    <h4>2.改变vue data 里面的数组，需要Vue.set(arr, index, 值A)；A 可以是复制的arr[index],做出改变，再set</h4>
    <h4>3.v-if  v-else-if  v-else : 注意只有一种结果的时候，必须使用 v-else-if；这次侥幸判断条件，导致线上bug</h4>
  </div>
</template>
<script>
</script>
<style src="./vueContent.scss" scoped></style>
