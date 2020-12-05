<template>
  <div id="app">
    <h1>Count Down</h1>

    <div>
      <div id="days">{{ remaining.days }} Days</div>
      <div id="hours">{{ remaining.hours }} Hours</div>
      <div id="minutes">{{ remaining.minutes }} Minutes</div>
      <div id="seconds">{{ remaining.seconds }} Seconds</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import getDateDiff, { DateDiff } from "./get-date-diff";

interface VueData {
  endTime: Date;
  intervalId: undefined | number;
  remaining: DateDiff;
}

export default Vue.extend({
  name: "App",
  data: function data(): VueData {
    return {
      endTime: new Date(2021, 11, 4, 17, 20, 0),
      intervalId: undefined,
      remaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliSeconds: 0,
      },
    };
  },
  methods: {
    clear() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
    setDiff() {
      this.remaining = getDateDiff(new Date(), this.endTime);
    },
    start() {
      this.clear();
      this.intervalId = setInterval(this.setDiff.bind(this), 1000);
    },
  },
  mounted() {
    this.start();
  },
  destroyed() {
    this.clear();
  },
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
