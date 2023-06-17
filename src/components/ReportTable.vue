<script setup lang="ts">
import { type PropType } from 'vue';
import { Report } from '@/modules/Athlete/Athlete';
import { type Headers } from '../plugins/vuetify';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    reports: { type: Array as PropType<Report[]>, required: true},
    playerGpa: { type: Number, required: true}
});
const headers: Headers = [
    [
        {
            title: 'School Name',
            key: 'school',
            align: 'start',
            sortable: false,
            width: 320,
            colspan: 1,
        },
        {
            title: 'Athletic Div',
            key: 'division',
            align: 'center',
            sortable: false,
            colspan: 1,
        },
        {
            title: 'Conference',
            key: 'conference',
            align: 'start',
            sortable: false,
            width: 300,
            colspan: 1,
        },
        {
            title: 'Ranking* (DI NCAA) (DII & DIII Hero Sports)',
            key: 'ranking',
            align: 'center',
            sortable: false,
            width: 200,
            colspan: 1,
        },
        {
            title: 'min',
            key: 'gpa.min',
            align: 'center',
            sortable: false,
        },
        {
            title: '25%',
            key: 'gpa.percentile25',
            align: 'center',
            sortable: false,
        },
        {
            title: '50%',
            key: 'gpa.percentile50',
            align: 'center',
            sortable: false,
        },
        {
            title: '75%',
            key: 'gpa.percentile75',
            align: 'center',
            sortable: false,
        },
        {
            title: 'max',
            key: 'gpa.max',
            align: 'center',
            sortable: false,
        },
        {
            title: 'SAT Reading*** 25%-75%',
            key: 'sat.reading',
            align: 'center',
            sortable: false,
            width: 150,
        },
        {
            title: 'SAT Math*** 25%-75%',
            key: 'sat.math',
            align: 'center',
            sortable: false,
            width: 150,
        },
        {
            title: 'ACT Composite*** 25%-75%',
            key: 'act',
            align: 'center',
            value: 'act.min-act.max',
            sortable: false,
            width: 180,
        }
    ]
];

</script>
<template>
    <v-data-table
        :items="reports"
        :headers="headers"
        :hide-default-footer="true"
        :items-per-page="15"
        disable-pagination
        class="elevation-1"
    >
        <template v-slot:[`column.ranking`]="{}">
            {{ 'Ranking*'  }}<br />{{ '(DI NCAA)' }}<br />{{  '(DII & DIII Hero Sports)' }}
        </template>
        <template v-slot:[`item.gpa.percentile50`]="{ item }">
            <!-- <tr>
                <td 
                :style="`background-color:${item.raw.gpa.setPercentile50Color(playerGpa)}`"
                >
                    {{ item.columns['gpa.percentile50'] }}
                </td>
            </tr> -->
            <v-chip :color="item.raw.gpa.setPercentile50Color(playerGpa)">
                {{ item.columns['gpa.percentile50'] }}
            </v-chip>
        </template>
        <template v-slot:[`item.sat.reading`]="{ item }">
            {{ item.columns['sat.reading'].formatSatReading() }}
        </template>
        <template v-slot:[`item.sat.math`]="{ item }">
            {{ item.columns['sat.math'].formatSatMath() }}
        </template>
        <template v-slot:[`item.act`]="{ item }">
            {{ item.raw.act.formatAct() }}
        </template>
        <template #bottom></template>
    </v-data-table>
</template>
<style scoped>
.header_title {
    background-color: #222222;
}
</style>