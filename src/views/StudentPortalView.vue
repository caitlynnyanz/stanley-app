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
        <a v-bind:href="`/students/:id/projects`" class="btn btn-primary">Projects</a>
      </div>
      <div>
        <h3>Social Media</h3>
        <p>LinkedIn: {{ student.linkedin_url }}</p>
        <p>Twitter: {{ student.twitter_handle }}</p>
        <p>Github: {{ student.github_url }}</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <h3>Experience</h3>
      <div v-for="experience in student.experience" v-bind:key="experience.id">
        <p>Job Title: {{ experience.job_title }}</p>
        <p>Company Name: {{ experience.company_name }}</p>
        <p>Start/End Date: {{ experience.start_date }}{{ experience.end_date }}</p>
        <p>Description: {{ experience.details }}</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <h3>Education</h3>
      <div v-for="education in student.education" v-bind:key="education.id">
        <p>Degree: {{ education.degree }}</p>
        <p>University: {{ education.university_name }}</p>
        <p>Start/End Date: {{ education.start_date }}{{ education.end_date }}</p>
        <p>Description: {{ education.details }}</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <h3>Skills</h3>
      <div v-for="skill in student.skills" v-bind:key="skill.id"></div>
    </div>
    <a v-bind:href="`/students/:id/edit`" class="btn btn-primary">Edit Info</a>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(239, 239, 239);
}
</style>
