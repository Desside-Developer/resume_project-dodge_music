<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
main {
  padding: 2rem;
}
</style>