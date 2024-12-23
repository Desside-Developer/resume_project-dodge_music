<template>
  <div class="auth-container">
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="text" id="username" v-model="username" placeholder="Username or Email" required />
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <button @click="loginWithGoogle">Login with Google</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Logging in with', this.username, this.password);
    },
    loginWithGoogle() {
      console.log('Logging in with Google');
    },
  },
};
</script>
<style scoped>

.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
  padding: 2rem;
  background-color: #f9f9f9;
  overflow: auto;
}

.auth-container form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.auth-container button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input {
  width: calc(100% - 1rem);
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .auth-container {
    padding: 1rem;
  }

  .auth-container form {
    padding: 1rem;
  }

  .auth-container button {
    padding: 0.5rem;
    font-size: 0.875rem;
  }

  .form-group input {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>