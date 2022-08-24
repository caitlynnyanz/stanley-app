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
  <div>
    <h2>Edit Student Info</h2>
    <form v-on:submit.prevent="editStudent()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div>
        First Name:
        <input type="text" v-model="student.first_name" />
      </div>
      <div>
        Last Name:
        <input type="text" v-model="student.last_name" />
      </div>
      <div>
        Student Email:
        <input type="text" v-model="student.email" />
      </div>
      <div>
        Phone Number:
        <input type="text" v-model="student.phone_number" />
      </div>
      <div>
        Short Bio:
        <input type="text" v-model="student.short_bio" />
      </div>
      <div>
        Resume:
        <input type="text" v-model="student.online_resume_url" />
      </div>
      <div>
        Photo:
        <input type="text" v-model="student.photo" />
      </div>
      <div>
        Github:
        <input type="text" v-model="student.github_url" />
      </div>
      <div>
        LinkedIn:
        <input type="text" v-model="student.linkedin_url" />
      </div>
      <div>
        Twitter:
        <input type="text" v-model="student.twitter_handle" />
      </div>
      <div>
        Personal Blog:
        <input type="text" v-model="student.personal_blog_url" />
      </div>
    </form>
  </div>
</template>
