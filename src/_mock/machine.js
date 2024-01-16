import { faker } from '@faker-js/faker';

export const machine = [...Array(4)].map((_, index) => ({
    id: faker.number.int({ min: 1, max: 100000 }),
    nomMachine: faker.commerce.productName(),
    marqueMachine: faker.commerce.productName(),
    muscleTravaille: faker.commerce.productName(),
    
}));
