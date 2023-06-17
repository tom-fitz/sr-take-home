<script setup lang="ts">
import AcademicFitReport from '../../components/AcademicFitReport.vue';
import AthleteData from '@/assets/data.json';
import { ref } from 'vue';
import { 
    Athlete,
    Club,
    HighSchool,
    Report,
    Gpa,
    Sat,
    Act,
    ReadingScore,
    MathScore,
} from '../Athlete/Athlete';

const jsonObj = AthleteData.data[0];
const reportsData: Report[] = jsonObj.report.map((r) => new Report(
    r.school,
    r.division,
    r.conference,
    r.ranking,
    new Gpa(r.gpa.min, r.gpa['25%'], r.gpa['50%'], r.gpa['75%'], r.gpa.max),
    new Sat(
        new ReadingScore(Number(r.sat.reading.min), Number(r.sat.reading.max)),
        new MathScore(Number(r.sat.math.min), Number(r.sat.math.max)),
    ),
    new Act(r.act.min, r.act.max),
))
const data = ref(new Athlete(
    jsonObj.name,
    jsonObj.sport,
    jsonObj.grad_year,
    jsonObj.birthday,
    jsonObj.email,
    jsonObj.url,
    new Club(jsonObj.club.name),
    new HighSchool(jsonObj.high_school.name),
    jsonObj.gpa,
    jsonObj.major,
    jsonObj.profile_image,
    reportsData,
)).value;
</script>

<template>
<AcademicFitReport :athlete="data" />
</template>