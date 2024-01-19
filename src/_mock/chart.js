// import { sample } from 'lodash';
import { faker } from '@faker-js/faker';
import { forEach } from 'lodash';
import moment from "moment";

export const camembertData = {
    series: [
        { label: 'America', value: faker.number.int({ max: 100 }) },
        { label: 'Asia', value: faker.number.int({ max: 100 }) },
        { label: 'Europe', value: faker.number.int({ max: 100 }) },
        { label: 'Africa', value: faker.number.int({ max: 100 }) },
    ],
};
// console.log(chartData);


export const webData = {
    categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
    series: [
        {
            name: 'Series 1', data: [
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
            ]
        },
        {
            name: 'Series 2', data: [
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
            ]
        },
        {
            name: 'Series 3', data: [
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
                faker.number.int({ min: 0, max: 100 }),
            ]
        },
    ],
};






async function getData() {

    const dataFromApi = await fetch('https://apibacir.fly.dev/admin/getAllUsers/100', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'x-api-key': 'testtest'
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            // Gérer les erreurs
            console.log(error);
        });

    console.log("dataFromApi", dataFromApi);

    return dataFromApi;
}

function parseDataGraph(data) {
    const dataGraph = [];
    const dataUser = [];

    data.data.forEach(element => {
        const userActivity = element;
        dataUser.push(userActivity);
    });

    dataUser.forEach(element => {

        const userName = `${element.first_name} ${element.last_name}`;

        const userActivity = element.logs;

        const dataTable = userActivity;

        const workoutDates = [];
        const workoutDuration = [];

        dataTable.forEach(log => {
            if (log.workout_date !== undefined) {
                workoutDates.push(moment(log.workout_date).format("MM/DD/YYYY"));
            }
            if (log.workout_duration !== undefined) {
                workoutDuration.push(log.workout_duration);
            }
        });

        dataGraph.push({ workoutDates, workoutDuration, userName });
    });

    // console.log("dataGraph", dataGraph);

    // Obtenez toutes les dates distinctes
    const allDates = Array.from(new Set(dataGraph.reduce((acc, entry) => acc.concat(entry.workoutDates), [])));

    // Parcourez chaque utilisateur et complétez les valeurs manquantes avec zéro
    dataGraph.forEach(entry => {
        const existingDates = entry.workoutDates.slice(); // Copie des dates existantes pour éviter les problèmes de références
        entry.workoutDates = allDates.map(date => entry.workoutDates.includes(date) ? date : null);
        entry.workoutDuration = allDates.map(date => {
          const index = existingDates.indexOf(date);
          const duration = index !== -1 ? entry.workoutDuration[index] : undefined;
          return duration !== undefined ? duration : 0;
        });
      });

    const seriesData = [];
    forEach(dataGraph, (item) => {
        seriesData.push({
            name: item.userName,
            type: 'column',
            fill: 'solid',
            data: item.workoutDuration,
        })
    });


    const graphData = {
        labels: allDates,
        series: seriesData,
    };

    return graphData;
}




function parseDataBar(data) {
    const dataGraph = [];
    const dataUser = [];

    data.data.forEach(element => {
        const userActivity = element;
        dataUser.push(userActivity);
    });

    dataUser.forEach(element => {
        const userName = `${element.first_name} ${element.last_name}`;
        const userActivity = element.logs;
        const dataTable = userActivity;
        const workoutDuration = [];

        dataTable.forEach(log => {
            if (log.workout_duration !== undefined) {
                workoutDuration.push(log.workout_duration);
            }
        });

        const sumWorkoutDuration = workoutDuration.reduce((acc, curr) => acc + curr, 0);

        dataGraph.push({ workoutDuration: sumWorkoutDuration, userName });
    });

    const seriesData = [];
    forEach(dataGraph, (item) => {
        seriesData.push({
            label: item.userName,
            value: item.workoutDuration,
        })
    });

    // console.log("seriesData", seriesData);

    const sortedSeriesData = seriesData.sort((a, b) => b.value - a.value);

    const barData = {
        series: sortedSeriesData,
    };

    return barData;
}



const dataFromApi = await getData();
export const graphData = parseDataGraph(dataFromApi);
export const barData = parseDataBar(dataFromApi);
