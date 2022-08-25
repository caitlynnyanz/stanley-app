<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
    this.showProject();
  },
  methods: {
    showProject: function () {
      axios.get("/projects/" + this.$route.params.id + ".json").then((response) => {
        this.student = response.data;
        console.log("One project: ", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Projects</h2>
    <div v-for="capstone in student.capstone" v-bind:key="capstone.id">
      <img v-bind:src="student.url" />
      <h3>{{ capstone.name }}</h3>
      <p>Description: {{ capstone.description }}</p>
      <a v-bind:src="capstone.url" class="btn btn-secondary">Demo</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(239, 239, 239);
}
</style>
