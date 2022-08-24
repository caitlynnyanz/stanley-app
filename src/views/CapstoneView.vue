<script>
import axios from "axios";

export default {
  data: function () {
    return {
      capstone: {},
    };
  },
  created: function () {
    this.showCapstone();
  },
  methods: {
    showCapstone: function () {
      axios.get("/capstones/" + this.$route.params.id + ".json").then((response) => {
        this.capstone = response.data;
        console.log("One capstone: ", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="capstone">
    <div>
      <h1>{{ student.first_name }}{{ student.last_name }}</h1>
      <h2>Description</h2>
      <p>Description: {{ student.description }}</p>
      <p>URL: {{ student.url }}</p>
      <img v-bind:src="student.screenshot" />
    </div>
  </div>
</template>
