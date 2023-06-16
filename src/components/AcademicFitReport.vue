<script setup lang="ts">
import { type PropType } from 'vue';
import { Athlete } from '@/modules/Athlete/Athlete';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    athlete: { type: Object as PropType<Athlete>, required: true}
});

const defaultIconColor = (): string => {
    const colorArr: string[] = ['#f1603c','#6082fa','#827cb8','#0097a4','#ffe066','#ffa94d'];
    return colorArr[Math.floor(Math.random() * colorArr.length)]
}

const getInitials = (): string => {
    return props.athlete.name.split(" ").map((n)=>n[0]).join("");
}
</script>
<template>
    <v-container>
        <v-row class="align-end">
            <v-col cols="2" class="ma-0 pl-14">
                <v-img
                    v-if="!athlete.profile_image && athlete.profile_image !== ''"
                    width="115"
                    cover
                    :src="athlete.profile_image"
                    class="justify-end avatar"
                ></v-img>
                <v-avatar 
                    v-else 
                    :color="defaultIconColor()"
                    size="115"
                >
                    <span class="text-h2">{{ getInitials() }}</span>
                </v-avatar>
            </v-col>
            <v-col cols="2">
                <v-row class="">
                    <v-col cols="auto">
                        <h2 class="name_title">{{ athlete.name }}</h2>
                        <p><strong>Sport:</strong> {{ athlete.sport }}</p>
                        <p><strong>Class:</strong> {{ athlete.grad_year }}</p>
                        <p><strong>Club:</strong> {{ athlete.club.name }}</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" class="align-end">
                <v-row>
                    <v-col cols="auto">
                        <p><strong>High School:</strong> {{ athlete.high_school.name }}</p>
                        <p><strong>GPA:</strong> {{ athlete.gpa }}</p>
                        <p><strong>Desired Major:</strong> {{ athlete.major }}</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" align="right">
                <h3 class="report_title">Academic Fit Report</h3>
            </v-col>
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