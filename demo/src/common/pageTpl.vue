<template>
  <transition>
    <router-view></router-view>
  </transition>
</template>
<style lang="scss">
.translate-reverse-enter-active,
.translate-reverse-leave-active,
.translate-forward-enter-active,
.translate-forward-leave-active {
  will-change: transform;
  transition: all 500ms;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.router-view {
  width: 100%;
}

.xtranslate-reverse-enter-active,
.xtranslate-reverse-leave-active,
.xtranslate-forward-enter-active,
.xtranslate-forward-leave-active {
  will-change: transform;
  transition: all 500ms;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20px;
  left: 0;
}

.Xtranslate-reverse-enter-active,
.Xtranslate-reverse-leave-active,
.Xtranslate-forward-enter-active,
.Xtranslate-forward-leave-active {
  will-change: transform;
  transition: all 500ms;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 46px;
  left: 0;
}

.translate-reverse-enter,
.translate-forward-leave-to,
.xtranslate-reverse-enter,
.xtranslate-forward-leave-to,
.Xtranslate-reverse-enter,
.Xtranslate-forward-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.translate-reverse-leave-to,
.translate-forward-enter,
.xtranslate-reverse-leave-to,
.xtranslate-forward-enter,
.Xtranslate-reverse-leave-to,
.Xtranslate-forward-enter {
  opacity: 0;
  transform: translateX(100%);
}
</style>
