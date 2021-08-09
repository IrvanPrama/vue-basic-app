<template>
  <div class="">
    <h1>Methods</h1>
    <h2>We can have some data share</h2>
    <h3>the number is: {{ views }}</h3>
    <button @click="updateCounter(1)">Increase</button>
    <button @click="updateCounter(-1)">Decrease</button>
    <br />
    <br /><br />
    <div class="" v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.post }}</p>
    </div>

    <br /><br />

    <div class="">
      <h1 v-if="showItem">show this item if "showItem" is true</h1>
      <h1 v-else>show this item if "showItem" is true</h1>
    </div>

    <!-- it will now working when else declair in another div, but u can use v-if="!showItem" to solve that -->

    <button @click="changeShowItem">Change Show Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      views: 0,
      blogs: [],
      showItem: false,
    };
  },
  methods: {
    updateCounter(number) {
      this.views += number;
    },
    changeShowItem() {
      this.showItem = !this.showItem;
    },
  },
  created() {
    this.views = 100;
    // get the blog posts
    let posts = [
      { title: "this is blog title", post: "this is the blog post 1", id: 1 },
      { title: "this is blog title", post: "this is the blog post 2", id: 2 },
      { title: "this is blog title", post: "this is the blog post 3", id: 3 },
      { title: "this is blog title", post: "this is the blog post 4", id: 4 },
    ];
    this.blogs = posts;
  },
};
</script>