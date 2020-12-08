<template>
  <div id="app">
    <CountDown
      :year="year"
      :month="month"
      :day="day"
      :hour="hour"
      :minute="minute"
    ></CountDown>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CountDown from "./CountDown/CountDown.vue";

export default Vue.extend({
  name: "App",
  data: function() {
    return {
      year: 2020,
      month: 12,
      day: 9,
      hour: 12,
      minute: 30,
    };
  },
  components: {
    CountDown,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
