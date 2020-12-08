<template>
  <Time
    :days="remaining.days"
    :hours="remaining.hours"
    :minutes="remaining.minutes"
    :seconds="remaining.seconds"
  />
</template>

<script lang="ts">
import Vue from "vue";

import getDateDiff, { DateDiff } from "./get-date-diff";
import Time from "./Time.vue";

interface VueData {
  intervalId: undefined | number;
  remaining: DateDiff;
}

export default Vue.extend({
  name: "CountDown",
  components: {
    Time,
  },
  props: {
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number,
  },
  data: function data(): VueData {
    return {
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
      this.remaining = getDateDiff(
        new Date(),
        new Date(
          this.year,
          this.month - 1,
          this.day,
          this.hour,
          this.minute,
          0,
          0,
        ),
      );
    },
    start() {
      this.clear();
      this.intervalId = setInterval(this.setDiff, 1000);
    },
  },
  mounted() {
    this.start();
  },
  destroyed() {
    this.clear();
  },
});
</script>
