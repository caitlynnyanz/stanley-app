<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/students/:id">Profile</router-link>
    |
    <router-link to="/students/:id/projects">Projects</router-link>
  </nav> -->
  <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

  <div class="topnav" id="myTopnav">
    <a href="#" class="active">Student Portal</a>
    <a v-if="!isLoggedIn" href="/login">Login</a>
    <a href="/students/:id">Profile</a>
    <a href="/students/:id/projects">Projects</a>
    <a v-if="isLoggedIn" href="/logout">Logout</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
body {
  font-family: Georgia, Times, Times New Roman, serif;
  background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/45degreee_fabric.png");
}
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: rgb(168, 168, 168);
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #1e4656;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
</style>
