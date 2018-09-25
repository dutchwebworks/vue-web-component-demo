<template>
  <div class="home">
    <p>Hello {{ myName }}, from the component</p>

    <p>
      <button v-on:click="changeName">Change my name</button>
    </p>

    <p>
      <code>
        ./node_modules/\@vue/cli-service/bin/vue-cli-service.js build --target wc --name my-hello-world src/views/Home.vue
      </code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      myName: "Gregor",
      newName: "Dennis"
    }
  },
  methods: {
    changeName() {
      this.myName = this.newName;
    }
  }
}
</script>

<style>
.home {
  border: 1px solid gold;
  padding: 20px;
  font-family: serif;
  font-size: 32px;
}

button {
  background-color: deeppink;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 10px;
}
</style>
