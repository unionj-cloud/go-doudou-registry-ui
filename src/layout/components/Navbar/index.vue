<template>
  <div class="navbar">
    <el-row>
      <el-col :span="4">
        <sidebar-logo />
      </el-col>
      <el-col class="right-menu" :span="20">
        <template v-if="device !== 'mobile'">
          <lang-select class="right-menu-item hover-effect" />
          <div class="right-menu-item hover-effect">
            <a target="_blank" href="https://github.com/unionj-cloud/go-doudou"
              ><svg-icon name="github" width="40" height="40"
            /></a>
          </div>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import LangSelect from '@/components/LangSelect/index.vue'
import SidebarLogo from './SidebarLogo.vue'

@Component({
  name: 'Navbar',
  components: {
    LangSelect,
    SidebarLogo
  }
})
export default class extends Vue {
  get device() {
    return AppModule.device.toString()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .svg-icon {
    vertical-align: middle;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    line-height: 50px;
    height: 50px;
    text-align: right;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
