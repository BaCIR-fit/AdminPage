
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

    return dataFromApi;
}

function parseData(data) {
    const dataForGraphDate = [];

    // récup des dates
    data.data.forEach(element => {
        const userActivity = element.logs;

        const userName = `${element.first_name} ${element.last_name}`;

        const workoutDates = [];

        userActivity.forEach(log => {
            workoutDates.push(log.workout_date);
        });

        const date = new Date(workoutDates[workoutDates.length - 1]);

        dataForGraphDate.push({ date, userName });
    });

    const sortedData = dataForGraphDate.sort((a, b) => b.date - a.date);

    const result = [];
    sortedData.forEach((dataRes) => {
        const index = sortedData.indexOf(dataRes);
        result.push({
            title: dataRes.userName,
            type: `order${index + 1}`,
            time: dataRes.date,
        });
    });    


    return result;
}

const dataFromApi = await getData();
console.log(dataFromApi);
export const lastActivities = parseData(dataFromApi);

