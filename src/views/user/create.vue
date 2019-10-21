<template>
  <div class="create-screen">
    <create-form @save-success="handleSuccess"></create-form>
  </div>
</template>

<script>
import CreateForm from './_form'
export default {
  components: {
    CreateForm
  },
  methods: {
    handleSuccess() {
      this.$router.back()
    }
  }
}
</script>

<style>
</style>