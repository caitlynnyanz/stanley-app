<script>
import axios from "axios";
export default {
  data: function () {
    return {
      project: {},
      errors: [],
    };
  },
  created: function () {
    this.showProject();
  },
  methods: {
    updateProject: function (project) {
      axios
        .patch("/project/" + project.id, this.editProjectParams)
        .then((response) => {
          console.log("projects update", response);
          this.$router.push("/projects");
        })
        .catch((error) => {
          console.log("projects update error", error.response);
          this.errors = error.response.data.errors;
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
