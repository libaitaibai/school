<template>
  <div class="edit-screen">
    <edit-form
      :id="id"
      @save-success="handleSuccess"
    ></edit-form>
  </div>
</template>

<script>
import EditForm from './_form'
export default {
  name: 'edit-screen',
  components: {
    EditForm
  },
  computed: {
    id () {
      return this.$route.params.userId
    }
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