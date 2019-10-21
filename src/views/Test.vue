<template>


  <div>

    <el-button type="success" >点击</el-button>
    <el-button type="warning" plain>点击</el-button>
    <el-button type="warning" disabled icon="el-icon-share">点击</el-button>

    <el-radio label="1">点击</el-radio>
    <el-radio label="1">点击</el-radio>
     <div style="margin-top: 20px">
    <el-radio-button label="">点击</el-radio-button>
     </div>

    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-alert :title="sfsd" type="info" show-icon></el-alert>
      
      <el-input v-model="form.name" placeholder=""></el-input>
      
      <el-form-item label="">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    
    <el-select placeholder="">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    
    
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>

  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
      </div>
  </div>

    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>



  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  </div>



</template>

<script>
    export default {
    data: () => ({
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      form:{},
      value: '',
      show3: true,
       show: true
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
