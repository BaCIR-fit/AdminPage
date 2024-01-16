import { faker } from '@faker-js/faker';

export const salle = [...Array(3)].map((_, index) => ({
    id: faker.number.int({ min: 1, max: 100000 }),
    nomSalle : faker.person.firstName(),
    machines: [...Array(faker.number.int({min : 0, max: 5}))].map(() => ({
        id: faker.number.int({ min: 1, max: 100000 }),
        nomMachine: faker.commerce.productName(),
        marqueMachine: faker.commerce.productName(),
        muscleTravaille: faker.commerce.productName(),
    })),
}));
