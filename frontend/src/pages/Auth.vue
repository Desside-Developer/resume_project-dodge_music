<template>
  <AuthLayout>
    <div class="auth">
      <h1>Login or Register</h1>
      <!-- Login/Register form here -->
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue';

export default {
  name: 'Auth',
  components: {
    AuthLayout,
  },
};
</script>

<style scoped>
.auth {
  text-align: center;
}
</style>