<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <div
      class="main-container"
    >
      <div :class="{'fixed-header': fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { AppMain, Navbar } from './components'
import ResizeMixin from './mixin/resize'
import settings from '@/settings'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar
  }
})
export default class extends mixins(ResizeMixin) {
  get classObj() {
    return {
    }
  }

  get fixedHeader() {
    return settings.fixedHeader
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container {
    transition: none;
  }
}
</style>
