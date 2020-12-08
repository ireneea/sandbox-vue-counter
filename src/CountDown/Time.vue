<template>
  <div class="time-wrapper">
    <div class="time-unit">
      <div class="time-unit__value">{{ displayDays }}</div>
      <div class="time-unit__label">Days</div>
    </div>
    <div class="time-unit">
      <div class="time-unit__value">{{ displayHours }}</div>
      <div class="time-unit__label">Hours</div>
    </div>
    <div class="time-unit">
      <div class="time-unit__value">{{ displayMinutes }}</div>
      <div class="time-unit__label">Minutes</div>
    </div>
    <div class="time-unit">
      <div class="time-unit__value">{{ displaySeconds }}</div>
      <div class="time-unit__label">Seconds</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const formatNumber = (value: number) => {
  let formated = `${value}`;
  if (formated.length === 1) {
    formated = `0${formated}`;
  }
  return formated;
};
export default Vue.extend({
  props: {
    days: Number,
    hours: Number,
    minutes: Number,
    seconds: Number,
  },
  computed: {
    displayDays() {
      return formatNumber(this.days);
    },
    displayHours() {
      return formatNumber(this.hours);
    },
    displayMinutes() {
      return formatNumber(this.minutes);
    },
    displaySeconds() {
      return formatNumber(this.seconds);
    },
  },
});
</script>

<style scoped>
.time-wrapper {
  display: flex;
  width: 350px;
  margin: auto;
  text-align: center;
  border: 1px solid rgb(228, 228, 228);
  box-shadow: 5px 5px 5px 0px rgba(211, 211, 211, 0.3);
}

.time-unit {
  flex: 1;
  padding: 10px;
  /* border: 1px solid gray; */
}

.time-unit__value {
  font-size: 2rem;
}

.time-unit__label {
  margin-top: 5px;
  color: rgb(155, 155, 155);
}
</style>
