<template>
  <div>
    <h1>this is the users' page</h1>
    <input v-model="userId" type="text">
    <button @click="onLoadUser">
      Load user
    </button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    }
  },
  layout: 'users'
}
</script>
