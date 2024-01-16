import { faker } from '@faker-js/faker';

export const employes = [...Array(5)].map((_, index) => ({
  id: faker.number.int({ min: 1, max: 100000 }),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  nom: faker.person.lastName(),
  prenom: faker.person.firstName(),
  dateNaissance: faker.date.past().toLocaleDateString(),
  salleAttribuee: faker.number.int({ min: 1, max: 3 }).toString(),
  actif: faker.datatype.boolean(),
  mail: faker.internet.email(),
}));
