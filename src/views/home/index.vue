<template>
  <el-container>
    <el-main class="home-main">
      <el-table
        :data="table"
        stripe
        style="width: 100%"
        :row-style="{cursor: 'pointer'}"
        @row-click="handleRowClick">
        <el-table-column
          prop="index"
          :label="$t('home.column.index')">
        </el-table-column>
        <el-table-column
          prop="svcName"
          :label="$t('home.column.svcName')">
        </el-table-column>
        <el-table-column
          prop="hostname"
          :label="$t('home.column.hostname')">
        </el-table-column>
        <el-table-column
          prop="baseUrl"
          :label="$t('home.column.baseUrl')">
        </el-table-column>
        <el-table-column
          prop="status"
          :label="$t('home.column.status')">
        </el-table-column>
        <el-table-column
          prop="uptime"
          :label="$t('home.column.uptime')">
        </el-table-column>
        <el-table-column
          prop="goVer"
          :label="$t('home.column.goVer')">
        </el-table-column>
        <el-table-column
          prop="gddVer"
          :label="$t('home.column.gddVer')">
        </el-table-column>
        <el-table-column
          prop="buildUser"
          :label="$t('home.column.buildUser')">
        </el-table-column>
        <el-table-column
          prop="buildTime"
          :label="$t('home.column.buildTime')">
        </el-table-column>
        <el-table-column
          prop="data"
          :label="$t('home.column.data')">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Row {
  index: number
  svcName: string
  hostname: string
  baseUrl: string
  status: string
  uptime: string
  goVer: string
  gddVer: string
  buildUser: string
  buildTime: string
  data: string
}

@Component({
  name: 'Registry',
  components: {
  }
})
export default class extends Vue {
  get table() {
    return (window as any).rows
  }

  handleRowClick(row: Row) {
    window.open(row.baseUrl + '/go-doudou/doc')
  }
}
</script>
<style lang='scss' scoped>
</style>
