new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue ninja",
    name: "Ryu",
    url: "www.https://youtube.com",
    classes: ["one", "two"],
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}`;
    },
  },
});
