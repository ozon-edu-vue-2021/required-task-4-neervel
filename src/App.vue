<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap");

#app {
  font-family: "Raleway", sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
</style>
