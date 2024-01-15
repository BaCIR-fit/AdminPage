import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const users = [...Array(24)].map((_, index) => ({
  id: faker.number.int({ min: 1, max: 100000 }),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  nom: faker.person.lastName(),
  prenom: faker.person.firstName(),
  dateNaissance: faker.date.past().toLocaleDateString(),
  sexe: sample(['Homme', 'Femme', 'Avion de chasse']),
  actif: faker.datatype.boolean(),
  mail: faker.internet.email(),
}));
