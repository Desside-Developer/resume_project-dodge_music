<template>
  <MainLayout>
    <div class="home">
      <h1>Welcome to the Music App</h1>
      <router-link to="/auth">
        <button>Get Started</button>
      </router-link>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>