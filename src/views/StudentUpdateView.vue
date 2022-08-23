<script>
// import axios from "axios";

import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      errors: [],
    };
  },
  created: function () {
    this.showStudent();
  },
  methods: {
    showStudent: function () {
      axios.get("/students/" + this.$route.params.id + ".json").then((response) => {
        this.student = response.data;
        console.log("One student: ", response.data);
      });
    },
    editStudent: function () {
      axios
        .patch("/students/" + this.student.id + ".json", this.student)
        .then((response) => {
          console.log("Success!", response.data);
          this.$router.push("/students");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <h1>Edit Student Info</h1>
</template>
