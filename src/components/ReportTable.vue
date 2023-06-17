<script setup lang="ts">
import { type PropType } from 'vue';
import { Report } from '@/modules/Athlete/Athlete';
import { type Headers } from '../plugins/vuetify';
const props = defineProps({
    reports: { type: Array as PropType<Report[]>, required: true}
});
const headers: Headers = [
    {
        title: 'School Name',
        key: 'school',
        align: 'start',
        sortable: false,
    },
    {
        title: 'Athletic Div',
        key: 'division',
        align: 'center',
        sortable: false,
    },
    {
        title: 'Conference',
        key: 'conference',
        align: 'start',
        sortable: false,
    },
    {
        title: 'Ranking* (DI NCAA) (DII & DIII Hero Sports)',
        key: 'ranking',
        align: 'center',
        sortable: false,
    },
    {
        title: 'GPA**',
        key: 'gpa',
        align: 'start',
        sortable: false,
    },
    {
        title: 'SAT Reading*** 25%-75%',
        key: 'sat.reading',
        align: 'center',
        sortable: false,
    },
    {
        title: 'SAT Math*** 25%-75%',
        key: 'sat.math',
        align: 'center',
        sortable: false,
    },
    {
        title: 'ACT Composite*** 25%-75%',
        key: 'act',
        align: 'center',
        value: 'act.min-act.max',
        sortable: false,
    }
]
</script>
<template>
    <v-data-table
        :items="reports"
        :headers="headers"
    ></v-data-table>
</template>