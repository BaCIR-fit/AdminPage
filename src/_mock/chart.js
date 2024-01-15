// import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const camembertData = {
    series: [
        { label: 'America', value: faker.number.int({max:100}) },
        { label: 'Asia', value: faker.number.int({max:100}) },
        { label: 'Europe', value: faker.number.int({max:100}) },
        { label: 'Africa', value: faker.number.int({max:100}) },
    ],
};
// console.log(chartData);


export const graphData = {
    labels: [
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',
    ],
    series: [
        {
            name: 'Team A',
            type: 'column',
            fill: 'solid',
            data: [
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
            ],
        },
        {
            name: 'Team B',
            type: 'area',
            fill: 'gradient',
            data: [
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
            ],
        },
        {
            name: 'Team C',
            type: 'line',
            fill: 'solid',
            data: [
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
                faker.number.int({max:100}),
            ],
        },
    ],
};
// console.log(graphData);

export const barData = {
    series: [
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
        { label: faker.location.country(), value: faker.number.int({max:1000}) },
    ],
};



export const webData = {
    categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
    series: [
        { name: 'Series 1', data: [
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
        ] },
        { name: 'Series 2', data: [
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
        ] },
        { name: 'Series 3', data: [
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
            faker.number.int({ min: 0, max: 100 }),
        ] },
    ],
};

