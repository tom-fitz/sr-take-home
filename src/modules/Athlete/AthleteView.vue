<template>
<AcademicFitReport :athlete="data" />
</template>

<script setup lang="ts">
import AcademicFitReport from '../../components/AcademicFitReport.vue';
import AthleteData from '@/assets/data.json';
import { ref } from 'vue';

const data = ref(AthleteData.data[0]);
</script>