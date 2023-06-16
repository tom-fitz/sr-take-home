<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    athlete: { type: Object, required: true}
});
</script>
<template>
    <div>
    <div class="info">
      <h2>{{athlete.name}}</h2>
      <ul>
        <li>
          <label>Sport:</label>
          {{athlete.sport}}
        </li>
        <li>
          <label>Class:</label>
          {{athlete.grad_year}}
        </li>
        <li>
          <label>Club:</label>
          {{athlete.club.name}}
        </li>
        <li>
          <label>High School:</label>
          {{athlete.high_school.name}}
        </li>
        <li>
          <label>GPA:</label>
          {{athlete.gpa}}
        </li>
        <li>
          <label>Desired Major:</label>
          {{athlete.major}}
        </li>
      </ul>
    </div>
  </div>
</template>