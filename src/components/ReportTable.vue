<script setup lang="ts">
import { type PropType } from 'vue';
import { Report } from '@/modules/Athlete/Athlete';
import { type Headers } from '../plugins/vuetify';

defineProps({
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
            width: 150,
            colspan: 1,
        },
        {
            title: 'Conference',
            key: 'conference',
            align: 'start',
            sortable: false,
            width: 365,
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

// this is definitely a little 'hacky'. v-data-table is still in vuetify's labs
// so it has limited support and features. Styling an entire row is one of those limitations.
const cellBgColor = (idx: number): string => {
    return `background-color: ${idx % 2 === 0 ? '' : '#E8F0FE'} !important`
}

</script>
<template>
    <v-data-table
        :items="reports"
        :headers="headers"
        :hide-default-footer="true"
        :items-per-page="15"
        disable-pagination
        density="compact"
    >
        <template v-slot:[`column.ranking`]="{}">
            {{ 'Ranking*'  }}<br />{{ '(DI NCAA)' }}<br />{{  '(DII & DIII Hero Sports)' }}
        </template>

        <template v-slot:[`column.gpa.min`]="{column}">
            <br />{{ column.title }}
        </template>

        <template v-slot:[`column.gpa.percentile25`]="{column}">
            <br />{{ column.title }}
        </template>

        <template v-slot:[`column.gpa.percentile50`]="{column}">
            {{ 'GPA**'  }}<br />{{ column.title }}
        </template>

        <template v-slot:[`column.gpa.percentile75`]="{column}">
            <br />{{ column.title }}
        </template>

        <template v-slot:[`column.gpa.max`]="{column}">
            <br />{{ column.title }}
        </template>

        <template v-slot:item="{ item, index }">
            <tr>
                <td :style="cellBgColor(index)">{{ item.columns.school }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns.division }}</td>
                <td :style="cellBgColor(index)">{{ item.columns.conference }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns.ranking }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns['gpa.min'].toFixed(2) }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns['gpa.percentile25'].toFixed(2) }}</td>
                <td 
                    align="center" 
                    :style="`background-color: ${item.raw.gpa.setPercentile50Color(playerGpa)} !important;`"
                    :data-test="`highlighted-cell-${index+1}`"
                >{{ item.columns['gpa.percentile50'].toFixed(2) }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns['gpa.percentile75'].toFixed(2) }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns['gpa.max'].toFixed(2) }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns['sat.reading'].formatSatReading() }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.columns['sat.math'].formatSatMath() }}</td>
                <td align="center" :style="cellBgColor(index)">{{ item.raw.act.formatAct() }}</td>
            </tr>
        </template>
        <template #bottom></template>
    </v-data-table>
</template>
<style>
.v-data-table__th {
  background-color: #222222 !important;
  color: white !important;
}
table > tbody > tr > td:nth-child(1), 
table > thead > tr > th:nth-child(1) {
    position: sticky !important; 
    position: -webkit-sticky !important; 
    left: 0; 
    z-index: 9998;
    background: white;
}

table > thead > tr > th:nth-child(1) {
    z-index: 9999;
}
</style>