new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue ninja",
    showName: true,
    showAge: true,
  },
  methods: {
    nameToggle() {
      this.showName = !this.showName;
    },
    ageToggle() {
      this.showAge = !this.showAge;
    },
  },
});
