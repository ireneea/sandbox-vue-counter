<template>
  <div id="app">
    <Countdown
      :year="year"
      :month="month"
      :day="day"
      :hour="hour"
      :minute="minute"
    ></Countdown>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Countdown from "./Countdown/Countdown.vue";

export default Vue.extend({
  name: "App",
  data: function() {
    return {
      year: 2021,
      month: 1,
      day: 1,
      hour: 12,
      minute: 30,
    };
  },
  components: {
    Countdown,
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
