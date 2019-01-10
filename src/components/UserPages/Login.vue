<template>
  <section class="up-wrapper">
    <form action="#">
      <h4 class="title">Login</h4>
      <label for="userName" class="userName">Username</label>
      <input type="text" name="userName" id="userName">
      <label for="password" class="password">Password</label>
      <input type="text" name="password" id="password">
      <button class="btn">Login</button>
      <div class="changeType">
        <p class="text">
          Or Signup
          <a href="#" class="text" @click="changeType">here.</a>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import Router from "@/router/index";

export default {
  name: "Login",
  data() {
    return {
      type: "Signup",
      otherType: "Login",
      form: {
        type: ["Login", "Signup"]
      }
    };
  },
  methods: {
    changeType() {
      this.$router.push({ name: "Signup" });
    }
  }
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding: 0.5rem;
}
.up-wrapper {
  margin: 0 auto;
  max-width: 40rem;
  height: 60vh;
  padding: 1rem;
}
form {
  margin: 0 auto;
  width: 80%;
  min-height: 100%;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  box-shadow: 3px 10px 20px -4px rgba(0, 0, 0, 0.75);
}
.title {
  font-family: "Raleway";
  font-size: 2rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
}
#userName,
#password {
  width: 100%;
  height: 2rem;
  outline: none;
  border: 1px solid #aaa;
  border-bottom: 2px solid #5cbcea;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 0.3rem;
}
label {
  align-self: flex-start;
  font-family: "Raleway";
  color: #aaa;
}
#password {
  margin-bottom: 1rem;
}
.btn {
  padding: 0.5rem 1rem;
  width: 5rem;
  height: 2.5rem;
  text-align: center;
  border: none;
  outline: none;
  background: #5c75ea;
  color: #eee;
  border-radius: 0.3rem;
  text-decoration: none;
  font-family: "Raleway";
  font-size: 0.8rem;
  margin-bottom: 1.2rem;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  box-shadow: 0px 6px 16px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
.text {
  font-family: "Raleway";
  font-size: 0.7rem;
}
.text > a:link {
  color: #5c75ea;
}
.text > a:visited {
  color: #e84855;
}
@media screen and (max-width: 550px) {
  form {
    width: 100%;
    padding: 2rem 1rem;
  }
  label {
    font-size: 0.7rem;
  }
  #userName,
  #email,
  #password {
    font-size: 1.2rem;
  }
}
</style>
