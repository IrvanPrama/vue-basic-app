<template>
  <div>
    <h1 ref="myref">Hook Tutorial</h1>
    <h2>My name is: {{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Irvanprama_",
    };
  },
  beforeCreate() {
    console.log("before created", this.name);
  },
  created() {
    // call mostly initial functions data from it...
    console.log(
      "data and other functions is available but not html",
      this.name
    );
  },
  mounted() {
    console.log(this.$refs.myref);
  },
};
</script>