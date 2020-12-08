<template>
  <Time
    v-if="ready"
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
  /** Prevent showing the countdown before the calculation of the remaining time */
  ready: boolean;
  intervalId: undefined | number;
  remaining: DateDiff;
}

const isExpired = (diff: DateDiff) => Object.values(diff).some(val => val < 0);

export default Vue.extend({
  name: "Countdown",
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
      ready: false,
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
      const remaining = getDateDiff(
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

      if (isExpired(remaining)) {
        this.remaining = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliSeconds: 0,
        };
      } else {
        this.remaining = remaining;
      }

      this.ready = true;
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
