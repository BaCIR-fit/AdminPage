import { faker } from '@faker-js/faker';

export const lastActivities = [...Array(5)].map((_, index) => ({
    id: faker.string.uuid(),
    title: [
        `${faker.person.firstName()}  ${faker.person.lastName()} (${faker.number.int({max:10000})})`,
        `${faker.person.firstName()}  ${faker.person.lastName()} (${faker.number.int({max:10000})})`,
        `${faker.person.firstName()}  ${faker.person.lastName()} (${faker.number.int({max:10000})})`,
        `${faker.person.firstName()}  ${faker.person.lastName()} (${faker.number.int({max:10000})})`,
        `${faker.person.firstName()}  ${faker.person.lastName()} (${faker.number.int({max:10000})})`,
    ][index],
    type: `order${index + 1}`,
    time: faker.date.past(),
}));
