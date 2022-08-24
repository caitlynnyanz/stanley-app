<script>
// import axios from "axios";

import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
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
  },
};
</script>

<template>
  <div class="container">
    <div>
      <img v-bind:src="student.photo" />
      <h2>{{ student.first_name }}{{ student.last_name }}</h2>
      <div>
        <h3>Bio</h3>
        <p>{{ student.bio }}</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Email: {{ student.email }}</p>
        <p>Phone Number: {{ student.phone_number }}</p>
      </div>
      <div>
        <h3>Portfolio</h3>
        <p>Personal Website: {{ student.personal_blog_url }}</p>
        <p>Resume: {{ student.online_resume_url }}</p>
      </div>
      <div>
        <h3>Social Media</h3>
        <p>LinkedIn: {{ student.linkedin_url }}</p>
        <p>Twitter: {{ student.twitter_handle }}</p>
        <p>Github: {{ student.github_url }}</p>
      </div>
    </div>
  </div>
</template>
