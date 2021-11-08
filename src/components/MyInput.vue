<template>
  <div class="input">
    <label :for="name">{{ title }}</label>
    <input 
      :id="name" 
      name="name" 
      v-model="inputValue"
    >
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    name: String,
    title: String,
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    inputValue: String
  },
  
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: #91969b;
}
input {
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: 2px solid #d9dfe4;
  transition: .2s;
}
input:focus {
  outline: none;
  border-color: #2459f5;
}
</style>