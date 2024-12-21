<template>
  <aside class="sidebar">
    <ul>
      <li><router-link to="/player">Player</router-link></li>
      <li><router-link to="/settings">Settings</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
  position: fixed;
  height: 100%;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 1rem 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: #333;
}
</style>