<script>
import axios from "axios";

export default {
  data: function () {
    return {
      project: {},
    };
  },
  created: function () {
    this.showProject();
  },
  methods: {
    showProject: function () {
      axios.get("/projects/" + this.$route.params.id + ".json").then((response) => {
        this.project = response.data;
        console.log("One project: ", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="project">
    <div>
      <h1>{{ student.first_name }}{{ student.last_name }}</h1>
      <h2>Description</h2>
      <p>Description: {{ student.description }}</p>
      <p>URL: {{ student.url }}</p>
      <img v-bind:src="student.screenshot" />
    </div>
  </div>
</template>
