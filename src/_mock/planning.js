import axios from 'axios';
import forEach from 'lodash/forEach';

const getPlanning = [];
await axios.get('https://apibacir.fly.dev/user/getAllActivity', {
    headers: {
        'x-api-key': 'testtest'
    }
}).then(response => {

    const eventsTable = response.data.data;
    console.log(eventsTable);
    forEach(eventsTable, events => {
        getPlanning.push(events); // Push each user object into the users array
    });

    return getPlanning;
})
    .catch(error => {
        console.error(error);
    });


// console.log(users);

export { getPlanning };