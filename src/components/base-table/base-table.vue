<template>
  <div class="base-table">
    <el-table
      :cell-style="cellStyle"
      :data="tableData"
      :header-cell-style="{background: '#fafafa'}"
      :max-height="maxHeight"
      @cell-click="cellClick"
      @filter-change="handleFilterChange"
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
      ref="table"
      size="mini"
      stripe
      style="width: 100%"
    >
      <slot name="multipleSelector"></slot>
      <template v-for="header in tableHeaders">
        <el-table-column
          :filter-method="filterHandler"
          :filters="header.filters"
          :formatter="header.formatter"
          :key="header.label"
          :label="header.label"
          :prop="header.prop"
          :sortable="header.sort"
          :width="header.width"
          v-if="header.filters"
        ></el-table-column>
        <el-table-column
          :formatter="header.formatter"
          :key="header.label"
          :label="header.label"
          :prop="header.prop"
          :sortable="header.sort"
          :width="header.width"
          v-else
        ></el-table-column>
      </template>

      <slot name="content"></slot>
      <slot name="action"></slot>
    </el-table>
    <div
      class="pagination-wrapper"
      v-if="currentPage"
    >
      <div class="ct_left">
        <div class="ct_total">
          总
          <span class="ct_total_count">{{total || tableData.total || tableData.length}}</span>条
        </div>
      </div>
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total || tableData.total || tableData.length"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    maxHeight: {
      default: undefined
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPage: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    tableData: {
      type: Array,
      required: true
    },
    tableHeaders: {
      type: Array,
      required: true
    },
    cellStyle: {
      type: Function
    },
    cellClick: {
      type: Function,
      default: function() {
        return () => {}
      }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit('mutiple-select', val)
    },
    sortChange(column, prop, order) {
      this.$emit('sort-change', { column, prop, order })
    },
    handleCurrentChange(page) {
      this.$emit('page-change', page)
    },
    clearSelectionAndChooseLast(row, selected) {
      this.$refs.table.clearSelection()
      this.$refs.table.toggleRowSelection(row, selected)
    },
    chooseRow(row, selected) {
      this.$refs.table.toggleRowSelection(row, selected)
    },
    handleFilterChange(filters) {
      this.$refs.table.clearSelection()
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>
<style lang="less" scoped>
.base-table {
  margin-top: 20px;
  width: 100%;
  min-height: 400px;
}

.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 20px 0;
  .ct_left {
    font-size: 14px;
    display: flex;
    .ct_total {
      .ct_total_count {
        color: #409eff;
        display: inline-block;
        margin: 0 10px 0 5px;
      }
    }
  }
}

.el-pagination {
  display: inline-block;
}
</style>
