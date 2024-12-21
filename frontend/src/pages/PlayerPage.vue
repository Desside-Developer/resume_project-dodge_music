<template>
  <MainLayout>
    <div class="player-page">
      <Sidebar />
      <Player />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import Sidebar from '../components/Sidebar.vue';
import Player from '../components/Player.vue';

export default {
  name: 'PlayerPage',
  components: {
    MainLayout,
    Sidebar,
    Player,
  },
};
</script>

<style scoped>
.player-page {
  display: flex;
}
</style>