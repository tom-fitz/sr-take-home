<script setup lang="ts">
import { Athlete } from '@/modules/Athlete/Athlete';
import ReportTableVue from './ReportTable.vue';
defineProps({
    athlete: { type: Athlete, required: true}
});

</script>
<template>
<v-container>
    <v-row class="align-end">
      <v-col cols="auto" md="2" class="ma-0 pl-14">
        <v-img
          v-if="athlete.profile_image && athlete.profile_image !== ''"
          width="115"
          cover
          :src="athlete.profile_image"
          class="justify-end avatar"
        ></v-img>
        <v-avatar
          v-else
          :color="athlete.defaultIconColor()"
          size="115"
        >
          <span class="text-h2">{{ athlete.getInitials() }}</span>
        </v-avatar>
      </v-col>
      <v-col cols="auto">
        <h2 class="name_title">{{ athlete.name }}</h2>
        <p><strong>Sport:</strong> {{ athlete.sport }}</p>
        <p><strong>Class:</strong> {{ athlete.grad_year }}</p>
        <p><strong>Club:</strong> {{ athlete.club.name }}</p>
      </v-col>
      <v-col cols="auto">
        <p><strong>High School:</strong> {{ athlete.high_school.name }}</p>
        <p><strong>GPA:</strong> {{ athlete.gpa }}</p>
        <p><strong>Desired Major:</strong> {{ athlete.major }}</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" class="text-end">
        <h3 class="report_title">Academic Fit Report</h3>
      </v-col>
    </v-row>
    <v-row class="mt-16">
        <ReportTableVue :reports="athlete.report" :player-gpa="athlete.gpa" />
    </v-row>
  </v-container>
</template>
<style scoped>
.name_title {
    color: #00B4FF;
    font-size: 24px;
}
.avatar {
    border-radius: 50%;
}
</style>